// ============================================================
//  vicino.ts — luoghi nelle vicinanze
//  Modifica qui per aggiungere, rimuovere o modificare luoghi
// ============================================================

export type Categoria = "Ristoranti / Bar" | "Escursioni / Sentieri" | "Sci / Impianti" | "Negozi / Supermercati";

export const luoghiVicini = [

  // ── RISTORANTI / BAR ──────────────────────────────────────
  {
    categoria: "Ristoranti / Bar" as Categoria,
    nome: "Ristorante Esempio",
    descrizione: "Cucina tipica trentina, ottimi canederli e selvaggina.",
    distanza: "500 m",
    icona: "🍽️",
    // Come ottenere maps_url:
    // 1. Cerca il posto su Google Maps
    // 2. Clicca sul risultato → copia il link dalla barra del browser
    // 3. Incollalo qui sotto
    maps_url: "https://maps.google.com/maps?q=Ristorante+Esempio+Calavino",
  },
  {
    categoria: "Ristoranti / Bar" as Categoria,
    nome: "Bar Sport",
    descrizione: "Colazioni, aperitivi e snack veloci nel centro del paese.",
    distanza: "200 m",
    icona: "☕",
    maps_url: "https://maps.google.com/maps?q=Bar+Sport+Calavino",
  },

  // ── ESCURSIONI / SENTIERI ─────────────────────────────────
  {
    categoria: "Escursioni / Sentieri" as Categoria,
    nome: "Sentiero del Lago di Toblino",
    descrizione: "Percorso panoramico attorno al lago, adatto a tutta la famiglia.",
    distanza: "2 km",
    icona: "🥾",
    maps_url: "https://maps.google.com/maps?q=Lago+di+Toblino+Trentino",
  },
  {
    categoria: "Escursioni / Sentieri" as Categoria,
    nome: "Cima Gazza",
    descrizione: "Escursione impegnativa con vista spettacolare sulla Valle dei Laghi.",
    distanza: "5 km",
    icona: "⛰️",
    maps_url: "https://maps.google.com/maps?q=Cima+Gazza+Trentino",
  },

  // ── SCI / IMPIANTI ────────────────────────────────────────
  {
    categoria: "Sci / Impianti" as Categoria,
    nome: "Ski Area Paganella",
    descrizione: "50 km di piste per tutti i livelli, collegamento con Andalo e Molveno.",
    distanza: "15 km",
    icona: "⛷️",
    maps_url: "https://maps.google.com/maps?q=Ski+Area+Paganella+Andalo",
  },
  {
    categoria: "Sci / Impianti" as Categoria,
    nome: "Pista di fondo Lon",
    descrizione: "Anello di fondo ben tenuto, adatto a principianti e famiglie.",
    distanza: "8 km",
    icona: "🎿",
    maps_url: "https://maps.google.com/maps?q=Pista+fondo+Lon+Trentino",
  },

  // ── NEGOZI / SUPERMERCATI ─────────────────────────────────
  {
    categoria: "Negozi / Supermercati" as Categoria,
    nome: "Supermercato Famiglia Cooperativa",
    descrizione: "Fornito supermercato con prodotti locali trentini.",
    distanza: "300 m",
    icona: "🛒",
    maps_url: "https://maps.google.com/maps?q=Famiglia+Cooperativa+Calavino",
  },
  {
    categoria: "Negozi / Supermercati" as Categoria,
    nome: "Panificio Artigianale",
    descrizione: "Pane fresco ogni mattina, specialità locali e dolci tipici.",
    distanza: "400 m",
    icona: "🥐",
    maps_url: "https://maps.google.com/maps?q=Panificio+Calavino",
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
