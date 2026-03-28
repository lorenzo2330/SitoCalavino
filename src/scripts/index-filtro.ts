// ============================================================
//  index-filtro.ts
//  Filtra le card "Nelle vicinanze" per categoria.
//  Chiamato dal <select> nella homepage tramite window.filtraLuoghi.
// ============================================================

function filtraLuoghi(categoria: string) {
  const cards = document.querySelectorAll<HTMLElement>('.luogo-card');
  cards.forEach(card => {
    const visibile = categoria === 'tutti' || card.dataset.categoria === categoria;
    card.classList.toggle('nascosto', !visibile);
  });
}

// Esposta globalmente perché richiamata dall'attributo onchange del <select>
(window as any).filtraLuoghi = filtraLuoghi;
