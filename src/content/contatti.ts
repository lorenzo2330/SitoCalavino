// ============================================================
//  contatti.ts — informazioni di contatto
//  Modifica qui telefono, email, indirizzo e orari
// ============================================================

export const contatti = {

  // ── RECAPITI ──────────────────────────────────────────────
  telefoni: [
    {
      nome: "Sara",
      numero: "+39 329 284 4904",
      href: "tel:+393292844904",
      whatsapp: "https://wa.me/393292844904",
    },
    {
      nome: "Simone",
      numero: "+39 334 100 3503",
      href: "tel:+393341003503",
      whatsapp: "https://wa.me/393341003503",
    },
  ],

  email: [
    {
      nome: "Sara",
      indirizzo: "sara2003leo@gmail.com",
      href: "mailto:sara2003leo@gmail.com",
    },
    {
      nome: "Simone",
      indirizzo: "simo2000leo@gmail.com",
      href: "mailto:simo2000leo@gmail.com",
    },
  ],

  // ── INDIRIZZO & MAPPA ─────────────────────────────────────
  // Stesso link usato anche nella mappa in home (vicino.ts → mappaEmbedUrl).
  // Per aprire su Maps al click, usa il link diretto (non l'embed):
  // 1. Vai su maps.google.com → cerca l'indirizzo
  // 2. Clicca "Condividi" → "Copia link"
  // 3. Incollalo qui sotto
  indirizzo: "Via Concordia, 3 — Calavino (TN)",
  indirizzo_maps_url: "https://maps.app.goo.gl/FwAA3PCeJnnPGeYS7",

  // ── ORARI ─────────────────────────────────────────────────
  checkin: "14:00 – 18:00",
  checkout: "08:00 – 11:00",
  orari_nota: "Per orari diversi contattaci in anticipo — faremo del nostro meglio per venire incontro alle tue esigenze.",

  // ── FORM ──────────────────────────────────────────────────
  // Sostituisci TUOID con il tuo ID Formspree (gratuito su formspree.io)
  formspree_id: "mojklgga",

  // ── TESTI PAGINA ──────────────────────────────────────────
  hero_eyebrow: "Siamo qui per te",
  hero_titolo: "Contatti",
  form_eyebrow: "Scrivici",
  form_titolo: "Richiedi informazioni",
  form_intro: "Compila il modulo e ti risponderemo il prima possibile. Per richieste urgenti puoi contattarci direttamente via telefono o WhatsApp.",

  // ── SEO ───────────────────────────────────────────────────
  seo_title: "Contatti — Calavino",
  seo_description: "Contattaci per informazioni e disponibilità.",
};
