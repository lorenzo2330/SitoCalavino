// ============================================================
//  vicino.ts — luoghi nelle vicinanze
//  Modifica qui per aggiungere, rimuovere o modificare luoghi
// ============================================================

export type Categoria = "Ristoranti / Bar" | "Escursioni / Sentieri" | "Sci / Impianti" | "Negozi / Supermercati" | "Altro";

export const luoghiVicini = [

  // ── RISTORANTI / BAR ──────────────────────────────────────
  {
    categoria: "Ristoranti / Bar" as Categoria,
    nome: "Ristorante Cipriano",
    descrizione: "Cucina tipica trentina",
    distanza: "350 m",
    icona: "🍽️",
    // Come ottenere maps_url:
    // 1. Cerca il posto su Google Maps
    // 2. Clicca sul risultato → copia il link dalla barra del browser
    // 3. Incollalo qui sotto
    maps_url: "https://maps.app.goo.gl/XrXRDkNLdWPubUsr8",
  },
  {
    categoria: "Ristoranti / Bar" as Categoria,
    nome: "Il Giardino delle Spezie",
    descrizione: "Ristorante pizzeria",
    distanza: "3 km",
    icona: "🍽️",
    // Come ottenere maps_url:
    // 1. Cerca il posto su Google Maps
    // 2. Clicca sul risultato → copia il link dalla barra del browser
    // 3. Incollalo qui sotto
    maps_url: "https://maps.app.goo.gl/9rYsqCgQWVm96NES6",
  },
  {
    categoria: "Ristoranti / Bar" as Categoria,
    nome: "Alla Stretta",
    descrizione: "Ristorante pizzeria",
    distanza: "6 km",
    icona: "🍽️",
    // Come ottenere maps_url:
    // 1. Cerca il posto su Google Maps
    // 2. Clicca sul risultato → copia il link dalla barra del browser
    // 3. Incollalo qui sotto
    maps_url: "https://maps.app.goo.gl/N3gKjPDCex3fsE3r7",
  },
  {
    categoria: "Ristoranti / Bar" as Categoria,
    nome: "Pomodoro",
    descrizione: "Pizzeria",
    distanza: "4.5 km",
    icona: "🍽️",
    // Come ottenere maps_url:
    // 1. Cerca il posto su Google Maps
    // 2. Clicca sul risultato → copia il link dalla barra del browser
    // 3. Incollalo qui sotto
    maps_url: "https://maps.app.goo.gl/13vLqzqR2fXJLknk9",
  },
  {
    categoria: "Ristoranti / Bar" as Categoria,
    nome: "Bar Contrada",
    descrizione: "Colazioni, aperitivi e snack veloci nel centro del paese",
    distanza: "300 m",
    icona: "☕",
    maps_url: "https://maps.app.goo.gl/hXm9K2A3mPQ8BWoh9",
  },

  // ── ESCURSIONI / SENTIERI ─────────────────────────────────
  {
    categoria: "Escursioni / Sentieri" as Categoria,
    nome: "Lago di Garda",
    descrizione: "Luogo tranquillo con percorsi attorno al lago, adatto a tutta la famiglia",
    distanza: "27 km",
    icona: "🏞️",
    maps_url: "https://maps.app.goo.gl/ymyubkCE7Fwoehw67",
  },
  {
    categoria: "Escursioni / Sentieri" as Categoria,
    nome: "Lago di Lagolo",
    descrizione: "Il lago più grande d'Italia, su cui si affacciano molti paesini e che offre attività come gite in barca, nuoto e passeggiate",
    distanza: "10 km",
    icona: "🏞️",
    maps_url: "https://maps.app.goo.gl/uG9VvNamptH32TbQ7",
  },
  {
    categoria: "Escursioni / Sentieri" as Categoria,
    nome: "Lago di Molveno",
    descrizione: "Vasto lago alpino con acque cristalline popolare tra le famiglie e gli appassionati di sport",
    distanza: "30 km",
    icona: "🏞️",
    maps_url: "https://maps.app.goo.gl/8kyc3DMDJZDVT8S39",
  },
  {
    categoria: "Escursioni / Sentieri" as Categoria,
    nome: "Lago di Toblino",
    descrizione: "Luogo tranquillo con percorsi attorno al lago, adatto a tutta la famiglia",
    distanza: "6 km",
    icona: "🏞️",
    maps_url: "https://maps.app.goo.gl/LyWMYQhcEKs2XjiHA",
  },
  {
    categoria: "Escursioni / Sentieri" as Categoria,
    nome: "Castel Toblino",
    descrizione: "Castello sul lago con stanze affrescate e opere del 1500, oltre a un ristorante con terrazza",
    distanza: "4 km",
    icona: "🏰",
    maps_url: "https://maps.app.goo.gl/fpCwgePrpJ8dUVJr8",
  },
  
  /*{
    categoria: "Escursioni / Sentieri" as Categoria,
    nome: "Cima Gazza",
    descrizione: "Escursione impegnativa con vista spettacolare sulla Valle dei Laghi.",
    distanza: "5 km",
    icona: "⛰️",
    maps_url: "https://maps.app.goo.gl/fLyvYrfXQtLpQkHr8",
  },*/
  {
    categoria: "Escursioni / Sentieri" as Categoria,
    nome: "Roggia di Calavino",
    descrizione: "Sentiero nella natura. Percorso andata e ritorno di circa 5 km",
    distanza: "300 m",
    icona: "⛰️",
    maps_url: "https://maps.app.goo.gl/E2afwYRWNKgXSrQL9",
  },

  // ── SCI / IMPIANTI ────────────────────────────────────────
  {
    categoria: "Sci / Impianti" as Categoria,
    nome: "Ski Area Paganella",
    descrizione: "Piste da sci per tutti i livelli",
    distanza: "35 km",
    icona: "⛷️",
    maps_url: "https://maps.app.goo.gl/f4P1uNYzGMUAHgZF8",
  },
  {
    categoria: "Sci / Impianti" as Categoria,
    nome: "Monte Bondone",
    descrizione: "Meta popolare per lo sci invernale",
    distanza: "24 km",
    icona: "⛷️",
    maps_url: "https://maps.app.goo.gl/iD9cFqnTsPQo2vqQ9",
  },

  // ── NEGOZI / SUPERMERCATI ─────────────────────────────────
  {
    categoria: "Negozi / Supermercati" as Categoria,
    nome: "Margherita Conad",
    descrizione: "Fornito supermercato con prodotti locali trentini",
    distanza: "350 m",
    icona: "🛒",
    maps_url: "https://maps.app.goo.gl/pNXaxiM5wD6e8dVZ7",
  },

    // ── ALTRO ───────────────────────────────────────────────
  {
    categoria: "Esperienze" as Categoria,
    nome: "Paintball Park Trento (Vezzano)",
    descrizione: "Campo di paintball",
    distanza: "6 km",
    icona: "🔫",
    maps_url: "https://maps.app.goo.gl/9htzELiGNqq642pBA",
  },
  {
    categoria: "Esperienze" as Categoria,
    nome: "Crossodromo Ciclamino Pietramurata",
    descrizione: "Impianto per gare fuoristrada",
    distanza: "8 km",
    icona: "🏁",
    maps_url: "https://maps.app.goo.gl/udZvnc4hrCHrDQZB8",
  },
  {
    categoria: "Esperienze" as Categoria,
    nome: "Trento",
    descrizione: "Capoluogo del Trentino, con centro storico, musei e ristoranti",
    distanza: "18 km",
    icona: "🏙️",
    maps_url: "https://maps.app.goo.gl/kQSY2LiWuUBcJ18z9",
  },
  // Aggiungi altri luoghi qui sotto:
  // {
  //   categoria: "Ristoranti / Bar",
  //   nome: "Nome del posto",
  //   descrizione: "Breve descrizione.",
  //   distanza: "X km",
  //   icona: "🍕",
  //   maps_url: "https://maps.google.com/maps?q=Nome+Posto+Calavino",
  // },
];

// ── MAPPA GOOGLE MAPS ─────────────────────────────────────
//
//  Come ottenere il link embed di Google Maps:
//  1. Vai su maps.google.com
//  2. Cerca "Calavino, Trentino" (o l'indirizzo esatto)
//  3. Clicca "Condividi" → "Incorpora una mappa"
//  4. Copia il link che trovi nell'attributo src= dell'iframe
//  5. Incollalo qui sotto al posto di TUOLINK
//
export const mappaEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.263779553595!2d10.9790346768255!3d46.04583659444267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47826d9c0c066731%3A0x9a3a99055531266c!2sDimora%20Concordia!5e0!3m2!1sen!2sit!4v1772962988744!5m2!1sen!2sit";
