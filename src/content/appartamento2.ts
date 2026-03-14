// ============================================================
//  appartamento2.ts — contenuti dell'Appartamento 2
//  Per modificare la struttura delle fasce → prezzi.ts
// ============================================================

import type { PrezziAppartamento } from './prezzi';

export const appartamento2 = {

  nome:             "Appartamento Duplex",
  eyebrow:          "Secondo e terzo piano",
  ospiti_max:       4,
  caratteristiche:  "Fino a 4 ospiti · 2 camere da letto · 2 bagni",

  sezione_eyebrow:  "Perfetto per la tua esperienza in Trentino",
  sezione_titolo:   "Appartamento Duplex (98m^2)",
  descrizione_1:    "Spazioso e luminoso appartamento su due piani con vista panoramica sulle montagne del Trentino.",
  descrizione_2:    "Dispone di due camere da letto con cabina armadio e due bagni, uno per piano. La cucina, ampia e luminosissima grazie alle finestre a Velux, è completamente attrezzata. Il soggiorno, altrettanto spazioso, si apre su un balcone con vista.",
  descrizione_breve:"Appartamento su due piani con vista panoramica sulle montagne del Trentino",

  foto: [
    { src: "/foto/appartamento2/cucina1-duplex.jpeg",   alt: "Cucina" },
    { src: "/foto/appartamento2/cucina2-duplex.jpeg",   alt: "Cucina" },
    { src: "/foto/appartamento2/cucina3-duplex.jpeg",   alt: "Cucina" },
    { src: "/foto/appartamento2/cucina4-duplex.jpeg",   alt: "Cucina" },
    { src: "/foto/appartamento2/camera1-duplex.jpeg",   alt: "Camera da letto" },
    { src: "/foto/appartamento2/camera2-duplex.jpeg",   alt: "Camera da letto" },
    { src: "/foto/appartamento2/camera3-duplex.jpeg",   alt: "Camera da letto" },
    { src: "/foto/appartamento2/camera4-duplex.jpeg",   alt: "Camera da letto" },
    { src: "/foto/appartamento2/camera5-duplex.jpeg",   alt: "Camera da letto" },
    { src: "/foto/appartamento2/camera6-duplex.jpeg",   alt: "Camera da letto" },
    { src: "/foto/appartamento2/camera7-duplex.jpeg",   alt: "Camera da letto" },
    { src: "/foto/appartamento2/camera8-duplex.jpeg",   alt: "Camera da letto" },
    { src: "/foto/appartamento2/bagno1-duplex.jpeg",    alt: "Bagno" },
    { src: "/foto/appartamento2/bagno2-duplex.jpeg",    alt: "Bagno" },
    { src: "/foto/appartamento2/bagno3-duplex.jpeg",    alt: "Bagno" },
    { src: "/foto/appartamento2/bagno4-duplex.jpeg",    alt: "Bagno" },
    { src: "/foto/appartamento2/bagno5-duplex.jpeg",    alt: "Bagno" },
    { src: "/foto/appartamento2/bagno6-duplex.jpeg",    alt: "Bagno" },
    { src: "/foto/appartamento2/soggiorno1-duplex.jpeg",alt: "Soggiorno" },
    { src: "/foto/appartamento2/soggiorno2-duplex.jpeg",alt: "Soggiorno" },
    { src: "/foto/appartamento2/soggiorno3-duplex.jpeg",alt: "Soggiorno" },
    { src: "/foto/appartamento2/esterno1-duplex.jpeg",  alt: "Esterno" },
    { src: "/foto/appartamento2/esterno2-duplex.jpeg",  alt: "Esterno" },
    { src: "/foto/appartamento2/esterno3-duplex.jpeg",  alt: "Esterno" },
    { src: "/foto/appartamento2/esterno4-duplex.jpeg",  alt: "Esterno" },
    { src: "/foto/appartamento2/vista1-duplex.jpeg",    alt: "Vista" },
    { src: "/foto/appartamento2/vista2-duplex.jpeg",    alt: "Vista" },
    { src: "/foto/appartamento2/vista3-duplex.jpeg",    alt: "Vista" },
    { src: "/foto/generali/planimetria_p0.png",         alt: "Planimetria piano terra" },
    { src: "/foto/generali/planimetria_p2.png",         alt: "Planimetria appartamento (secondo piano)" },
    { src: "/foto/generali/planimetria_p3.png",         alt: "Planimetria appartamento (terzo piano)" },
  ],

  // ── PREZZI ────────────────────────────────────────────────
  // Placeholder 999 — da aggiornare quando i prezzi sono definiti
  prezzi: {
    "2": {
      bassa_feriale: 110,
      bassa_festivo: 115,
      bassa_tre: 100,
      bassa_sei: 105,
      alta_notte:   120,
      alta_tre:     110,
      alta_sei:     115,
    },
    "3": {
      bassa_feriale: 134,
      bassa_festivo: 140,
      bassa_tre: 122,
      bassa_sei: 128,
      alta_notte:   146,
      alta_tre:     134,
      alta_sei:     140,
    },
    "4": {
      bassa_feriale: 140,
      bassa_festivo: 146,
      bassa_tre: 127,
      bassa_sei: 133,
      alta_notte:   152,
      alta_tre:     127,
      alta_sei:     146,
    },
  } satisfies PrezziAppartamento,

  prezzi_nota: "Prezzi per notte, IVA inclusa. Pulizia finale inclusa nel prezzo.",

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

  regole: [
    "Check-in: 14:00 - 18:00",
    "Check-out: 08:00 - 11:00",
    "Non fumatori",
    "Animali non ammessi",
    "Massimo 4 ospiti",
  ],

  seo_title:       "Appartamento 2 — Appartamento Duplex",
  seo_description: "Appartamento per 4 persone.",
};
