/* clases-data.js — Flamenco & Events Barcelona · Clases de sevillanas
   ─────────────────────────────────────────────────────────
   Un array, un centro por objeto. Para actualizar el trimestre:
   - Cambia horarios / niveles / nota de cada centro.
   - Pon "estado: 'pausado'" en un centro para ocultarlo sin
     borrarlo (vuelve a ponerlo "activo" cuando reabra).
   - "mapQuery" es el texto exacto que se busca en Google Maps
     (nombre del centro + población) — así el mini-mapa y el
     enlace "Cómo llegar" apuntan al sitio correcto aunque no
     tengamos la dirección postal exacta.
   FASE 2 (futuro): cuando BookingFEB tenga página propia por
   centro, solo hay que rellenar "bookingUrl" con la URL exacta
   y añadir "precio"/"tarifas" siguiendo el modelo de events-data.js.
   ───────────────────────────────────────────────────────── */

const CLASES_DATA = [
  {
    id: "can-cabanyes",
    nombre: "Centre Cívic Can Cabanyes",
    tipo: { es: "Centro cívico municipal", ca: "Centre cívic municipal", en: "Municipal civic centre" },
    foto: "assets/photos/clases/can-cabanyes.jpg",
    poblacion: { es: "Badalona", ca: "Badalona", en: "Badalona" },
    mapQuery: "Centre Cívic Can Cabanyes, Badalona",
    dia: { es: "Jueves", ca: "Dijous", en: "Thursday" },
    horarios: [
      { inicio: "17:30", fin: "18:30", nivel: { es: "Iniciación", ca: "Iniciació", en: "Beginners" } }
    ],
    nota: null,
    telefono: "662432855",
    estado: "activo",
    bookingUrl: "https://booking.flamencoeventsbarcelona.com"
  },
  {
    id: "can-pepus",
    nombre: "Centre Cívic Can Pepus",
    tipo: { es: "Centro cívico municipal", ca: "Centre cívic municipal", en: "Municipal civic centre" },
    foto: "assets/photos/clases/can-pepus.jpg",
    poblacion: { es: "Badalona", ca: "Badalona", en: "Badalona" },
    mapQuery: "Centre Cívic Can Pepus, Badalona",
    dia: { es: "Jueves", ca: "Dijous", en: "Thursday" },
    horarios: [
      { inicio: "19:00", fin: "20:00", nivel: { es: "Iniciación", ca: "Iniciació", en: "Beginners" } },
      { inicio: "20:00", fin: "21:00", nivel: { es: "Medio", ca: "Mitjà", en: "Intermediate" } }
    ],
    nota: null,
    telefono: "662432855",
    estado: "activo",
    bookingUrl: "https://booking.flamencoeventsbarcelona.com"
  },
  {
    id: "granollers",
    nombre: "Casino Club de Ritme",
    tipo: { es: "Casino · club de baile", ca: "Casino · club de ball", en: "Casino · dance club" },
    foto: "assets/photos/clases/granollers-casino.jpg",
    poblacion: { es: "Granollers", ca: "Granollers", en: "Granollers" },
    mapQuery: "Casino Club de Ritme, Granollers",
    dia: { es: "Lunes", ca: "Dilluns", en: "Monday" },
    horarios: [
      { inicio: "18:00", fin: "19:00", nivel: { es: "Iniciación", ca: "Iniciació", en: "Beginners" } },
      { inicio: "19:00", fin: "20:00", nivel: { es: "Medio", ca: "Mitjà", en: "Intermediate" } },
      { inicio: "20:00", fin: "21:00", nivel: { es: "Técnica", ca: "Tècnica", en: "Technique" } }
    ],
    nota: null,
    telefono: "662432855",
    estado: "activo",
    bookingUrl: "https://booking.flamencoeventsbarcelona.com"
  },
  {
    id: "canyado",
    nombre: "Centre de Cultura Tradicional Can Canyadó",
    tipo: { es: "Centro cívico · masía histórica", ca: "Centre cívic · masia històrica", en: "Civic centre · historic farmhouse" },
    foto: "assets/photos/clases/canyado.jpg",
    poblacion: { es: "Badalona", ca: "Badalona", en: "Badalona" },
    mapQuery: "Centre de Cultura Tradicional Can Canyadó, Carrer d'Occitània, 08911 Badalona",
    dia: { es: "Martes", ca: "Dimarts", en: "Tuesday" },
    horarios: [
      { inicio: "17:00", fin: "18:00", nivel: { es: "Avanzado", ca: "Avançat", en: "Advanced" } },
      { inicio: "18:00", fin: "19:00", nivel: { es: "Iniciación", ca: "Iniciació", en: "Beginners" } },
      { inicio: "19:00", fin: "20:00", nivel: { es: "Medio", ca: "Mitjà", en: "Intermediate" } }
    ],
    nota: null,
    telefono: "662432855",
    estado: "activo",
    bookingUrl: "https://booking.flamencoeventsbarcelona.com"
  },
  {
    id: "lesseps",
    nombre: "2estones Multiespai de Creació",
    tipo: { es: "Multiespacio de creación", ca: "Multiespai de creació", en: "Creative multi-space" },
    foto: "assets/photos/clases/lesseps.jpg",
    poblacion: { es: "Barcelona", ca: "Barcelona", en: "Barcelona" },
    mapQuery: "2estones Multiespai de Creació, Passatge de Frígola 27, Barcelona",
    dia: { es: "Miércoles", ca: "Dimecres", en: "Wednesday" },
    horarios: [
      { inicio: "16:00", fin: "17:00", nivel: { es: "Avanzado", ca: "Avançat", en: "Advanced" } },
      { inicio: "17:00", fin: "18:00", nivel: { es: "Medio", ca: "Mitjà", en: "Intermediate" } },
      { inicio: "18:00", fin: "19:00", nivel: { es: "Iniciación", ca: "Iniciació", en: "Beginners" } }
    ],
    nota: null,
    telefono: "662432855",
    estado: "activo",
    bookingUrl: "https://booking.flamencoeventsbarcelona.com"
  }
];
