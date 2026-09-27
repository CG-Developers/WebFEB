/* proximas-fechas.js — Flamenco & Events Barcelona
   ─────────────────────────────────────────────────────────────
   Llegeix el catàleg del booking (/api/events) i pinta les
   properes dates del tablao:
     · eventos.html → bloc destacat  [data-pf-hero]
     · tablao.html  → taula programa [data-pf-taula]
     · qualsevol    → [data-pf-link]: el botó va directe a la
                      propera data reservable

   Principi: l'HTML porta SEMPRE la versió genèrica (és el que
   veu Google i qui no té JS). Si el booking no respon en 3,5 s,
   no hi ha dates obertes o el format no quadra, aquest fitxer no
   toca res. Mai s'ha d'escriure una data a mà a l'HTML.

   Les dates es gestionen des del gestor del booking. Res a fer
   aquí quan la Ivette obre o tanca un passi.
   ───────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var BOOKING    = 'https://booking.flamencoeventsbarcelona.com';
  var API        = BOOKING + '/api/events';
  var TIMEOUT_MS = 3500;
  var MAX_TAULA  = 5;
  var MAX_OTRAS  = 3;
  var LOCALE     = { es: 'es-ES', ca: 'ca-ES', en: 'en-GB' };
  var TZ         = 'Europe/Madrid';
  var RE_NINO    = /ni[ñn]|infan|kid|child|\bnen|menor/i;   // tarifa infantil (si no porta `infantil: true`)

  /* MATEIXA REGLA que BookingFEB js/plazas.js (llistat, detall i panell).
     Si allà canvia el llindar o el "sense límit", canvia-ho aquí també:
     la web ha de dir el mateix que el booking. */
  var LLINDAR_ULTIMES = { tablao: 5, tardeo: 5 };
  var SENSE_LIMIT     = 999;

  var ultims = null;                        // darrer catàleg vàlid, per repintar en canviar d'idioma

  /* ── Utilitats ─────────────────────────────────────────── */
  function lang() {
    var l = 'es';
    try { l = localStorage.getItem('feb-lang') || 'es'; } catch (e) {}
    return LOCALE[l] ? l : 'es';
  }

  function t(key) {
    var dic = (typeof i18n !== 'undefined') ? i18n : null;   // i18n és global a main.js
    if (!dic) return key;
    var l = lang();
    return (dic[l] && dic[l][key]) || (dic.es && dic.es[key]) || key;
  }

  function num(v) {
    if (typeof v === 'number') return isFinite(v) ? v : null;
    if (typeof v === 'string' && v.trim() !== '' && !isNaN(Number(v))) return Number(v);
    return null;
  }

  function txt(v, l) {
    if (!v) return '';
    if (typeof v === 'string') return v;
    return v[l] || v.es || '';
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  function normHora(v) {
    var m = String(v || '').match(/(\d{1,2})\s*[:.hH]?\s*(\d{2})?/);
    if (!m) return null;
    var h = Number(m[1]), mi = m[2] ? Number(m[2]) : 0;
    if (h > 23 || mi > 59) return null;
    return pad2(h) + ':' + pad2(mi);
  }

  /* Hora actual a Barcelona, com a text comparable "AAAA-MM-DD HH:MM".
     Un turista a Nova York ha de veure les mateixes dates que un local. */
  function araMadrid() {
    try {
      var p = new Intl.DateTimeFormat('en-CA', {
        timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
      }).formatToParts(new Date());
      var g = function (k) { for (var i = 0; i < p.length; i++) if (p[i].type === k) return p[i].value; return '00'; };
      return g('year') + '-' + g('month') + '-' + g('day') + ' ' + g('hour') + ':' + g('minute');
    } catch (e) {
      var d = new Date();
      return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()) + ' ' +
             pad2(d.getHours()) + ':' + pad2(d.getMinutes());
    }
  }

  /* ── Lectura del catàleg ───────────────────────────────── */
  /* Sense memòria cau pròpia: cada càrrega de pàgina demana el catàleg
     i el navegador el revalida (cache: 'no-cache'). Així un canvi de
     data al gestor es veu a la web en recarregar, igual que al booking
     (el servidor ja té la seva pròpia memòria de 15 s). */
  function carregar() {
    if (!window.fetch) return Promise.resolve(null);
    var ctrl = window.AbortController ? new AbortController() : null;
    var tm = ctrl ? setTimeout(function () { ctrl.abort(); }, TIMEOUT_MS) : null;

    return fetch(API, {
      credentials: 'omit',
      cache: 'no-cache',
      headers: { Accept: 'application/json' },
      signal: ctrl ? ctrl.signal : undefined
    })
      .then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; })
      .then(function (j) { if (tm) clearTimeout(tm); return j; });
  }

  /* Accepta un array o un objecte que el contingui ({eventos}, {events}, {data}…) */
  function llista(j, prof) {
    prof = prof || 0;
    if (Array.isArray(j)) return j;
    if (!j || typeof j !== 'object' || prof > 2) return [];
    var claus = ['eventos', 'events', 'data', 'items', 'catalogo'];
    for (var i = 0; i < claus.length; i++) {
      var v = j[claus[i]];
      if (Array.isArray(v)) return v;
      if (v && typeof v === 'object') { var w = llista(v, prof + 1); if (w.length) return w; }
    }
    return [];
  }

  /* Normalitza un esdeveniment del catàleg. Retorna null si no és
     un tablao visible amb data vàlida. */
  function norm(ev) {
    if (!ev || typeof ev !== 'object') return null;
    var d = (ev.dades && typeof ev.dades === 'object') ? Object.assign({}, ev, ev.dades) : ev;

    var tipo = String(d.tipo || d.tipus || '').toLowerCase();
    if (tipo !== 'tablao') return null;
    var estado = String(d.estado || 'activo').toLowerCase();
    if (estado !== 'activo' && estado !== 'agotado') return null;      // próximamente / oculto: fora

    var fr = String(d.fecha || '');
    var m = fr.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!m) return null;                                                 // sense data: "per confirmar"
    var hora = normHora(d.hora) || (fr.indexOf('T') > 0 ? normHora(fr.split('T')[1]) : null);

    var tarifas = Array.isArray(d.tarifas) ? d.tarifas : (Array.isArray(d.tarifes) ? d.tarifes : []);
    var estTar = function (x) { return String((x && (x.estado || x.estat)) || 'disponible').toLowerCase(); };

    /* "Desde": la tarifa d'adult més barata que es pot comprar.
       Fora les infantils, les completes i les de preu "a consultar" (0). */
    var adults = tarifas
      .filter(function (x) {
        return x && estTar(x) !== 'completo' && !x.infantil &&
               !RE_NINO.test(String(x.id || '') + ' ' + txt(x.nombre, 'es'));
      })
      .map(function (x) { return num(x.precio); })
      .filter(function (p) { return p != null && p > 0; })
      .sort(function (a, b) { return a - b; });

    /* Places — calc idèntic a Plazas.estado() del booking */
    var cupo      = Number(d.cupoWeb) || 0;
    var sinLimite = cupo >= SENSE_LIMIT;
    var libres    = Math.max(0, cupo - (Number(d.vendidas) || 0));

    var agotado = estado === 'agotado' ||
      (tarifas.length > 0 && tarifas.every(function (x) { return estTar(x) === 'completo'; })) ||
      (!sinLimite && libres === 0);

    var ll = LLINDAR_ULTIMES[tipo];
    var ultimas = !agotado && (
      tarifas.some(function (x) { return estTar(x) === 'ultimas'; }) ||
      (ll != null && !sinLimite && libres > 0 && libres <= ll)
    );

    var f = m[1] + '-' + m[2] + '-' + m[3];
    return {
      id: String(d.id || ev.id || ''),
      fecha: f, y: +m[1], mo: +m[2], d: +m[3],
      hora: hora,
      clau: f + ' ' + (hora || '23:59'),
      titulo: d.titulo,
      duracion: num(d.duracion),
      desde: adults.length ? adults[0] : null,
      agotado: agotado,
      ultimas: !!ultimas
    };
  }

  function futurs(j) {
    var ara = araMadrid(), vist = {};
    return llista(j).map(norm)
      .filter(function (e) {
        if (!e || e.clau <= ara) return false;
        var k = e.id || e.clau;
        if (vist[k]) return false;
        vist[k] = true;
        return true;
      })
      .sort(function (a, b) { return a.clau < b.clau ? -1 : a.clau > b.clau ? 1 : 0; });
  }

  /* ── Format ────────────────────────────────────────────── */
  function dUTC(e) { return new Date(Date.UTC(e.y, e.mo - 1, e.d, 12)); }

  function dataLlarga(e, l) {        // "Viernes 2 de octubre" · "Divendres 2 d’octubre" · "Friday 2 October"
    var p = new Intl.DateTimeFormat(LOCALE[l], { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' })
      .formatToParts(dUTC(e));
    return cap(p.map(function (x, i) {
      return (x.type === 'literal' && i > 0 && p[i - 1].type === 'weekday') ? ' ' : x.value;
    }).join(''));
  }

  function dataCurta(e, l) {         // "Vie 2 oct" · "Dv 2 oct" · "Fri 2 Oct"
    var o = { timeZone: 'UTC' };
    var wd = new Intl.DateTimeFormat(LOCALE[l], Object.assign({ weekday: 'short' }, o)).format(dUTC(e));
    var mo = new Intl.DateTimeFormat(LOCALE[l], Object.assign({ month: 'short' }, o)).format(dUTC(e));
    return cap(wd.replace(/\./g, '') + ' ' + e.d + ' ' + mo.replace(/\./g, ''));
  }

  function mesCurt(e, l) {
    return new Intl.DateTimeFormat(LOCALE[l], { month: 'short', timeZone: 'UTC' })
      .format(dUTC(e)).replace(/\./g, '').toUpperCase();
  }

  function horaTxt(h, l) {
    if (!h) return '';
    if (l !== 'en') return h + ' h';
    var hh = Number(h.slice(0, 2)), mm = h.slice(3);
    var h12 = hh % 12 || 12;
    return h12 + (mm !== '00' ? ':' + mm : '') + (hh < 12 ? ' am' : ' pm');
  }

  function durTxt(min) {
    if (!min) return '';
    var h = Math.floor(min / 60), r = min % 60;
    return h ? h + ' h' + (r ? ' ' + r + ' min' : '') : r + ' min';
  }

  function preu(p, l) {
    return new Intl.NumberFormat(LOCALE[l], { maximumFractionDigits: 2 }).format(p);
  }

  function enllac(e) {
    return e && e.id ? BOOKING + '/evento.html?id=' + encodeURIComponent(e.id) : BOOKING;
  }

  /* Omple un element i el treu del circuit d'i18n estàtic, perquè
     applyLang() de main.js no el torni al text genèric. */
  function omple(el, text) {
    if (!el) return;
    el.removeAttribute('data-i18n');
    el.textContent = text;
  }

  /* ── eventos.html · bloc destacat ──────────────────────── */
  function pintarHero(evs, l) {
    var root = document.querySelector('[data-pf-hero]');
    if (!root) return;
    var next = null;
    for (var i = 0; i < evs.length; i++) if (!evs[i].agotado) { next = evs[i]; break; }
    if (!next) return;                                   // tot agotat o res obert: es queda el genèric

    var q = function (k) { return root.querySelector('[data-pf="' + k + '"]'); };

    omple(q('label'), t('pf.label_proximo'));
    omple(q('badge-dia'), pad2(next.d));
    omple(q('badge-mes'), mesCurt(next, l));
    omple(q('badge-any'), String(next.y));
    omple(q('fecha'), dataLlarga(next, l));

    var pr = q('precio'), nota = q('precio-nota');
    if (next.desde != null && pr) {
      pr.innerHTML = esc(preu(next.desde, l)) + '<span class="evento-pricing__curr">€</span>';
      pr.hidden = false;
      omple(nota, t('pf.desde'));
    }
    var ult = q('ultimas');
    if (ult) { ult.hidden = !next.ultimas; omple(ult, t('pf.ultimas')); }

    var hi = q('hora-item');
    if (hi) { hi.hidden = !next.hora; omple(q('hora'), horaTxt(next.hora, l)); }
    if (next.duracion) omple(q('duracion'), durTxt(next.duracion));

    var cta = q('cta');
    if (cta) {
      cta.href = enllac(next);
      omple(cta, t('pf.cta_fecha').replace('{dia}', dataCurta(next, l)));
    }

    var otras = q('otras');
    if (otras) {
      var mes = evs.filter(function (e) { return !e.agotado && e !== next; }).slice(0, MAX_OTRAS);
      otras.hidden = !mes.length;
      otras.innerHTML = mes.length
        ? '<span class="pf-otras__label">' + esc(t('pf.otras')) + '</span>' +
          mes.map(function (e) {
            return '<a class="pf-chip" href="' + esc(enllac(e)) + '">' + esc(dataCurta(e, l)) +
                   (e.ultimas ? ' <span class="pf-chip__ult">· ' + esc(t('pf.ultimas')) + '</span>' : '') + '</a>';
          }).join('') +
          '<a class="pf-otras__todas" href="' + BOOKING + '">' + esc(t('pf.todas')) + ' →</a>'
        : '';
    }
    root.classList.add('is-live');
  }

  /* ── tablao.html · taula del programa ──────────────────── */
  function pintarTaula(evs, l) {
    var tb = document.querySelector('[data-pf-taula]');
    if (!tb) return;
    var files = evs.slice(0, MAX_TAULA);
    if (!files.length) return;

    tb.innerHTML = files.map(function (e) {
      var estat = e.agotado ? 'agotado' : (e.ultimas ? 'ultimas' : 'ok');
      var etiq  = e.agotado ? t('pf.agotado') : (e.ultimas ? t('pf.ultimas') : t('pf.disponible'));
      var titol = txt(e.titulo, l) || t('eventos.tablao_title');
      return '<tr' + (e.agotado ? ' class="is-agotado"' : '') + '>' +
        '<td>' + esc(dataCurta(e, l)) + '</td>' +
        '<td>' + esc(horaTxt(e.hora, l) || '—') + '</td>' +
        '<td>' + esc(titol) + '</td>' +
        '<td><span class="show-badge show-badge--' + estat + '">' + esc(etiq) + '</span></td>' +
        /* A mòbil les columnes 3 i 4 s'amaguen: l'estat es repeteix aquí (.pf-m)
           perquè el botó Reservar quedi sempre a la vista sense scroll lateral. */
        '<td>' + (e.agotado
          ? '<span class="pf-m show-badge show-badge--agotado">' + esc(etiq) + '</span>'
          : (e.ultimas ? '<span class="pf-m pf-m--ult">' + esc(etiq) + '</span>' : '') +
            '<a href="' + esc(enllac(e)) + '" class="btn btn-sm btn-inverse">' + esc(t('pf.reservar')) + '</a>') + '</td>' +
      '</tr>';
    }).join('');
    tb.classList.add('is-live');
    var taula = tb.closest('table');
    if (taula) taula.classList.add('is-live');
  }

  /* ── Botons genèrics "Reservar" → directe a la propera data ── */
  function pintarEnllacos(evs) {
    var next = null;
    for (var i = 0; i < evs.length; i++) if (!evs[i].agotado) { next = evs[i]; break; }
    if (!next) return;
    document.querySelectorAll('[data-pf-link]').forEach(function (a) { a.href = enllac(next); });
  }

  /* ── Schema.org Event amb dates reals ──────────────────── */
  function offset(e) {
    try {
      var p = new Intl.DateTimeFormat('en-US', { timeZone: TZ, timeZoneName: 'longOffset' }).formatToParts(dUTC(e));
      for (var i = 0; i < p.length; i++) {
        if (p[i].type === 'timeZoneName') {
          var m = p[i].value.match(/GMT([+-]\d{2}):?(\d{2})?/);
          if (m) return m[1] + ':' + (m[2] || '00');
        }
      }
    } catch (err) {}
    return '';
  }

  function schema(evs) {
    var vell = document.getElementById('pf-schema');
    if (vell) vell.remove();
    var llista = evs.slice(0, 6);
    if (!llista.length) return;

    var lloc = {
      '@type': 'Place',
      name: 'Flamenco & Events Barcelona',
      address: {
        '@type': 'PostalAddress', streetAddress: "Carrer d'Aribau 230",
        addressLocality: 'Barcelona', postalCode: '08006', addressCountry: 'ES'
      }
    };
    var graf = llista.map(function (e) {
      var o = offset(e);
      var ev = {
        '@type': 'Event',
        name: 'Tablao Flamenco — Flamenco & Events Barcelona',
        startDate: e.hora ? e.fecha + 'T' + e.hora + ':00' + o : e.fecha,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: lloc,
        image: 'https://www.flamencoeventsbarcelona.com/assets/photos/eventos/Tablao.jpg',
        organizer: { '@type': 'Organization', name: 'Flamenco & Events Barcelona', url: 'https://www.flamencoeventsbarcelona.com' }
      };
      if (e.hora && e.duracion) {
        var fi = Number(e.hora.slice(0, 2)) * 60 + Number(e.hora.slice(3)) + e.duracion;
        if (fi < 24 * 60) ev.endDate = e.fecha + 'T' + pad2(Math.floor(fi / 60)) + ':' + pad2(fi % 60) + ':00' + o;
      }
      if (e.desde != null) {
        ev.offers = {
          '@type': 'Offer', price: String(e.desde), priceCurrency: 'EUR', url: enllac(e),
          availability: 'https://schema.org/' + (e.agotado ? 'SoldOut' : e.ultimas ? 'LimitedAvailability' : 'InStock')
        };
      }
      return ev;
    });
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'pf-schema';
    s.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graf });
    document.head.appendChild(s);
  }

  /* ── Arrencada ─────────────────────────────────────────── */
  function pintar(evs) {
    var l = lang();
    pintarHero(evs, l);
    pintarTaula(evs, l);
    pintarEnllacos(evs);
    schema(evs);
  }

  function inici() {
    if (!document.querySelector('[data-pf-hero],[data-pf-taula],[data-pf-link]')) return;
    carregar().then(function (j) {
      if (!j) return;
      var evs = futurs(j);
      if (!evs.length) return;
      ultims = evs;
      pintar(evs);
    });

    /* Canvi d'idioma: main.js torna a aplicar les traduccions estàtiques;
       després repintem les dades dinàmiques en el nou idioma. */
    document.addEventListener('click', function (e) {
      if (ultims && e.target.closest && e.target.closest('.lang-btn')) setTimeout(function () { pintar(ultims); }, 0);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inici);
  else inici();
})();
