/* main.js — Flamenco & Events Barcelona */

/* ── Translations ──────────────────────────────────────── */
const i18n = {
  es: {
    'nav.tablao':   'Tablao',
    'nav.talleres': 'Talleres',
    'nav.clases':   'Clases',
    'nav.galeria':  'Galería',
    'nav.about':    'Quiénes somos',
    'nav.contacto': 'Contacto',
    'nav.inicio':   'Inicio',
    'nav.eventos':  'Eventos',
    'nav.cta':      'Reservar',
    'eventos.eyebrow':     'Próximos eventos',
    'eventos.title':       'Eventos',
    'eventos.subtitle':    'Noches únicas de flamenco',
    'eventos.featured_label': 'Noche única',
    'eventos.julio':       'JUL',
    'eventos.tablao_title':'Tablao Flamenco',
    'eventos.tablao_desc': 'Una hora de flamenco puro con cinco artistas de primer nivel. Baile, cante y guitarra a un palmo del público en nuestro tablao íntimo de la zona alta de Barcelona.',
    'eventos.precio_nota': 'Entradas desde · Reservas abiertas',
    'eventos.vuelve':      'Volvemos en septiembre',
    'eventos.pendiente':   'Pendiente confirmar',
    'eventos.hora_label':  'Hora',
    'eventos.lugar_label': 'Lugar',
    'eventos.duracion_label':'Duración',
    'eventos.reservar':    'Reservar entrada',
    'eventos.artistas_label':'En escena',
    'eventos.artistas_title':'Los artistas',
    'eventos.artistas_sub':'Cinco artistas de primer nivel',
    'eventos.baile':       'Baile',
    'eventos.cante':       'Cante',
    'eventos.guitarra':    'Guitarra',
    'eventos.tardeos_label':'Tardeos flamencos',
    'eventos.tardeos_title':'Los Claveles',
    'eventos.tardeos_sub': 'Fiestas flamencas para bailar y disfrutar',
    'eventos.tardeo_desc_granollers':'Tarde flamenca con música en vivo, baile y ambiente auténtico. La fiesta que no te puedes perder.',
    'eventos.tardeo_desc_costa':'Tardeo flamenco en una de las discotecas más emblemáticas de la zona alta de Barcelona. Música, baile y la mejor energía.',
    'eventos.destacado_label':'Próximo evento destacado',
    'eventos.otros_label': 'Otros eventos',
    'eventos.video_label': 'El espectáculo',
    'eventos.video_title': 'Siéntelo antes de vivirlo',
    'eventos.video_sub':   'Flamenco en estado puro',
    'eventos.granollers_location':'Granollers',
    'eventos.cta_title':   '¿Quieres vivir el flamenco?',
    'eventos.cta_sub':     'Reserva tu entrada y vive una experiencia inolvidable',
    'eventos.cta_btn':     'Reservar ahora',
    'footer.services': 'Servicios',
    'footer.company':  'Compañía',
    'footer.contact':  'Contacto',
    'footer.about':    'Sobre nosotros',
    'footer.artists':  'Artistas',
    'footer.gallery':  'Galería',
    'footer.press':    'Prensa',
    'footer.privacy':  'Privacidad',
    'footer.terms':    'Términos',
    'footer.desc':     'La experiencia más auténtica del flamenco en Barcelona.',
    'footer.copy':     '© 2026 Flamenco & Events Barcelona. Todos los derechos reservados.',
  },
  ca: {
    'nav.tablao':   'Tablao',
    'nav.talleres': 'Tallers',
    'nav.clases':   'Classes',
    'nav.galeria':  'Galeria',
    'nav.about':    'Qui som',
    'nav.contacto': 'Contacte',
    'nav.inicio':   'Inici',
    'nav.eventos':  'Esdeveniments',
    'nav.cta':      'Reservar',
    'eventos.eyebrow':     'Propers esdeveniments',
    'eventos.title':       'Esdeveniments',
    'eventos.subtitle':    'Nits úniques de flamenc',
    'eventos.featured_label': 'Nit única',
    'eventos.julio':       'JUL',
    'eventos.tablao_title':'Tablao Flamenc',
    'eventos.tablao_desc': 'Una hora de flamenc pur amb cinc artistes de primer nivell. Ball, cant i guitarra a un pam del públic al nostre tablao íntim de la zona alta de Barcelona.',
    'eventos.precio_nota': 'Entrades des de · Reserves obertes',
    'eventos.vuelve':      'Tornem al setembre',
    'eventos.pendiente':   'Pendent confirmar',
    'eventos.hora_label':  'Hora',
    'eventos.lugar_label': 'Lloc',
    'eventos.duracion_label':'Durada',
    'eventos.reservar':    'Reservar entrada',
    'eventos.artistas_label':'En escena',
    'eventos.artistas_title':'Els artistes',
    'eventos.artistas_sub':'Cinc artistes de primer nivell',
    'eventos.baile':       'Ball',
    'eventos.cante':       'Cant',
    'eventos.guitarra':    'Guitarra',
    'eventos.tardeos_label':'Tardejos flamencs',
    'eventos.tardeos_title':'Los Claveles',
    'eventos.tardeos_sub': 'Festes flamenques per ballar i gaudir',
    'eventos.tardeo_desc_granollers':'Tarda flamenca amb música en directe, ball i ambient autèntic. La festa que no et pots perdre.',
    'eventos.tardeo_desc_costa':'Tardejo flamenc en una de les discoteques més emblemàtiques de la zona alta de Barcelona. Música, ball i la millor energia.',
    'eventos.destacado_label':'Proper esdeveniment destacat',
    'eventos.otros_label': 'Altres esdeveniments',
    'eventos.video_label': "L'espectacle",
    'eventos.video_title': 'Sent-lo abans de viure-ho',
    'eventos.video_sub':   'Flamenc en estat pur',
    'eventos.granollers_location':'Granollers',
    'eventos.cta_title':   'Vols viure el flamenc?',
    'eventos.cta_sub':     'Reserva la teva entrada i viu una experiència inoblidable',
    'eventos.cta_btn':     'Reservar ara',
    'footer.services': 'Serveis',
    'footer.company':  'Companyia',
    'footer.contact':  'Contacte',
    'footer.about':    'Qui som',
    'footer.artists':  'Artistes',
    'footer.gallery':  'Galeria',
    'footer.press':    'Premsa',
    'footer.privacy':  'Privadesa',
    'footer.terms':    'Condicions',
    'footer.desc':     'L\'experiència més autèntica del flamenc a Barcelona.',
    'footer.copy':     '© 2026 Flamenco & Events Barcelona. Tots els drets reservats.',
  },
  en: {
    'nav.tablao':   'Tablao',
    'nav.talleres': 'Workshops',
    'nav.clases':   'Classes',
    'nav.galeria':  'Gallery',
    'nav.about':    'About us',
    'nav.contacto': 'Contact',
    'nav.inicio':   'Home',
    'nav.eventos':  'Events',
    'nav.cta':      'Book now',
    'eventos.eyebrow':     'Upcoming events',
    'eventos.title':       'Events',
    'eventos.subtitle':    'Unique flamenco nights',
    'eventos.featured_label': 'One night only',
    'eventos.julio':       'JUL',
    'eventos.tablao_title':'Flamenco Tablao',
    'eventos.tablao_desc': 'One hour of pure flamenco with five top-level artists. Dance, singing and guitar up close in our intimate tablao in Barcelona\'s uptown.',
    'eventos.precio_nota': 'Tickets from · Booking open',
    'eventos.vuelve':      'Back in September',
    'eventos.pendiente':   'To be confirmed',
    'eventos.hora_label':  'Time',
    'eventos.lugar_label': 'Venue',
    'eventos.duracion_label':'Duration',
    'eventos.reservar':    'Book tickets',
    'eventos.artistas_label':'On stage',
    'eventos.artistas_title':'The artists',
    'eventos.artistas_sub':'Five top-level performers',
    'eventos.baile':       'Dance',
    'eventos.cante':       'Singing',
    'eventos.guitarra':    'Guitar',
    'eventos.tardeos_label':'Flamenco afternoon parties',
    'eventos.tardeos_title':'Los Claveles',
    'eventos.tardeos_sub': 'Flamenco parties to dance and enjoy',
    'eventos.tardeo_desc_granollers':'Flamenco afternoon with live music, dance and authentic atmosphere. The party you can\'t miss.',
    'eventos.tardeo_desc_costa':'Flamenco afternoon party at one of the most iconic clubs in Barcelona\'s uptown. Music, dance and the best energy.',
    'eventos.destacado_label':'Featured upcoming event',
    'eventos.otros_label': 'Other events',
    'eventos.video_label': 'The show',
    'eventos.video_title': 'Feel it before you live it',
    'eventos.video_sub':   'Pure flamenco',
    'eventos.granollers_location':'Granollers',
    'eventos.cta_title':   'Ready to experience flamenco?',
    'eventos.cta_sub':     'Book your ticket and live an unforgettable experience',
    'eventos.cta_btn':     'Book now',
    'footer.services': 'Services',
    'footer.company':  'Company',
    'footer.contact':  'Contact',
    'footer.about':    'About us',
    'footer.artists':  'Artists',
    'footer.gallery':  'Gallery',
    'footer.press':    'Press',
    'footer.privacy':  'Privacy',
    'footer.terms':    'Terms',
    'footer.desc':     'The most authentic flamenco experience in Barcelona.',
    'footer.copy':     '© 2026 Flamenco & Events Barcelona. All rights reserved.',
  }
};

/* ── Current page detection ──────────────────────────── */
function getCurrentPage() {
  const p = window.location.pathname.split('/').pop() || 'index.html';
  return p;
}

/* ── Nav HTML ────────────────────────────────────────── */
function buildNav(lang) {
  const t = i18n[lang];
  const page = getCurrentPage();
  const active = (href) => page === href ? 'active' : '';
  const root = document.querySelector('meta[name="root-path"]')?.content || '';
  return `
<nav class="nav" id="main-nav">
  <div class="nav-inner">
    <a href="${root}index.html" class="nav-logo">
      <img src="${root}assets/logo.jpg" alt="FEB">
      <span class="nav-logo-text">Flamenco &amp; Events<em>Barcelona</em></span>
    </a>
    <div class="nav-links">
      <a class="nav-link ${active('index.html')}"           href="${root}index.html"           data-i18n="nav.inicio">${t['nav.inicio']}</a>
      <a class="nav-link ${active('tablao.html')}"          href="${root}tablao.html"          data-i18n="nav.tablao">${t['nav.tablao']}</a>
      <a class="nav-link ${active('eventos.html')}"         href="${root}eventos.html"         data-i18n="nav.eventos">${t['nav.eventos']}</a>
      <a class="nav-link ${active('clases.html')}"          href="${root}clases.html"          data-i18n="nav.clases">${t['nav.clases']}</a>
      <a class="nav-link ${active('talleres.html')}"        href="${root}talleres.html"        data-i18n="nav.talleres">${t['nav.talleres']}</a>
      <a class="nav-link ${active('galeria.html')}"         href="${root}galeria.html"         data-i18n="nav.galeria">${t['nav.galeria']}</a>
    </div>
    <div class="lang-sw">
      <button class="lang-btn ${lang==='es'?'active':''}" data-lang="es">ES</button>
      <button class="lang-btn ${lang==='ca'?'active':''}" data-lang="ca">CA</button>
      <button class="lang-btn ${lang==='en'?'active':''}" data-lang="en">EN</button>
    </div>
    <a href="https://booking.flamencoeventsbarcelona.com" class="btn btn-sm btn-inverse nav-cta" data-i18n="nav.cta">${t['nav.cta']}</a>
    <button class="nav-burger" id="nav-burger" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-mobile" id="nav-mobile">
  <a class="nav-link" href="${root}index.html" data-i18n="nav.inicio">${t['nav.inicio']}</a>
  <a class="nav-link" href="${root}tablao.html" data-i18n="nav.tablao">${t['nav.tablao']}</a>
  <a class="nav-link" href="${root}eventos.html" data-i18n="nav.eventos">${t['nav.eventos']}</a>
  <a class="nav-link" href="${root}clases.html" data-i18n="nav.clases">${t['nav.clases']}</a>
  <a class="nav-link" href="${root}talleres.html" data-i18n="nav.talleres">${t['nav.talleres']}</a>
  <a class="nav-link" href="${root}galeria.html" data-i18n="nav.galeria">${t['nav.galeria']}</a>
  <a class="nav-link" href="${root}contacto.html" data-i18n="nav.contacto">${t['nav.contacto']}</a>
  <div class="lang-sw">
    <button class="lang-btn ${lang==='es'?'active':''}" data-lang="es">ES</button>
    <button class="lang-btn ${lang==='ca'?'active':''}" data-lang="ca">CA</button>
    <button class="lang-btn ${lang==='en'?'active':''}" data-lang="en">EN</button>
  </div>
  <a href="https://booking.flamencoeventsbarcelona.com" class="btn btn-md btn-inverse" data-i18n="nav.cta">${t['nav.cta']}</a>
</div>`;
}

/* ── Footer HTML ─────────────────────────────────────── */
function buildFooter(lang) {
  const t = i18n[lang];
  const root = document.querySelector('meta[name="root-path"]')?.content || '';
  return `
<footer class="footer">
  <div class="footer-grid">
    <div>
      <img src="${root}assets/logo.jpg" alt="Flamenco & Events Barcelona" style="width:80px;height:80px;margin-bottom:16px;display:block">
      <div class="footer-brand-name">Flamenco &amp; Events Barcelona</div>
      <div class="footer-tagline">Arte con Alma</div>
      <p class="footer-desc" data-i18n="footer.desc">${t['footer.desc']}</p>
    </div>
    <div>
      <div class="footer-heading" data-i18n="footer.services">${t['footer.services']}</div>
      <div class="footer-links">
        <a href="${root}tablao.html"    class="footer-link" data-i18n="nav.tablao">${t['nav.tablao']}</a>
        <a href="${root}talleres.html"  class="footer-link" data-i18n="nav.talleres">${t['nav.talleres']}</a>
        <a href="${root}clases.html"    class="footer-link" data-i18n="nav.clases">${t['nav.clases']}</a>
        <a href="${root}eventos.html"   class="footer-link" data-i18n="nav.eventos">${t['nav.eventos']}</a>
        <a href="${root}contacto.html"  class="footer-link">Fiestas privadas</a>
      </div>
    </div>
    <div>
      <div class="footer-heading" data-i18n="footer.company">${t['footer.company']}</div>
      <div class="footer-links">
        <a href="${root}galeria.html"        class="footer-link" data-i18n="footer.gallery">${t['footer.gallery']}</a>
        <a href="${root}index.html"          class="footer-link" data-i18n="nav.inicio">${t['nav.inicio']}</a>
      </div>
    </div>
    <div>
      <div class="footer-heading" data-i18n="footer.contact">${t['footer.contact']}</div>
      <div class="footer-links">
        <span class="footer-link">Barcelona, Catalunya</span>
        <a href="mailto:info@flamencoeventsbarcelona.com" class="footer-link">info@flamencoevents<wbr>barcelona.com</a>
        <a href="https://www.flamencoeventsbarcelona.com" class="footer-link">flamencoeventsbarcelona.com</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span data-i18n="footer.copy">${t['footer.copy']}</span>
    <div style="display:flex;gap:20px">
      <a href="#" class="footer-link" data-i18n="footer.privacy">${t['footer.privacy']}</a>
      <a href="#" class="footer-link" data-i18n="footer.terms">${t['footer.terms']}</a>
    </div>
  </div>
</footer>`;
}

/* ── Apply translations ──────────────────────────────── */
function applyLang(lang) {
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang === 'ca' ? 'ca' : lang === 'en' ? 'en' : 'es';
  localStorage.setItem('feb-lang', lang);
}

/* ── Fade-in on scroll ───────────────────────────────── */
function initFadeUp() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}


/* ── WhatsApp flotant ────────────────────────────────── */
function initWhatsApp(lang) {
  if (document.getElementById('wa-float')) return;
  const msg = {
    es: 'Hola! Quiero información para reservar en Flamenco & Events Barcelona.',
    ca: 'Hola! Vull informació per reservar a Flamenco & Events Barcelona.',
    en: 'Hi! I would like information to book at Flamenco & Events Barcelona.'
  }[lang] || 'Hola!';
  const a = document.createElement('a');
  a.id = 'wa-float';
  a.href = 'https://wa.me/34662432855?text=' + encodeURIComponent(msg);
  a.target = '_blank';
  a.rel = 'noopener';
  a.setAttribute('aria-label', 'WhatsApp');
  a.innerHTML = '<svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true"><path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4 29l7.3-2.3c1.9 1 4 1.6 6.2 1.6h.5c6.6 0 12-5.3 12-11.9C30 8.3 24.6 3 18 3h-2zm0 2h2c5.5 0 10 4.4 10 9.9S23.5 26.3 18 26.3h-.5c-2 0-3.9-.6-5.6-1.6l-.7-.4-4.3 1.4 1.4-4.1-.5-.7c-1.4-1.8-2.1-3.9-2.1-6C5.7 9.4 10.5 5 16 5zm-4.4 5.1c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.8c.2.3 2.6 4.1 6.4 5.6 3.1 1.2 3.8 1 4.4.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5s-2.2-1.1-2.5-1.2c-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.2-.8-2.1-1.2-2.8-.3-.7-.6-.6-.8-.6h-.9z"/></svg>';
  document.body.appendChild(a);
}

/* ── Init ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('feb-lang') || 'es';

  /* Inject nav */
  const navPh = document.getElementById('nav-placeholder');
  if (navPh) navPh.outerHTML = buildNav(lang);

  /* Inject footer */
  const ftPh = document.getElementById('footer-placeholder');
  if (ftPh) ftPh.outerHTML = buildFooter(lang);

  initWhatsApp(lang);

  /* Language buttons */
  document.addEventListener('click', e => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    applyLang(btn.dataset.lang);
    /* Rebuild nav/footer in new lang */
    const nav = document.getElementById('main-nav');
    if (nav) { nav.outerHTML = buildNav(btn.dataset.lang) + (document.getElementById('nav-mobile')?.outerHTML || ''); }
  });

  /* Burger menu */
  document.addEventListener('click', e => {
    if (e.target.closest('#nav-burger')) {
      document.getElementById('nav-burger')?.classList.toggle('open');
      document.getElementById('nav-mobile')?.classList.toggle('open');
    } else if (!e.target.closest('.nav-mobile')) {
      document.getElementById('nav-burger')?.classList.remove('open');
      document.getElementById('nav-mobile')?.classList.remove('open');
    }
  });

  // Hide broken photo placeholders silently — shows gradient bg instead
  document.querySelectorAll('.photo-slot img').forEach(img => {
    img.addEventListener('error', () => { img.style.display = 'none'; });
  });

  initFadeUp();
  initHeroVideo();
  initStrips();
  initRing();
  initCollageVideo();
  initHoverVideo();
  if (lang !== 'es') applyLang(lang);
});

/* ── Hero: vídeo que entra sol als 10 s ──────────────────
   La imatge queda fixa i, passats N segons (data-hero-delay),
   el vídeo es fon per sobre sense tocar el scroll. Càrrega
   mandrosa, pausa quan el hero surt de pantalla, i bail-out
   en reduced-motion / estalvi de dades / xarxa lenta.        */
function initHeroVideo() {
  const hero = document.querySelector('.hero[data-hero-video]');
  if (!hero) return;
  const wrap = hero.querySelector('.hero-img');
  if (!wrap) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const conn = navigator.connection || {};
  const slow = conn.saveData === true || /^(slow-)?2g$/.test(conn.effectiveType || '');
  if (reduced || slow) return;

  const src = hero.dataset.heroVideo;
  const poster = hero.dataset.heroPoster || '';
  const delay = parseInt(hero.dataset.heroDelay || '10000', 10);
  let video = null, onScreen = true;

  const reveal = () => {
    video = document.createElement('video');
    video.className = 'hero-video';
    video.muted = true; video.loop = true; video.playsInline = true;
    video.setAttribute('muted', ''); video.setAttribute('playsinline', '');
    video.preload = 'auto';
    if (poster) video.poster = poster;
    video.setAttribute('aria-hidden', 'true');
    video.tabIndex = -1;

    /* Només fem la fosa quan hi ha prou buffer: evita el primer frame negre */
    const show = () => {
      hero.classList.add('has-video');
      hero.style.setProperty('--hero-video-op', '1');
      if (onScreen) video.play().catch(() => {});
    };
    video.addEventListener('canplay', show, { once: true });
    setTimeout(show, 2500); /* xarxa lenta: mostrem igualment */

    video.src = src;
    wrap.appendChild(video);
  };

  /* Precarreguem abans d'hora perquè als 10 s ja estigui llest */
  const warm = () => { const l = document.createElement('link'); l.rel = 'prefetch'; l.as = 'video'; l.href = src; document.head.appendChild(l); };
  if ('requestIdleCallback' in window) requestIdleCallback(warm, { timeout: 3000 }); else setTimeout(warm, 1200);

  setTimeout(reveal, delay);

  /* Estalvi de bateria: pausa si el hero no es veu o la pestanya s'amaga */
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => {
      onScreen = e.isIntersecting;
      if (!video) return;
      if (onScreen) video.play().catch(() => {}); else video.pause();
    }, { threshold: 0.05 }).observe(hero);
  }
  document.addEventListener('visibilitychange', () => {
    if (!video) return;
    if (document.hidden) video.pause(); else if (onScreen) video.play().catch(() => {});
  });
}

/* ── Strips d'artistes (obre en gran) ───────────────────── */
function initStrips() {
  document.querySelectorAll('.strips').forEach(root => {
    const strips = [...root.querySelectorAll('.strip')];
    if (!strips.length) return;
    const coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches;

    const open = el => {
      strips.forEach(s => s.classList.toggle('is-open', s === el));
      root.classList.toggle('has-open', !!el);
      strips.forEach(s => s.setAttribute('aria-expanded', String(s === el)));
    };

    strips.forEach(s => {
      s.setAttribute('aria-expanded', 'false');
      s.addEventListener('click', () => open(s.classList.contains('is-open') && coarse ? null : s));
      s.addEventListener('focus', () => { if (!coarse) open(s); });
    });

    /* En tàctil obrim la primera perquè no es vegi una filera de tires buides */
    if (coarse) open(strips[0]);
  });
}

/* ── Anell de targetes (galeria) ─────────────────────────
   Sense `perspective`: cada targeta es projecta a mà.
   rotateY sense perspectiva = compressió horitzontal pura
   (scaleX = cos θ), que és exactament l'efecte de làmina
   que busquem i és 100% predictible a qualsevol pantalla. */
function initRing() {
  document.querySelectorAll('.ring').forEach(ring => {
    const cards = [...ring.querySelectorAll('.ring-card')];
    const n = cards.length;
    if (n < 3) return;

    const root = ring.closest('[data-ring-root]') || ring.parentElement;
    const counter = root ? root.querySelector('[data-ring-count]') : null;

    const step = 360 / n;
    let rot = 0, index = 0, hover = false;
    let W = 0, H = 0, Rx = 0, Ry = 0, cardW = 0, cardH = 0;
    const ZOOM = 1.06;   /* creixement de la targeta central en passar-hi el cursor */

    const measure = () => {
      W = ring.clientWidth; H = ring.clientHeight;
      cardH = Math.round(H * 0.92);
      cardW = Math.round(cardH * 0.72);
      Rx = Math.min(W * 0.42, cardW * 1.75);
      Ry = Math.round(H * 0.02);
      cards.forEach(c => { c.style.width = cardW + 'px'; c.style.height = cardH + 'px'; });
    };

    const render = () => {
      cards.forEach((c, i) => {
        /* angle relatiu al frontal, normalitzat a −180..180 */
        const a = ((i * step - rot + 540) % 360) - 180;
        const rad = a * Math.PI / 180;
        const cos = Math.cos(rad), sin = Math.sin(rad);
        const depth = (cos + 1) / 2;                   /* 0 = darrere, 1 = davant */
        const front = Math.abs(a) < step / 2;
        let s = 0.40 + 0.60 * Math.pow(depth, 5);      /* caiguda ràpida: el frontal mana */
        if (front && hover) s *= ZOOM;                  /* protagonisme en hover */
        const x = Rx * sin;
        const y = -Ry * cos;
        const back = cos < -0.1;
        c.style.transform =
          `translate(-50%,-50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) scale(${s.toFixed(3)}) rotateY(${a.toFixed(1)}deg)`;
        let op = back ? 0 : 0.22 + 0.78 * Math.pow(depth, 3);
        if (hover && !front) op *= 0.6;                 /* les laterals cedeixen el pas */
        c.style.opacity = op.toFixed(3);
        c.style.zIndex = String(Math.round(depth * 100));
        c.style.pointerEvents = back ? 'none' : 'auto';
        c.classList.toggle('is-front', front);
      });
      if (counter) counter.textContent = (index + 1) + ' / ' + n;
    };

    const layout = () => { measure(); render(); };

    const goTo = i => {
      index = ((i % n) + n) % n;
      rot = index * step;
      ring.classList.add('is-snapping');
      render();
    };

    /* Arrossegar */
    let down = false, sx = 0, sr = 0, moved = 0;
    ring.addEventListener('pointerdown', e => {
      down = true; moved = 0; sx = e.clientX; sr = rot; hover = false;
      ring.classList.remove('is-snapping');
      ring.classList.add('is-dragging');
      ring.setPointerCapture(e.pointerId);
    });
    ring.addEventListener('pointermove', e => {
      if (!down) return;
      const dx = e.clientX - sx; moved = Math.abs(dx);
      rot = sr - dx * 0.32;
      render();
    });
    const end = e => {
      if (!down) return;
      down = false;
      ring.classList.remove('is-dragging');
      try { ring.releasePointerCapture(e.pointerId); } catch (_) {}
      goTo(Math.round(rot / step));
    };
    ring.addEventListener('pointerup', end);
    ring.addEventListener('pointercancel', end);

    /* Hover sobre la central: es fa gran i les veïnes s'aparten */
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (fine) {
      const setHover = v => {
        if (down || hover === v) return;
        hover = v;
        ring.classList.add('is-snapping');
        render();
      };
      cards.forEach(c => {
        c.addEventListener('pointerenter', () => setHover(c.classList.contains('is-front')));
        c.addEventListener('pointerleave', () => setHover(false));
      });
      ring.addEventListener('pointerleave', () => setHover(false));
    }

    /* Clic: targeta lateral → al centre; frontal → lightbox */
    cards.forEach((c, i) => c.addEventListener('click', e => {
      if (moved > 6) { e.preventDefault(); return; }
      if (!c.classList.contains('is-front')) { goTo(i); return; }
      if (typeof window.openLightbox === 'function') window.openLightbox(i);
    }));

    /* Fletxes, teclat i roda horitzontal */
    if (root) {
      root.querySelectorAll('[data-ring-prev]').forEach(b => b.addEventListener('click', () => goTo(index - 1)));
      root.querySelectorAll('[data-ring-next]').forEach(b => b.addEventListener('click', () => goTo(index + 1)));
    }
    ring.setAttribute('tabindex', '0');
    ring.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index - 1); }
    });
    let wt = 0;
    ring.addEventListener('wheel', e => {
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : 0;
      if (!d) return;
      e.preventDefault();
      const now = Date.now();
      if (now - wt < 280) return;
      wt = now; goTo(index + (d > 0 ? 1 : -1));
    }, { passive: false });

    window.addEventListener('resize', layout, { passive: true });
    /* Les imatges poden canviar l'alçada del contenidor en carregar */
    window.addEventListener('load', layout);
    layout();
  });
}

/* ── Foto → vídeo en hover, amb so ──────────────────────
   El <video> no existeix fins que l'usuari hi passa per sobre.
   El so: els navegadors només deixen reproduir amb àudio si hi
   ha hagut un gest de l'usuari. Ho intentem; si ens ho bloquegen,
   caiem a silenciat i el botó de so s'il·lumina perquè un clic
   —que sí que és un gest— l'activi.                            */
function initHoverVideo() {
  document.querySelectorAll('[data-hover-video]').forEach(box => {
    const conn = navigator.connection || {};
    const slow = conn.saveData === true || /^(slow-)?2g$/.test(conn.effectiveType || '');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (slow || reduced) { box.classList.add('is-idle'); return; }

    const src = box.dataset.hoverVideo;
    const coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const soundBtn = box.querySelector('.hover-video__sound');
    let video = null;
    let wantSound = true;   /* preferència de la sessió */

    const paint = () => box.classList.toggle('is-muted', !video || video.muted);

    const build = () => {
      if (video) return video;
      video = document.createElement('video');
      video.loop = true; video.playsInline = true;
      video.setAttribute('playsinline', '');
      video.preload = 'auto';
      video.tabIndex = -1;
      video.setAttribute('aria-hidden', 'true');
      video.src = src;
      box.appendChild(video);
      return video;
    };

    const start = () => {
      const v = build();
      const show = () => box.classList.add('is-playing');
      if (v.readyState >= 2) show(); else v.addEventListener('canplay', show, { once: true });

      v.muted = !wantSound;
      paint();
      v.play().then(() => {
        box.classList.remove('is-blocked');
      }).catch(() => {
        /* bloquejat per la política d'autoplay: silenciem i avisem */
        v.muted = true;
        box.classList.add('is-blocked');
        paint();
        v.play().catch(() => {});
      });
    };

    const stop = () => {
      box.classList.remove('is-playing');
      if (video) video.pause();
    };

    if (soundBtn) {
      soundBtn.addEventListener('click', e => {
        e.stopPropagation(); e.preventDefault();
        const v = build();
        wantSound = !!v.muted;          /* el clic ÉS un gest: aquí el so sempre s'activa */
        v.muted = !wantSound;
        box.classList.remove('is-blocked');
        paint();
        if (!box.classList.contains('is-playing')) start();
        else v.play().catch(() => {});
      });
    }

    if (coarse) {
      box.addEventListener('click', () => {
        box.classList.contains('is-playing') ? stop() : start();
      });
    } else {
      box.addEventListener('pointerenter', start);
      box.addEventListener('pointerleave', stop);
    }

    /* Si la secció surt de pantalla, para: bateria, dades i sorolls indesitjats */
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => { if (!e.isIntersecting) stop(); }, { threshold: 0.05 }).observe(box);
    }
    document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
    paint();
  });
}

/* ── Peça del collage que és vídeo (Fin de fiesta) ───────
   Reutilitza la lògica del hover-video: càrrega mandrosa,
   so amb gest, pausa en sortir. Compatible amb l'expansió
   del collage (creix igual que les altres peces).          */
function initCollageVideo() {
  document.querySelectorAll('.collage-video').forEach(box => {
    const conn = navigator.connection || {};
    const slow = conn.saveData === true || /^(slow-)?2g$/.test(conn.effectiveType || '');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const src = box.dataset.collageVideo;
    const coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const soundBtn = box.querySelector('.collage-sound');
    let video = null, wantSound = true;

    const paint = () => box.classList.toggle('is-muted', !video || video.muted);

    const build = () => {
      if (video) return video;
      video = document.createElement('video');
      video.loop = true; video.playsInline = true;
      video.setAttribute('playsinline', ''); video.preload = 'auto';
      video.tabIndex = -1; video.setAttribute('aria-hidden', 'true');
      video.src = src;
      box.insertBefore(video, box.firstChild);
      return video;
    };

    const start = () => {
      if (slow || reduced) return;
      const v = build();
      const show = () => box.classList.add('is-playing');
      if (v.readyState >= 2) show(); else v.addEventListener('canplay', show, { once: true });
      v.muted = !wantSound; paint();
      v.play().then(() => box.classList.remove('is-blocked'))
              .catch(() => { v.muted = true; box.classList.add('is-blocked'); paint(); v.play().catch(() => {}); });
    };
    const stop = () => { box.classList.remove('is-playing'); if (video) video.pause(); };

    if (soundBtn) soundBtn.addEventListener('click', e => {
      e.stopPropagation(); e.preventDefault();
      const v = build();
      wantSound = !!v.muted; v.muted = !wantSound;
      box.classList.remove('is-blocked'); paint();
      if (!box.classList.contains('is-playing')) start(); else v.play().catch(() => {});
    });

    if (coarse) box.addEventListener('click', () => box.classList.contains('is-playing') ? stop() : start());
    else { box.addEventListener('pointerenter', start); box.addEventListener('pointerleave', stop); }

    if ('IntersectionObserver' in window)
      new IntersectionObserver(([e]) => { if (!e.isIntersecting) stop(); }, { threshold: 0.05 }).observe(box);
    document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
    paint();
  });
}
