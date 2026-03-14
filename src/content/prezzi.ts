// ============================================================
//  prezzi.ts — struttura delle fasce di prezzo (condivisa)
//
//  Qui si definisce la struttura delle fasce e delle voci.
//  I VALORI in € per ogni numero di ospiti vanno nei file
//  appartamento1.ts e appartamento2.ts.
//
//  Per aggiungere una nuova fascia o voce:
//    1. Aggiungi l'oggetto a `fascePrezzi`
//    2. Aggiungi la chiave in `VociPrezzi`
//    3. Aggiungi il valore per ogni numero di ospiti
//       in appartamento1.ts e appartamento2.ts
// ============================================================

export type SottoVoce = {
  label: string;    // es. "Feriale", "Festivo", "1 notte"
  chiave: string;   // chiave usata in VociPrezzi
};

export type Fascia = {
  id:     string;
  label:  string;
  mesi?:  string[];
  voci:   SottoVoce[];
};

// ── FASCE ─────────────────────────────────────────────────
export const fascePrezzi: Fascia[] = [

  {
    id:    "base",
    label: "Bassa stagione",
    mesi:  ["Febbraio", "Marzo", "Aprile", "Maggio", "Settembre", "Ottobre", "Novembre"],
    voci:  [
      { label: "Feriale (a notte)",  chiave: "bassa_feriale" },
      { label: "Festivo (a notte)",  chiave: "bassa_festivo" },
      { label: "3 notti (a notte)",   chiave: "bassa_tre"    },
      { label: "6 notti (a notte)",   chiave: "bassa_sei"    },
    ],
  },

  {
    id:    "alta",
    label: "Alta stagione",
    mesi:  ["Giugno", "Luglio", "Agosto", "Dicembre", "Gennaio"],
    voci:  [
      { label: "Feriale / Festivo (a notte)",   chiave: "alta_notte"  },
      { label: "3 notti (a notte)",   chiave: "alta_tre"    },
      { label: "6 notti (a notte)",   chiave: "alta_sei"    },
      // Per aggiungere una voce combo:
      // { label: "X notti", chiave: "alta_X" },
      // Poi aggiungi la chiave in VociPrezzi e i valori negli appartamenti
    ],
  },

  {
    id:    "speciali",
    label: "Speciali",
    mesi:  ["Per i periodi 30/10 - 1/11 e 28/12 - 3/1, contattaci in privato"],
    voci:  [
      
    ],
  },

  // Per aggiungere una fascia (es. Ponti):
  // {
  //   id: "ponti",
  //   label: "Ponti e festività",
  //   mesi: ["Pasqua", "1 Novembre"],
  //   voci: [
  //     { label: "A notte", chiave: "ponti_notte" },
  //   ],
  // },
];

// ── TIPO VOCI PREZZI ──────────────────────────────────────
// Una riga di prezzi per un dato numero di ospiti.
// Se aggiungi una voce in fascePrezzi, aggiungi la chiave qui.
export type VociPrezzi = {
  bassa_feriale: number;
  bassa_festivo: number;
  bassa_tre: number;
  bassa_sei: number;
  alta_notte:   number;
  alta_tre:     number;
  alta_sei:     number;
  // ponti_notte: number;  // ← decommenta se aggiungi la fascia Ponti
};

// ── TIPO PREZZI APPARTAMENTO ──────────────────────────────
// Mappa: numero di ospiti → voci prezzi
// Le chiavi sono stringhe "1", "2", ... per semplicità con JSON
export type PrezziAppartamento = {
  [ospiti: string]: VociPrezzi;
};
