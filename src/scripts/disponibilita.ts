export {};

declare global {
  interface Window {
    __DISP_API_URL__:  string;
    __DISP_APT_NOME__: string;
  }
}

const apiUrl  = (window as Window).__DISP_API_URL__;
const aptNome = (window as Window).__DISP_APT_NOME__;

const MESI_IT    = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
                    'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
const MESI_BREVI = ['Gen','Feb','Mar','Apr','Mag','Giu',
                    'Lug','Ago','Set','Ott','Nov','Dic'];

let occupiedDays    = new Set<string>();
let baseYear        = new Date().getFullYear();
let baseMonth       = new Date().getMonth();
let selInizio:      string | null = null;
let selFine:        string | null = null;
let clickInProgress = false;

const dayElements = new Map<string, HTMLElement>();

// ── Utility ──────────────────────────────────────────────────
function dateToStr(d: Date)   { return d.toISOString().substring(0, 10); }
function strToDate(s: string) { return new Date(s + 'T00:00:00'); }

function formatIT(s: string) {
  const d = strToDate(s);
  return `${d.getDate()} ${MESI_BREVI[d.getMonth()]} ${d.getFullYear()}`;
}

function diffNotti(a: string, b: string) {
  return Math.round((strToDate(b).getTime() - strToDate(a).getTime()) / 86400000);
}

function hasOccupiedInRange(s: string, e: string) {
  const cur = strToDate(s);
  cur.setDate(cur.getDate() + 1);
  const end = strToDate(e);
  while (cur < end) {
    if (occupiedDays.has(dateToStr(cur))) return true;
    cur.setDate(cur.getDate() + 1);
  }
  return false;
}

function getClasseBase(dateStr: string, oggiStr: string) {
  if (dateStr < oggiStr)         return 'cal-giorno passato';
  if (occupiedDays.has(dateStr)) return 'cal-giorno occupato';
  if (dateStr === oggiStr)       return 'cal-giorno oggi';
  return 'cal-giorno libero';
}

// ── Riepilogo ─────────────────────────────────────────────────
function aggiornaRiepilogo() {
  const riepilogo   = document.getElementById('disp-riepilogo') as HTMLElement;
  const ctaDefault  = document.getElementById('disp-cta-default') as HTMLElement;
  const elCheckin   = document.getElementById('riepilogo-checkin') as HTMLElement;
  const elCheckout  = document.getElementById('riepilogo-checkout') as HTMLElement;
  const elNotti     = document.getElementById('riepilogo-notti') as HTMLElement;
  const btnRichiedi = document.getElementById('btn-richiedi') as HTMLAnchorElement;

  if (selInizio && selFine) {
    elCheckin.textContent  = formatIT(selInizio);
    elCheckout.textContent = formatIT(selFine);
    const n = diffNotti(selInizio, selFine);
    elNotti.textContent = `${n} ${n === 1 ? 'notte' : 'notti'}`;
    const params = new URLSearchParams({ appartamento: aptNome, checkin: selInizio, checkout: selFine });
    btnRichiedi.href = `/contatti?${params.toString()}`;
    riepilogo.style.display  = 'block';
    ctaDefault.style.display = 'none';
  } else {
    riepilogo.style.display  = 'none';
    ctaDefault.style.display = 'block';
  }
}

// ── Classi selezione ──────────────────────────────────────────
function aggiornaClassiSelezione(hoverDate: string | null = null) {
  dayElements.forEach((div, dateStr) => {
    div.classList.remove('sel-inizio', 'sel-fine', 'sel-range', 'hover-range');

    if (selInizio && selFine) {
      if (dateStr === selInizio)                         div.classList.add('sel-inizio');
      else if (dateStr === selFine)                      div.classList.add('sel-fine');
      else if (dateStr > selInizio && dateStr < selFine) div.classList.add('sel-range');
    } else if (selInizio && !selFine) {
      if (dateStr === selInizio) {
        div.classList.add('sel-inizio');
      } else if (hoverDate && hoverDate !== selInizio) {
        const [s, e] = selInizio < hoverDate ? [selInizio, hoverDate] : [hoverDate, selInizio];
        if (dateStr === e)                               div.classList.add('sel-fine');
        else if (dateStr > s && dateStr < e)             div.classList.add('hover-range');
      }
    }
  });
}

// ── Reset ─────────────────────────────────────────────────────
function resetSelezione() {
  selInizio = selFine = null;
  aggiornaClassiSelezione();
  aggiornaRiepilogo();
}
document.getElementById('btn-reset-date')?.addEventListener('click', resetSelezione);

// ── Click giorno ──────────────────────────────────────────────
function onClickGiorno(dateStr: string) {
  clickInProgress = true;
  if (!selInizio) {
    selInizio = dateStr; selFine = null;
  } else if (!selFine) {
    if (dateStr === selInizio) { resetSelezione(); clickInProgress = false; return; }
    const [s, e] = selInizio < dateStr ? [selInizio, dateStr] : [dateStr, selInizio];
    if (hasOccupiedInRange(s, e)) { selInizio = dateStr; selFine = null; }
    else { selInizio = s; selFine = e; }
  } else {
    selInizio = dateStr; selFine = null;
  }
  aggiornaClassiSelezione();
  aggiornaRiepilogo();
  setTimeout(() => { clickInProgress = false; }, 50);
}

// ── Build mese ────────────────────────────────────────────────
function buildMese(containerId: string, titoloId: string, year: number, month: number) {
  const titolo    = document.getElementById(titoloId) as HTMLElement;
  const container = document.getElementById(containerId) as HTMLElement;
  titolo.textContent  = `${MESI_IT[month]} ${year}`;
  container.innerHTML = '';

  const oggiStr    = dateToStr(new Date());
  const offset     = (new Date(year, month, 1).getDay() + 6) % 7;
  const giorniMese = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < offset; i++) {
    const v = document.createElement('div');
    v.className = 'cal-giorno vuoto';
    container.appendChild(v);
  }

  for (let g = 1; g <= giorniMese; g++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(g).padStart(2, '0')}`;
    const div = document.createElement('div');
    div.textContent = String(g);
    div.className   = getClasseBase(dateStr, oggiStr);
    if (occupiedDays.has(dateStr) && dateStr >= oggiStr) div.title = 'Non disponibile';

    const clickable = !div.classList.contains('passato') && !div.classList.contains('occupato');
    if (clickable) {
      div.addEventListener('click',      () => onClickGiorno(dateStr));
      div.addEventListener('mouseenter', () => { if (selInizio && !selFine && !clickInProgress) aggiornaClassiSelezione(dateStr); });
      div.addEventListener('mouseleave', () => { if (selInizio && !selFine && !clickInProgress) aggiornaClassiSelezione(null); });
      dayElements.set(dateStr, div);
    }
    container.appendChild(div);
  }
}

// ── Render calendari ──────────────────────────────────────────
function renderCalendari() {
  dayElements.clear();
  const m2y = baseMonth === 11 ? baseYear + 1 : baseYear;
  const m2m = (baseMonth + 1) % 12;
  buildMese('cal-giorni-1', 'cal-mese-titolo-1', baseYear, baseMonth);
  buildMese('cal-giorni-2', 'cal-mese-titolo-2', m2y, m2m);
  (document.getElementById('cal-label') as HTMLElement).textContent =
    `${MESI_IT[baseMonth]} – ${MESI_IT[m2m]}`;
  aggiornaClassiSelezione();
}

// ── Navigazione mesi ──────────────────────────────────────────
const minYear = new Date().getFullYear();
const minMonth = new Date().getMonth();

document.getElementById('cal-prev')?.addEventListener('click', () => {
  if (baseYear === minYear && baseMonth === minMonth) return;
  if (baseMonth === 0) { baseMonth = 11; baseYear--; } else baseMonth--;
  renderCalendari();
});

document.getElementById('cal-next')?.addEventListener('click', () => {
  if (baseMonth === 11) { baseMonth = 0; baseYear++; } else baseMonth++;
  renderCalendari();
});

// ── Fetch disponibilità ───────────────────────────────────────
async function caricaDisponibilita() {
  try {
    const res  = await fetch(apiUrl);
    const data = await res.json();
    occupiedDays = new Set(data.occupied ?? []);
    (document.getElementById('disp-loading') as HTMLElement).style.display = 'none';
  } catch {
    (document.getElementById('disp-loading') as HTMLElement).style.display = 'none';
    (document.getElementById('disp-errore') as HTMLElement).style.display = 'block';
  }
  // Aggiorna classi base senza ricostruire il DOM
  const oggiStr = dateToStr(new Date());
  dayElements.forEach((div, dateStr) => {
    div.classList.remove('libero', 'occupato', 'oggi', 'passato');
    div.classList.add(getClasseBase(dateStr, oggiStr).replace('cal-giorno ', ''));
    if (occupiedDays.has(dateStr) && dateStr >= oggiStr) div.title = 'Non disponibile';
  });
  aggiornaClassiSelezione();
}

// ── Avvio ──────────────────────────────────────────────────────
renderCalendari();
aggiornaRiepilogo();
caricaDisponibilita();
