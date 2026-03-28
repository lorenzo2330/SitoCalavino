// ============================================================
//  appartamento.ts
//  Script condiviso per le pagine appartamento1 e appartamento2.
//  Gestisce: galleria fotografica + selettore prezzi per ospiti.
//  Importato da appartamento1.astro e appartamento2.astro.
// ============================================================

// ── GALLERIA ─────────────────────────────────────────────────

const foto     = JSON.parse(document.getElementById('gallery')!.dataset.foto!);
const imgPrinc = document.getElementById('foto-principale') as HTMLImageElement;
const altEl    = document.getElementById('gallery-alt') as HTMLElement;
const countEl  = document.getElementById('gallery-count') as HTMLElement;
const thumbs   = document.querySelectorAll<HTMLButtonElement>('.gallery-thumb');
const btnPrev  = document.getElementById('arrow-prev') as HTMLButtonElement;
const btnNext  = document.getElementById('arrow-next') as HTMLButtonElement;
const totFoto  = foto.length;
let corrente   = 0;

function vaiFoto(i: number) {
  corrente = (i + totFoto) % totFoto;

  imgPrinc.style.opacity = '0';
  setTimeout(() => {
    imgPrinc.src = foto[corrente].src;
    imgPrinc.alt = foto[corrente].alt;
    imgPrinc.style.opacity = '1';
  }, 200);

  altEl.textContent   = foto[corrente].alt;
  countEl.textContent = `${corrente + 1} / ${totFoto}`;

  thumbs.forEach((t, idx) => t.classList.toggle('attiva', idx === corrente));
  thumbs[corrente]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

thumbs.forEach((t, i) => t.addEventListener('click', () => vaiFoto(i)));
btnPrev.addEventListener('click', () => vaiFoto(corrente - 1));
btnNext.addEventListener('click', () => vaiFoto(corrente + 1));

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft')  vaiFoto(corrente - 1);
  if (e.key === 'ArrowRight') vaiFoto(corrente + 1);
});

// ── PREZZI ───────────────────────────────────────────────────

const card        = document.getElementById('price-card')!;
const prezziTutti = JSON.parse(card.dataset.prezzi!);
const fasce       = JSON.parse(card.dataset.fasce!);
const rowsEl      = document.getElementById('price-rows')!;
const ospitiBtns  = document.querySelectorAll<HTMLButtonElement>('.ospiti-btn');

function renderPrezzi(ospiti: string) {
  const p = prezziTutti[ospiti];
  if (!p) return;

  let html = '';

  for (const fascia of fasce) {
    html += `<p class="price-fascia-label">${fascia.label}</p>`;

    if (fascia.mesi?.length) {
      html += `<p class="price-fascia-mesi">${fascia.mesi.join(', ')}</p>`;
    }

    for (const voce of fascia.voci) {
      const valore = p[voce.chiave] ?? '—';
      html += `
        <div class="price-row">
          <span>${voce.label}</span>
          <strong>€${valore}</strong>
        </div>`;
    }
  }

  rowsEl.innerHTML = html;
}

ospitiBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    ospitiBtns.forEach(b => b.classList.remove('attivo'));
    btn.classList.add('attivo');
    renderPrezzi(btn.dataset.ospiti!);
  });
});

// Inizializza con il primo valore
const primoOspiti = ospitiBtns[0]?.dataset.ospiti ?? '1';
renderPrezzi(primoOspiti);
