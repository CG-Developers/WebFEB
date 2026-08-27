/* clases-data.js — Flamenco & Events Barcelona · Clases de sevillanas
   ─────────────────────────────────────────────────────────
   Un array, un centro por objeto. Para actualizar el trimestre:
   - Cambia horarios / niveles / nota de cada centro.
   - Pon "estado: 'pausado'" en un centro para ocultarlo sin
     borrarlo (vuelve a ponerlo "activo" cuando reabra).
   - "poblacion" y "direccion" quedan a null si aún no se
     confirman — el render los omite automáticamente.
   FASE 2 (futuro): cuando BookingFEB tenga página propia por
   centro, solo hay que rellenar "bookingUrl" con la URL exacta
   y añadir "precio"/"tarifas" siguiendo el modelo de events-data.js.
   ───────────────────────────────────────────────────────── */

const CLASES_DATA = [
  {
    id: "can-cabanyes",
    nombre: "Can Cabanyes",
    poblacion: null,           // TODO: confirmar población/dirección con Ivette
    direccion: null,
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
    nombre: "Can Pepus",
    poblacion: null,           // TODO: confirmar población/dirección con Ivette
    direccion: null,
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
    direccion: null,
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
    nombre: "Canyadó",
    poblacion: { es: "Barcelona", ca: "Barcelona", en: "Barcelona" },
    direccion: null,
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
    id: "lesseps",
    nombre: "Lesseps",
    poblacion: { es: "Barcelona", ca: "Barcelona", en: "Barcelona" },
    direccion: null,
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
