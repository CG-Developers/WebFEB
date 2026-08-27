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
    nombre: "Centre Cívic del Canyadó",
    poblacion: { es: "Badalona", ca: "Badalona", en: "Badalona" },
    mapQuery: "Centre Cívic del Canyadó, Badalona",
    dia: { es: "Martes", ca: "Dimarts", en: "Tuesday" },
    horarios: [
      { inicio: "17:00", fin: "18:00", nivel: { es: "Avanzado", ca: "Avançat", en: "Advanced" } },
      { inicio: "18:00", fin: "19:00", nivel: { es: "Iniciación", ca: "Iniciació", en: "Beginners" } },
      { inicio: "19:00", fin: "20:00", nivel: { es: "Medio", ca: "Mitjà", en: "Intermediate" } }
    ],
    nota: { es: "Curso 26/27 · Inscripciones abiertas", ca: "Curs 26/27 · Inscripcions obertes", en: "2026/27 season · Enrolment open" },
    telefono: "662432855",
    estado: "activo",
    bookingUrl: "https://booking.flamencoeventsbarcelona.com"
  },
  {
    // TODO: confirmar nombre oficial del centro en Lesseps (ahora mismo solo
    // se sabe la plaza/zona) para que el mini-mapa apunte exacto.
    id: "lesseps",
    nombre: "Lesseps",
    poblacion: { es: "Barcelona", ca: "Barcelona", en: "Barcelona" },
    mapQuery: "Plaça de Lesseps, Barcelona",
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
