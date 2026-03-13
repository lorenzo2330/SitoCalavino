// ============================================================
//  recensioni.ts — recensioni degli ospiti
//  Modifica qui per aggiungere o rimuovere recensioni
// ============================================================

export type Piattaforma = "Booking" | "Airbnb" | "Sito";

export const recensioni = [

  {
    nome: "Enrico [09/03/2026]",
    testo: "Struttura in una zona ottima per raggiungere vari posti nei dintorni, proprietari davvero gentilissimi e disponibili.  L'appartamento è nuovo, restaurato da poco e dotato di tutti i comfort, 5 stelle!",
    valutazione: 10,
    piattaforma: "Booking" as Piattaforma,
    appartamento: "Appartamento Duplex",
  },
  {
    nome: "Francesco Antonio [01/03/2026]",
    testo: "Piacevole weekend che ci ha permesso di scoprire un posto nuovo e inedito. Davvero apprezzato il lavoro di recupero del rudere. La ristrutturazione è davvero encomiabile!",
    valutazione: 5,
    piattaforma: "Booking" as Piattaforma,
    appartamento: "Appartamento Duplex",
  },
  {
    nome: "Anna [04/01/2026]",
    testo: "Zona molto tranquilla ed appartamento bellissimo. Dimora Concordia è davvero bellissima.. l'appartamento è nuovo, pulito ed i proprietari gentilissimi",
    valutazione: 5,
    piattaforma: "Booking" as Piattaforma,
    appartamento: "Appartamento Duplex",
  },
  {
    nome: "Valentina [03/01/2026]",
    testo: "Alloggio fantastico, curato e ancora più bello rispetto alle foto. Posizione perfetta per visitare Trento e Riva del Garda.",
    valutazione: 5,
    piattaforma: "Booking" as Piattaforma,
    appartamento: "Appartamento Duplex",
  },
  {
    nome: "AndreaB [09/12/2025]",
    testo: "Spazi ampi e comodi, appartamenti delle dimensioni giuste, completi di ogni comfort, moderni e funzionali. Ad una mezzoretta da Trento, comodo per raggiungere diversi punti d'interesse nella zona. Check in e check out perfetto grazie ad un'ottima comunicazione con il proprietario.",
    valutazione: 5,
    piattaforma: "Booking" as Piattaforma,
    appartamento: "Appartamento Duplex",
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
