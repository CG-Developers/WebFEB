/* events-data.js — Flamenco & Events Barcelona · Booking
   ─────────────────────────────────────────────────────────
   FASE 1: dades locals. FASE 2: aquest array es carregarà
   des del Google Sheet de la Ivette via Cloudflare Worker.
   L'estructura de camps és idèntica a la pestanya "Events"
   del Sheet per fer el canvi transparent.
   ───────────────────────────────────────────────────────── */

const EVENTS_DATA = [
  {
    id: "tablao-septiembre",
    tipo: "tablao",                      // tablao | tardeo
    estado: "proximamente",              // canviar a "activo" + posar fecha quan hi hagi dates de setembre                    // activo | agotado | proximamente | oculto
    fecha: null,
    hora: null,
    duracion: 60,                        // minutos
    venue: {
      nombre: "Tablao FEB · Zona Alta",
      direccion: "Carrer d'Aribau 230, 08006 Barcelona",
      ciudad: "Barcelona"
    },
    titulo:    { es: "Tablao Flamenco", ca: "Tablao Flamenc", en: "Flamenco Tablao" },
    subtitulo: {
      es: "Volvemos en septiembre · Mié 19 h · Vie 18 h",
      ca: "Tornem al setembre · Dc 19 h · Dv 18 h",
      en: "Back in September · Wed 7pm · Fri 6pm"
    },
    desc: {
      es: "Una hora de baile, cante y guitarra a un palmo del público en nuestro tablao íntimo de la zona alta de Barcelona.",
      ca: "Una hora de ball, cant i guitarra a un pam del públic al nostre tablao íntim de la zona alta de Barcelona.",
      en: "One hour of dance, song and guitar just inches from the audience in our intimate tablao in Barcelona's uptown."
    },
    imagen: "assets/logo.jpg",
    cupoWeb: 40,                         // places assignades al canal web (conviu amb Fourvenues)
    vendidas: 0,                         // FASE 2: comptador real al Sheet
    tarifas: [
      { id: "only-show", precio: 35,
        nombre: { es: "Only Show", ca: "Only Show", en: "Show Only" },
        detalle: { es: "Cóctel de bienvenida incluido", ca: "Còctel de benvinguda inclòs", en: "Welcome cocktail included" } },
      { id: "show-consumicion", precio: 38,
        nombre: { es: "Show + consumición", ca: "Show + consumició", en: "Show + drink" },
        detalle: { es: "Espectáculo con consumición", ca: "Espectacle amb consumició", en: "Show with one drink" } },
      { id: "show-cena", precio: 55,
        nombre: { es: "Show + cena", ca: "Show + sopar", en: "Show + dinner" },
        detalle: { es: "Espectáculo con cena completa", ca: "Espectacle amb sopar complet", en: "Show with full dinner" } }
    ],
    extras: [
      { id: "workshop", precio: 10, minimo: 5,
        nombre: { es: "Workshop previo (30 min)", ca: "Workshop previ (30 min)", en: "Pre-show workshop (30 min)" },
        detalle: { es: "Clase de flamenco antes del show · mínimo 5 personas", ca: "Classe de flamenc abans del show · mínim 5 persones", en: "Flamenco class before the show · minimum 5 people" } }
    ]
  },
  {
    id: "tardeo-claveles-granollers",
    tipo: "tardeo",
    estado: "proximamente",
    fecha: null,
    hora: null,
    duracion: null,
    venue: { nombre: "Los Claveles · Granollers", direccion: "", ciudad: "Granollers" },
    titulo:    { es: "Tardeo Los Claveles", ca: "Tardeig Los Claveles", en: "Los Claveles Tardeo" },
    subtitulo: {
      es: "Fiesta flamenca para bailar y disfrutar",
      ca: "Festa flamenca per ballar i gaudir",
      en: "Flamenco party to dance and enjoy"
    },
    desc: {
      es: "Tarde flamenca con música en vivo, baile y ambiente auténtico.",
      ca: "Tarda flamenca amb música en directe, ball i ambient autèntic.",
      en: "Flamenco afternoon with live music, dancing and authentic atmosphere."
    },
    imagen: "assets/logo.jpg",
    cupoWeb: 0, vendidas: 0, tarifas: [], extras: []
  },
  {
    id: "tardeo-claveles-costabreve",
    tipo: "tardeo",
    estado: "proximamente",
    fecha: null,
    hora: null,
    duracion: null,
    venue: { nombre: "Los Claveles · Costa Breve", direccion: "", ciudad: "Barcelona" },
    titulo:    { es: "Tardeo Los Claveles", ca: "Tardeig Los Claveles", en: "Los Claveles Tardeo" },
    subtitulo: {
      es: "Tardeo flamenco en la zona alta de Barcelona",
      ca: "Tardeig flamenc a la zona alta de Barcelona",
      en: "Flamenco tardeo in Barcelona's uptown"
    },
    desc: {
      es: "Tardeo flamenco en una de las discotecas más emblemáticas de la zona alta. Música, baile y la mejor energía.",
      ca: "Tardeig flamenc en una de les discoteques més emblemàtiques de la zona alta. Música, ball i la millor energia.",
      en: "Flamenco tardeo in one of the most iconic clubs of Barcelona's uptown. Music, dancing and the best energy."
    },
    imagen: "assets/logo.jpg",
    cupoWeb: 0, vendidas: 0, tarifas: [], extras: []
  }
];
