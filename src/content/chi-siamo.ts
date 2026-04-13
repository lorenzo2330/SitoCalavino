// ============================================================
//  chi-siamo.ts — contenuti della pagina Chi siamo
//  Modifica qui testi, foto e informazioni dei proprietari
// ============================================================

export const chiSiamo = {

  // ── SEO ───────────────────────────────────────────────────
  seo_title: "Chi siamo — Dimora Concordia",
  seo_description: "Scopri chi siamo: Sara e Simone, i proprietari di Dimora Concordia a Calavino.",

  // ── HERO ──────────────────────────────────────────────────
  hero_eyebrow: "La nostra storia",
  hero_titolo: "Chi siamo",

  // ── INTRO ─────────────────────────────────────────────────
  intro_eyebrow: "Dimora Concordia",
  intro_titolo: "Ci presentiamo",
  intro_testo: "Siamo due fratelli, Sara e Simone, e da gennaio 2026 abbiamo iniziato insieme questa nuova avventura. Siamo lieti di accogliervi nei nostri appartamenti e faremo del nostro meglio per rendere il vostro soggiorno piacevole. A presto!",

  // ── FOTO CENTRALE ─────────────────────────────────────────
  // Una foto che racconta il luogo: la casa, il panorama, o voi insieme
  // Metti il file in public/foto/generali/ e aggiorna il percorso
  foto_centrale: {
    src: "/foto/chisiamo/simone.jpeg",   // ← sostituisci con la tua foto
    alt: "Dimora Concordia a Calavino",
  },

  // ── PROPRIETARI ───────────────────────────────────────────
  proprietari: [
    {
      nome: "Sara",
      ruolo: "",
      bio: "TODO: Descrizione Sara",
      // Metti la foto in public/foto/chisiamo/ e aggiorna il percorso
      foto: "/foto/chisiamo/sara.png",   // ← sostituisci con la tua foto
      foto_alt: "Sara, proprietaria",
      contatto_label: "Scrivimi",
      contatto_href: "https://wa.me/393292844904",
    },
    {
      nome: "Simone",
      ruolo: "",
      bio: "TODO: Descrizione Simone",
      foto: "/foto/chisiamo/simone.png",  // ← sostituisci con la tua foto
      foto_alt: "Simone, proprietario",
      contatto_label: "Scrivimi",
      contatto_href: "https://wa.me/393341003503",
    },
  ],

  // ── VALORI ────────────────────────────────────────────────
  valori: [
    {
      icona: "🏡",
      titolo: "Autenticità",
      testo: "Niente catene alberghiere, niente intermediari. Ogni dettaglio riflette il nostro gusto e la cura che mettiamo nel rendere speciale ogni soggiorno.",
    },
    {
      icona: "🌲",
      titolo: "Territorio",
      testo: "Calavino e la Valle dei Laghi sono il nostro mondo. Siamo felici di condividere i nostri posti preferiti, i ristoranti di fiducia e i sentieri meno battuti.",
    },
    {
      icona: "✉️",
      titolo: "Contatto diretto",
      testo: "Parlerai sempre con noi — non con un chatbot o un'agenzia. Siamo disponibili per qualsiasi esigenza, prima, durante e dopo il soggiorno.",
    },
  ],

  // ── CTA ───────────────────────────────────────────────────
  cta_eyebrow: "Vieni a trovarci",
  cta_titolo: "Hai domande? Scrivici.",
  cta_testo: "Siamo sempre felici di rispondere e di aiutarti a pianificare il soggiorno perfetto.",
  cta_bottone: "Contattaci",
};
