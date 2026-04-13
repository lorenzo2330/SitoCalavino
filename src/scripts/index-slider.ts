// ============================================================
//  index-slider.ts
//  Gestisce lo slider delle recensioni nella homepage.
//  Supporta navigazione con frecce, dot e resize della finestra.
// ============================================================

const track   = document.getElementById('recensioni-track') as HTMLElement;
const prevBtn = document.getElementById('prev') as HTMLButtonElement;
const nextBtn = document.getElementById('next') as HTMLButtonElement;
const dots    = document.querySelectorAll<HTMLButtonElement>('.dot');
const cards   = document.querySelectorAll<HTMLElement>('.recensione-card');
const totale  = cards.length;
let corrente  = 0;

function visibili(): number {
  return window.innerWidth <= 900 ? 1 : 2;
}

function aggiorna(animato = true) {
  if (!animato) track.style.transition = 'none';
  else track.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';

  const gap = 24;
  const larghezza = cards[0].getBoundingClientRect().width + gap;
  track.style.transform = `translateX(-${corrente * larghezza}px)`;

  dots.forEach((d, i) => d.classList.toggle('attivo', i === corrente));
  prevBtn.disabled = false;
  nextBtn.disabled = false;

  const viewport = document.getElementById('recensioni-viewport') as HTMLElement;
  const altezzaCard = cards[corrente].getBoundingClientRect().height;
  viewport.style.height = `${altezzaCard}px`;
}

prevBtn.addEventListener('click', () => {
  corrente = corrente === 0 ? totale - visibili() : corrente - 1;
  aggiorna();
});

nextBtn.addEventListener('click', () => {
  const max = totale - visibili();
  corrente  = corrente >= max ? 0 : corrente + 1;
  aggiorna();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    corrente = Math.min(i, totale - visibili());
    aggiorna();
  });
});

window.addEventListener('resize', () => {
  corrente = Math.min(corrente, totale - visibili());
  aggiorna(false);
  requestAnimationFrame(() => { track.style.transition = ''; });
});

aggiorna();
