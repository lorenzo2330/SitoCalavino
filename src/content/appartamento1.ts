// ============================================================
//  appartamento1.ts — contenuti dell'Appartamento 1
//  Per modificare la struttura delle fasce → prezzi.ts
// ============================================================

import type { PrezziAppartamento } from './prezzi';

export const appartamento1 = {

  nome:             "Mini appartamento",
  eyebrow:          "Primo piano",
  ospiti_max:       2,
  caratteristiche:  "Fino a 2 ospiti · 1 camera da letto · 1 bagno",

  sezione_eyebrow:  "Perfetto per la tua esperienza in Trentino",
  sezione_titolo:   "Mini appartamento (41 m^2)",
  descrizione_1:    "Mini appartamento ristrutturato, ideale per coppie e con tutti i comfort necessari.",
  descrizione_2:    "Dispone di camera matrimoniale, bagno moderno e cucina completamente attrezzata. Comfort e praticità in ogni dettaglio.",
  descrizione_breve:"Accogliente e luminoso. Perfetto per coppie che cercano intimità e relax.",

  foto: [
    { src: "/foto/appartamento1/soggiorno1-mini.jpeg", alt: "Soggiorno" },
    { src: "/foto/appartamento1/soggiorno2-mini.jpeg", alt: "Soggiorno" },
    { src: "/foto/appartamento1/soggiorno3-mini.jpeg", alt: "Soggiorno" },
    { src: "/foto/appartamento1/cucina1-mini.jpeg",    alt: "Cucina" },
    { src: "/foto/appartamento1/cucina2-mini.jpeg",    alt: "Cucina" },
    { src: "/foto/appartamento1/camera1-mini.jpeg",    alt: "Camera da letto" },
    { src: "/foto/appartamento1/camera2-mini.jpeg",    alt: "Camera da letto" },
    { src: "/foto/appartamento1/camera3-mini.jpeg",    alt: "Camera da letto" },
    { src: "/foto/appartamento1/cabinaArmadio-mini.jpeg", alt: "Cabina armadio" },
    { src: "/foto/appartamento1/lavanderia-mini.jpeg", alt: "Lavatrice e asciugatrice" },
    { src: "/foto/appartamento1/bagno1-mini.jpeg",     alt: "Bagno" },
    { src: "/foto/appartamento1/bagno2-mini.jpeg",     alt: "Bagno" },
    { src: "/foto/appartamento1/atrio-mini.jpeg",      alt: "Atrio" },
    { src: "/foto/generali/planimetria_p0.png",        alt: "Planimetria piano terra" },
    { src: "/foto/generali/planimetria_p1.png",        alt: "Planimetria appartamento" },
  ],

  // ── PREZZI ────────────────────────────────────────────────
  // Struttura: numero di ospiti → voci prezzi
  // Le chiavi corrispondono a quelle definite in prezzi.ts
  prezzi: {
    "1": {
      bassa_feriale: 82,
      bassa_festivo: 82,
      bassa_tre:    70,   
      bassa_sei:    74,
      alta_notte:   86,
      alta_tre:     78,   
      alta_sei:     82,   
    },
    "2": {
      bassa_feriale: 100,
      bassa_festivo: 105,
      bassa_tre:      90,   
      bassa_sei:      95,   
      alta_notte:    110,
      alta_tre:      100,  
      alta_sei:      105,  
    },
  } satisfies PrezziAppartamento,

  prezzi_nota: "Prezzi per notte, IVA inclusa. Pulizia finale inclusa nel prezzo.",

  dotazioni: [
    "Posto auto privato",
    "Wi-Fi gratuito",
    "Cucina (forno, fornello ad induzione, macchina del caffè, frigo, freezer, lavastoviglie, lavandino)",
    "Smart TV",
    "Bagno privato (doccia, asciugacapelli e set di cortesia)",
    "Biancheria inclusa",
    "Riscaldamento autonomo",
    "Divano letto",
    "Lavatrice",
    "Asciugatrice",
    "Zona parcheggio biciclette",
  ],

  regole: [
    "Check-in: 14:00 - 18:00",
    "Check-out: 08:00 - 11:00",
    "Camere non fumatori",
    "Animali non ammessi",
    "Massimo 2 ospiti",
  ],

  seo_title:       "Appartamento 1 — Mini appartamento",
  seo_description: "Appartamento per 2 persone.",
};
