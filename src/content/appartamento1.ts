// ============================================================
//  appartamento1.ts — contenuti dell'Appartamento 1
//  Modifica qui testi, prezzi, dotazioni, regole e FOTO
// ============================================================

export const appartamento1 = {

  // ── IDENTITÀ ──────────────────────────────────────────────
  nome: "Mini appartamento",
  eyebrow: "Primo piano",
  ospiti_max: 2,
  caratteristiche: "Fino a 2 ospiti · 1 camera da letto · 1 bagno",

  // ── TESTI ─────────────────────────────────────────────────
  sezione_eyebrow: "Perfetto per la tua esperienza in Trentino",
  sezione_titolo: "TODO-Titolo",
  descrizione_1: "TODO-Ideale per una coppia, offre tutto il necessario per un soggiorno rigenerante in montagna, in ogni stagione dell'anno.",
  descrizione_2: "TODO-Appartamento luminoso e accogliente, con una camera da letto matrimoniale, un bagno moderno e una cucina completamente attrezzata. Perfetto per chi cerca intimità e relax, con la comodità di essere a pochi passi dalle meraviglie naturali del Trentino",

  // Testo breve per la card in Home
  descrizione_breve: "TODO-Accogliente e luminoso. Perfetto per coppie che cercano intimità e relax.",

  // ── FOTO ──────────────────────────────────────────────────
  //
  //  Come aggiungere foto:
  //
  //  OPZIONE A — foto caricate nella cartella del progetto:
  //    1. Metti il file in:  public/foto/appartamento1/
  //    2. Scrivi il percorso: "/foto/appartamento1/nome-del-file.jpg"
  //
  //  OPZIONE B — foto da Google Drive:
  //    1. Apri la foto su Google Drive
  //    2. Clic destro → "Ottieni link" → imposta "Chiunque abbia il link"
  //    3. Copia l'ID dal link (la parte dopo /d/ e prima di /view)
  //       Es: https://drive.google.com/file/d/  →ABC123←  /view
  //    4. Scrivi: "https://drive.google.com/uc?export=view&id=ABC123"
  //
  //  OPZIONE C — foto da iCloud:
  //    1. Apri icloud.com → Foto → seleziona la foto
  //    2. Clicca "Condividi" → "Copia link"
  //    3. Incolla il link direttamente
  //
  //  La prima foto è quella principale (grande).
  //  Le altre appaiono nella griglia sotto.
  //  Puoi aggiungere quante foto vuoi — basta aggiungere righe.
  //
  foto: [
    {
      src: "/foto/appartamento1/vista-mini.jpeg",  // ← cambia con la tua foto
      alt: "Vista principale dell'appartamento",
    },
    {
      src: "/foto/appartamento1/vista-mini.jpeg",
      alt: "Soggiorno",
    },
    {
      src: "/foto/appartamento1/vista-mini.jpeg",
      alt: "Camera da letto",
    },
    {
      src: "/foto/appartamento1/vista-mini.jpeg",
      alt: "Cucina",
    },
    {
      src: "/foto/appartamento1/bagno-mini.jpeg",
      alt: "Bagno",
    },
    // Aggiungi altre foto qui sotto seguendo lo stesso formato:
    // {
    //   src: "/foto/appartamento1/altra-foto.jpg",
    //   alt: "Descrizione della foto",
    // },
  ],

  // ── PREZZI ────────────────────────────────────────────────
  prezzi: {
    feriale: 90,
    festivo: 120,
    alta_stagione_mesi: ["Luglio", "Agosto", "Dicembre", "Gennaio"],
    alta_stagione_feriale: 110,
    alta_stagione_festivo: 150,
    nota: "Prezzi per notte, IVA inclusa. Pulizia finale inclusa nel prezzo.",
  },

  // ── DOTAZIONI ─────────────────────────────────────────────
  dotazioni: [
    "Posto auto privato",
    "Wi-Fi gratuito",
    "Cucina completamente attrezzata",
    "Smart TV",
    "Bagno privato compreso di doccia, asciugacapelli e set di cortesia",
    "Biancheria inclusa",
    "Riscaldamento autonomo",
  ],

  // ── REGOLE ────────────────────────────────────────────────
  regole: [
    "Check-in: 15:00 – 20:00",
    "Check-out: entro le 10:00",
    "Camere non fumatori",
    "Animali non ammessi",
    "Massimo 2 ospiti",
  ],

  // ── SEO ───────────────────────────────────────────────────
  seo_title: "Appartamento 1 — Mini appartamento",
  seo_description: "Appartamento per 2 persone.",
};
