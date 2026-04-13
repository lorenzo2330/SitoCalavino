// src/pages/api/disponibilita-apt1.ts
// (duplica come disponibilita-apt2.ts cambiando le env vars)
//
// Variabili d'ambiente necessarie in Vercel:
//   APT1_ICAL_BOOKING   → link iCal Booking.com appartamento 1
//   APT1_ICAL_AIRBNB    → link iCal Airbnb appartamento 1
//   APT1_ICAL_GCAL      → link iCal Google Calendar appartamento 1

import type { APIRoute } from 'astro';

export const prerender = false;

// ── Parsing iCal minimale (senza dipendenze esterne) ──────
function parseIcal(text: string): Array<{ start: string; end: string }> {
  const events: Array<{ start: string; end: string }> = [];
  const lines = text.replace(/\r\n /g, '').replace(/\r\n/g, '\n').split('\n');

  let inEvent = false;
  let start = '';
  let end = '';

  for (const line of lines) {
    if (line === 'BEGIN:VEVENT') { inEvent = true; start = ''; end = ''; }
    if (line === 'END:VEVENT') {
      if (inEvent && start && end) events.push({ start, end });
      inEvent = false;
    }
    if (!inEvent) continue;

    // Gestisce sia DTSTART;VALUE=DATE:20250101 sia DTSTART:20250101T140000Z
    if (line.startsWith('DTSTART')) {
      const val = line.split(':').slice(1).join(':');
      start = val.length >= 8 ? val.substring(0, 8) : '';
    }
    if (line.startsWith('DTEND')) {
      const val = line.split(':').slice(1).join(':');
      end = val.length >= 8 ? val.substring(0, 8) : '';
    }
  }

  return events;
}

// ── Espande un intervallo in un array di date YYYY-MM-DD ──
function expandDates(start: string, end: string): string[] {
  const dates: string[] = [];
  // iCal: DTEND è il giorno DOPO l'ultimo giorno occupato (checkout)
  // quindi escludiamo l'ultimo giorno (il giorno di checkout è libero per nuovi arrivi)
  const s = new Date(`${start.substring(0,4)}-${start.substring(4,6)}-${start.substring(6,8)}`);
  const e = new Date(`${end.substring(0,4)}-${end.substring(4,6)}-${end.substring(6,8)}`);
  const cur = new Date(s);
  while (cur < e) {
    dates.push(cur.toISOString().substring(0, 10));
    cur.setDate(cur.getDate() + 1);
  }
  return dates;
}

// ── Fetch con timeout ─────────────────────────────────────
async function fetchIcal(url: string): Promise<string> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally {
    clearTimeout(timeout);
  }
}

export const GET: APIRoute = async () => {
  const urls = [
    import.meta.env.APT1_ICAL_BOOKING,
    import.meta.env.APT1_ICAL_AIRBNB,
    import.meta.env.APT1_ICAL_GCAL,
  ].filter(Boolean) as string[];

  const occupiedSet = new Set<string>();

  await Promise.allSettled(
    urls.map(async (url) => {
      try {
        const text = await fetchIcal(url);
        const events = parseIcal(text);
        for (const ev of events) {
          const days = expandDates(ev.start, ev.end);
          days.forEach(d => occupiedSet.add(d));
        }
      } catch (err) {
        console.error('iCal fetch error:', err);
      }
    })
  );

  return new Response(
    JSON.stringify({ occupied: Array.from(occupiedSet).sort() }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // cache 5 minuti
      },
    }
  );
};
