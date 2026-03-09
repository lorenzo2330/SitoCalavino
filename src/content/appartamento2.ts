// ============================================================
//  appartamento2.ts — contenuti dell'Appartamento 2
//  Modifica qui testi, prezzi, dotazioni e regole
// ============================================================

export const appartamento2 = {

  // ── IDENTITÀ ──────────────────────────────────────────────
  nome: "Appartamento Duplex",
  eyebrow: "Secondo e terzo piano",
  ospiti_max: 5,
  caratteristiche: "Fino a 5 ospiti · 2 camere da letto · 2 bagni",

  // ── TESTI ─────────────────────────────────────────────────
  sezione_eyebrow: "Perfetto per la tua esperienza in Trentino",
  sezione_titolo: "TODO-Titolo",
  descrizione_1: "TODO-Descrizione 1",
  descrizione_2: "TODO-Descrizione 2",

  // Testo breve per la card in Home
  descrizione_breve: "Appartamento su due piani con vista panoramica sulle montagne del Trentino",

  // ── FOTO ──────────────────────────────────────────────────
  //
  //  Come aggiungere foto:
  //
  //  OPZIONE A — foto caricate nella cartella del progetto:
  //    1. Metti il file in:  public/foto/appartamento2/
  //    2. Scrivi il percorso: "/foto/appartamento2/nome-del-file.jpg"
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
      src: "/foto/appartamento2/cucina3-duplex.jpeg",  // ← cambia con la tua foto
      alt: "Vista principale dell'appartamento",
    },
    {
      src: "/foto/appartamento2/cucina-duplex.jpeg",
      alt: "Cucina",
    },
    {
      src: "/foto/appartamento2/camera2-duplex.jpeg",
      alt: "Camera da letto",
    },
    {
      src: "/foto/appartamento2/camera-duplex.jpeg",
      alt: "Camera da letto",
    },
    {
      src: "/foto/appartamento2/bagno-duplex.jpeg",
      alt: "Bagno",
    },
    {
      src: "/foto/appartamento2/soggiorno-duplex.jpeg",
      alt: "Soggiorno",
    },
    {
      src: "/foto/generali/planimetria_p0.png",
      alt: "Planimetria piano terra",
    },
    {
      src: "/foto/generali/planimetria_p2.png",
      alt: "Planimetria appartamento (secondo piano)",
    },
    {
      src: "/foto/generali/planimetria_p3.png",
      alt: "Planimetria appartamento (terzo piano)",
    },
    // Aggiungi altre foto qui sotto seguendo lo stesso formato:
    // {
    //   src: "/foto/appartamento2/altra-foto.jpg",
    //   alt: "Descrizione della foto",
    // },
  ],

  // ── PREZZI ────────────────────────────────────────────────
  prezzi: {
    feriale: 115,
    festivo: 125,
    alta_stagione_mesi: ["Giugno", "Luglio", "Agosto", "Dicembre", "Gennaio"],
    alta_stagione: 130,
    alta_stagione_cinque_notti: 600,
    alta_stagione_sei_notti: 700,
    nota: "Prezzi per notte, IVA inclusa. Pulizia finale inclusa nel prezzo.",
  },

  // ── DOTAZIONI ─────────────────────────────────────────────
  dotazioni: [
    "Wi-Fi gratuito",
    "Cucina (forno, fornello ad induzione, macchina del caffè, frigo, freezer, lavastoviglie, lavandino)",
    "Ferro da stiro",
    "Divano letto",
    "Smart TV",
    "Biancheria inclusa",
    "Riscaldamento autonomo",
    "Posto auto privato",
    "Zona parcheggio biciclette",
    "Bagno privato (doccia, asciugacapelli e set di cortesia)",
  ],

  // ── REGOLE ────────────────────────────────────────────────
  regole: [
    "Check-in: 14:00 - 18:00",
    "Check-out: 08:00 - 11:00",
    "Non fumatori",
    "Animali non ammessi",
    "Massimo 5 ospiti",
  ],

  // ── SEO ───────────────────────────────────────────────────
  seo_title: "Appartamento 2 — Appartamento Duplex",
  seo_description: "Appartamento per 5 persone.",
};
