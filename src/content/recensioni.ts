// ============================================================
//  recensioni.ts — recensioni degli ospiti
//  Modifica qui per aggiungere o rimuovere recensioni
// ============================================================

export type Piattaforma = "Booking" | "Airbnb" | "Sito";

export const recensioni = [
  {
    nome: "Marco e Lucia",
    testo: "Un posto meraviglioso, tranquillo e curatissimo. Abbiamo trascorso una settimana indimenticabile. La cucina era perfettamente attrezzata e la vista sui boschi al mattino era mozzafiato.",
    valutazione: 5,
    piattaforma: "Airbnb" as Piattaforma,
    appartamento: "La Dimora del Larice",
  },
  {
    nome: "Sophie M.",
    testo: "Appartamento piccolo ma perfetto per due. Pulito, caldo, con tutto il necessario. I proprietari sono stati gentilissimi e ci hanno dato ottimi consigli sui sentieri da fare.",
    valutazione: 5,
    piattaforma: "Booking" as Piattaforma,
    appartamento: "Mini appartamento",
  },
  {
    nome: "Famiglia Rossi",
    testo: "Abbiamo passato le vacanze di Natale qui e non potevamo scegliere meglio. Il camino a legna la sera, la neve fuori dalla finestra... i bambini erano entusiasti. Torneremo sicuramente.",
    valutazione: 5,
    piattaforma: "Sito" as Piattaforma,
    appartamento: "La Dimora del Larice",
  },
  {
    nome: "Andrea T.",
    testo: "Posizione eccellente per esplorare la Valle dei Laghi. L'appartamento è esattamente come nelle foto, se non meglio. Silenzio assoluto di notte, aria freschissima.",
    valutazione: 4,
    piattaforma: "Airbnb" as Piattaforma,
    appartamento: "Mini appartamento",
  },
  {
    nome: "Giulia e Stefano",
    testo: "Weekend romantico perfetto. L'atmosfera è da chalet di lusso ma con un calore autentico. Ritorneremo in estate per le escursioni.",
    valutazione: 5,
    piattaforma: "Booking" as Piattaforma,
    appartamento: "Mini appartamento",
  },

  // Per aggiungere una recensione, copia e incolla il blocco qui sotto:
  // {
  //   nome: "Nome Cognome",
  //   testo: "Testo della recensione.",
  //   valutazione: 5,              // da 1 a 5
  //   piattaforma: "Booking",      // "Booking" | "Airbnb" | "Sito"
  //   appartamento: "Mini appartamento",  // nome dell'appartamento
  // },
];
