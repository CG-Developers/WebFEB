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
    'nav.blog':     'Blog',
    'nav.eventos':  'Eventos',
    'nav.cta':      'Reservar',
    'eventos.eyebrow':     'Próximos eventos',
    'eventos.title':       'Eventos',
    'eventos.subtitle':    'Noches únicas de flamenco',
    'eventos.featured_label': 'Noche única',
    'eventos.julio':       'JUL',
    'eventos.tablao_title':'Tablao Flamenco',
    'eventos.tablao_desc': 'Una hora de flamenco puro con cinco artistas de primer nivel. Baile, cante y guitarra a un palmo del público en nuestro tablao íntimo de la zona alta de Barcelona.',
    'eventos.precio_nota': 'Precio especial · Pase único',
    'eventos.hora_label':  'Hora',
    'eventos.lugar_label': 'Lugar',
    'eventos.duracion_label':'Duración',
    'eventos.reservar':    'Reservar entrada',
    'eventos.artistas_label':'En escena · 10 julio',
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
    'nav.blog':     'Blog',
    'nav.eventos':  'Esdeveniments',
    'nav.cta':      'Reservar',
    'eventos.eyebrow':     'Propers esdeveniments',
    'eventos.title':       'Esdeveniments',
    'eventos.subtitle':    'Nits úniques de flamenc',
    'eventos.featured_label': 'Nit única',
    'eventos.julio':       'JUL',
    'eventos.tablao_title':'Tablao Flamenc',
    'eventos.tablao_desc': 'Una hora de flamenc pur amb cinc artistes de primer nivell. Ball, cant i guitarra a un pam del públic al nostre tablao íntim de la zona alta de Barcelona.',
    'eventos.precio_nota': 'Preu especial · Pas únic',
    'eventos.hora_label':  'Hora',
    'eventos.lugar_label': 'Lloc',
    'eventos.duracion_label':'Durada',
    'eventos.reservar':    'Reservar entrada',
    'eventos.artistas_label':'En escena · 10 juliol',
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
    'nav.blog':     'Blog',
    'nav.eventos':  'Events',
    'nav.cta':      'Book now',
    'eventos.eyebrow':     'Upcoming events',
    'eventos.title':       'Events',
    'eventos.subtitle':    'Unique flamenco nights',
    'eventos.featured_label': 'One night only',
    'eventos.julio':       'JUL',
    'eventos.tablao_title':'Flamenco Tablao',
    'eventos.tablao_desc': 'One hour of pure flamenco with five top-level artists. Dance, singing and guitar up close in our intimate tablao in Barcelona\'s uptown.',
    'eventos.precio_nota': 'Special price · One show only',
    'eventos.hora_label':  'Time',
    'eventos.lugar_label': 'Venue',
    'eventos.duracion_label':'Duration',
    'eventos.reservar':    'Book tickets',
    'eventos.artistas_label':'On stage · July 10',
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
      <a class="nav-link ${active('tablao.html')}"          href="${root}tablao.html"          data-i18n="nav.tablao">${t['nav.tablao']}</a>
      <a class="nav-link ${active('talleres.html')}"        href="${root}talleres.html"        data-i18n="nav.talleres">${t['nav.talleres']}</a>
      <a class="nav-link ${active('clases.html')}"          href="${root}clases.html"          data-i18n="nav.clases">${t['nav.clases']}</a>
      <a class="nav-link ${active('eventos.html')}"         href="${root}eventos.html"         data-i18n="nav.eventos">${t['nav.eventos']}</a>
      <a class="nav-link ${active('galeria.html')}"         href="${root}galeria.html"         data-i18n="nav.galeria">${t['nav.galeria']}</a>
      <a class="nav-link ${active('sobre-nosotros.html')}"  href="${root}sobre-nosotros.html"  data-i18n="nav.about">${t['nav.about']}</a>
      <a class="nav-link ${active('blog.html')}"            href="${root}blog.html"            data-i18n="nav.blog">${t['nav.blog']}</a>
    </div>
    <div class="lang-sw">
      <button class="lang-btn ${lang==='es'?'active':''}" data-lang="es">ES</button>
      <button class="lang-btn ${lang==='ca'?'active':''}" data-lang="ca">CA</button>
      <button class="lang-btn ${lang==='en'?'active':''}" data-lang="en">EN</button>
    </div>
    <a href="${root}contacto.html" class="btn btn-sm btn-inverse nav-cta" data-i18n="nav.cta">${t['nav.cta']}</a>
    <button class="nav-burger" id="nav-burger" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-mobile" id="nav-mobile">
  <a class="nav-link" href="${root}index.html">Inicio / Inici / Home</a>
  <a class="nav-link" href="${root}tablao.html" data-i18n="nav.tablao">${t['nav.tablao']}</a>
  <a class="nav-link" href="${root}talleres.html" data-i18n="nav.talleres">${t['nav.talleres']}</a>
  <a class="nav-link" href="${root}clases.html" data-i18n="nav.clases">${t['nav.clases']}</a>
  <a class="nav-link" href="${root}eventos.html" data-i18n="nav.eventos">${t['nav.eventos']}</a>
  <a class="nav-link" href="${root}galeria.html" data-i18n="nav.galeria">${t['nav.galeria']}</a>
  <a class="nav-link" href="${root}sobre-nosotros.html" data-i18n="nav.about">${t['nav.about']}</a>
  <a class="nav-link" href="${root}blog.html" data-i18n="nav.blog">${t['nav.blog']}</a>
  <a class="nav-link" href="${root}contacto.html" data-i18n="nav.contacto">${t['nav.contacto']}</a>
  <div class="lang-sw">
    <button class="lang-btn ${lang==='es'?'active':''}" data-lang="es">ES</button>
    <button class="lang-btn ${lang==='ca'?'active':''}" data-lang="ca">CA</button>
    <button class="lang-btn ${lang==='en'?'active':''}" data-lang="en">EN</button>
  </div>
  <a href="${root}contacto.html" class="btn btn-md btn-inverse" data-i18n="nav.cta">${t['nav.cta']}</a>
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
        <a href="${root}sobre-nosotros.html" class="footer-link" data-i18n="footer.about">${t['footer.about']}</a>
        <a href="${root}galeria.html"        class="footer-link" data-i18n="footer.gallery">${t['footer.gallery']}</a>
        <a href="${root}blog.html"           class="footer-link" data-i18n="nav.blog">${t['nav.blog']}</a>
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

/* ── Init ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('feb-lang') || 'es';

  /* Inject nav */
  const navPh = document.getElementById('nav-placeholder');
  if (navPh) navPh.outerHTML = buildNav(lang);

  /* Inject footer */
  const ftPh = document.getElementById('footer-placeholder');
  if (ftPh) ftPh.outerHTML = buildFooter(lang);

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
  if (lang !== 'es') applyLang(lang);
});
