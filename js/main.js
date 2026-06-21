/**
 * SERVICIOS BECARIOS — main.js v2
 * Datos, renderizado, GTM, animaciones
 */
"use strict";

/* ═══════════════════════════════════
   DATOS — edita aquí para actualizar
════════════════════════════════════ */

const SERVICES = [
  { icon: "📦", title: "Paquetería Internacional", desc: "México, Cuba y EE.UU. Vuelos semanales con seguimiento en todo el proceso.", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&auto=format&fit=crop&q=60" },
  { icon: "💰", title: "Remesas",                  desc: "México, EE.UU. y España a Cuba. Tarifas competitivas y envío rápido.",        img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&auto=format&fit=crop&q=60" },
  { icon: "🎓", title: "Pagos Académicos",         desc: "Colegiatura, exámenes y gestión de trámites universitarios.",                 img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&auto=format&fit=crop&q=60" },
  { icon: "✈️", title: "Boletos Aéreos",           desc: "Venta de boletos con asesoría personalizada para cada ruta.",                  img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&auto=format&fit=crop&q=60" },
  { icon: "📱", title: "Recargas Telefónicas",     desc: "Recargas a Cuba desde México de forma inmediata y segura.",                    img: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&auto=format&fit=crop&q=60" },
  { icon: "🏛️", title: "Trámites Legales y Visas", desc: "Cuba, México, Guyana, EE.UU., España e Italia.",                              img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&auto=format&fit=crop&q=60" },
  { icon: "📋", title: "Cambio de Estatus",        desc: "Gestión migratoria y cambios de estatus en México.",                           img: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=400&auto=format&fit=crop&q=60" },
  { icon: "💊", title: "Medicamentos",             desc: "Gestión, compra y envío de medicamentos a Cuba.",                              img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=60" },
  { icon: "🛒", title: "Compras en Línea",         desc: "Compramos por ti en tiendas de México y Estados Unidos.",                      img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&auto=format&fit=crop&q=60" },
  { icon: "📅", title: "Citas y Legalizaciones",   desc: "Gestión de citas de visa y trámites de legalización de documentos.",           img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&auto=format&fit=crop&q=60" },
  { icon: "💼", title: "Ofertas de Empleo",        desc: "Conexión con oportunidades laborales para la comunidad cubana.",               img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&auto=format&fit=crop&q=60" },
  { icon: "📊", title: "Inversiones y Préstamos",  desc: "Asesoría en oportunidades de inversión y opciones de financiamiento.",         img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&auto=format&fit=crop&q=60" },
];

const GARANTIAS = [
  { icon: "✈️", title: "Vuelos Semanales",         text: "Frecuencia fija cada semana para que planifiques tus envíos con certeza." },
  { icon: "📲", title: "Notificamos al Receptor",   text: "Tu familiar en Cuba recibe aviso directo cuando su paquete está listo." },
  { icon: "🗺️", title: "Entrega en Cabeceras",     text: "Cobertura en cabeceras provinciales de toda Cuba." },
  { icon: "🔍", title: "Seguimiento Completo",      text: "Rastreo de tu envío desde la recepción hasta la entrega final." },
  { icon: "🤝", title: "5 Años de Experiencia",    text: "Miles de envíos realizados con éxito. Comunidad que nos respalda." },
  { icon: "🌍", title: "Red de +20 Ciudades",      text: "Agentes en toda la república mexicana para que no tengas que ir lejos." },
];

const BASE = (() => {
  const scripts = document.querySelectorAll('script[src]');
  const mainScript = [...scripts].find(s => s.src.includes('main.js'));
  if (mainScript) {
    return mainScript.src.replace('/js/main.js', '');
  }
  return window.location.href.replace(/\/[^/]*$/, '');
})();

const CONTACTS = [
  { city: "CDMX Central",    tel: "+525637976743",  label: "+52 56 3797 6743", bg: `url('${BASE}/assets/cdmx-map.jpg')`, avatar: "assets/admins/cdmx-central.png" },
  { city: "CDMX Coyoacán",   tel: "+525544916610",  label: "+52 55 4491 6610", bg: "url('../assets/coyoacan-map.jpg')", avatar: "assets/admins/cdmx-sur.png" },
  { city: "Texcoco",         tel: "+525951019227",  label: "+52 595 101 9227", bg: "url('../assets/texcoco-map.jpg')", avatar: "assets/admins/texcoco.jpeg" },
  { city: "Toluca",          tel: "+527211241972",  label: "+52 721 124 1972", bg: "url('../assets/toluca-map.jpg')", avatar: "assets/admins/toluca.jpeg" },
  { city: "Aguascalientes",  tel: "+524493756575",  label: "+52 449 375 6575", bg: "url('../assets/aguascalientes-map.jpg')", avatar: "assets/admins/aguascalientes.png" },
  { city: "Tijuana",         tel: "+525633800382",  label: "+52 56 3380 0382", bg: "url('../assets/tijuana-map.jpg')", avatar: "assets/admins/tijuana.jpeg" },
  { city: "Chihuahua",       tel: "+524437281367",  label: "+52 443 728 1367", bg: "url('../assets/chihuahua-map.jpg')", avatar: "assets/admins/chihuahua.jpeg" },
  { city: "Saltillo",        tel: "+529615142722",  label: "+52 961 514 2722", bg: "url('../assets/saltillo-map.jpg')", avatar: "assets/admins/saltillo.jpeg" },
  { city: "Guanajuato",      tel: "+525560752450",  label: "+52 55 6075 2450", bg: "url('../assets/guanajuato-map.jpg')", avatar: "assets/admins/guanajuato.jpeg" },
  { city: "Hidalgo",         tel: "+527717494618",  label: "+52 771 749 4618", bg: "url('../assets/hidalgo-map.jpg')", avatar: "assets/admins/hidalgo.jpeg" },
  { city: "Guadalajara",     tel: "+523331075868",  label: "+52 33 3107 5868", bg: "url('../assets/guadalajara-map.jpg')", avatar: "assets/admins/guadalajara.jpeg" },
  { city: "Guadalajara (2)", tel: "+523310426764",  label: "+52 33 1042 6764", bg: "url('../assets/guadalajara-map.jpg')", avatar: "assets/admins/guadalajara2.jpeg" },
  { city: "Puerto Vallarta", tel: "+528126135747",  label: "+52 81 2613 5747", bg: "url('../assets/puertovallarta-map.jpg')", avatar: "assets/admins/puertovallarta.png" },
  { city: "Michoacán",       tel: "+524432372667",  label: "+52 443 237 2667", bg: "url('../assets/michoacan-map.jpg')", avatar: "assets/admins/michoacan.jpeg" },
  { city: "Cuernavaca",      tel: "+527771954050",  label: "+52 777 195 4050", bg: "url('../assets/cuernavaca-map.jpg')", avatar: "assets/admins/cuernavaca.png" },
  { city: "Monterrey",       tel: "+528110217014",  label: "+52 81 1021 7014", bg: "url('../assets/monterrey-map.jpg')", avatar: "assets/admins/monterrey.jpeg" },
  { city: "Monterrey (2)",   tel: "+528131174713",  label: "+52 81 3117 4713", bg: "url('../assets/monterrey-map.jpg')", avatar: "assets/admins/monterrey2.jpeg" },
  { city: "Puebla",          tel: "+522212704193",  label: "+52 221 270 4193", bg: "url('../assets/puebla-map.jpg')", avatar: "assets/admins/puebla2.jpeg" },
  { city: "Puebla (2)",      tel: "+522213598637",  label: "+52 221 359 8637", bg: "url('../assets/puebla-map.jpg')", avatar: "assets/admins/puebla.jpeg" },
  { city: "Querétaro",       tel: "+524422494931",  label: "+52 442 249 4931", bg: "url('../assets/queretaro-map.jpg')", avatar: "assets/admins/queretaro.jpeg" },
  { city: "Querétaro (2)",   tel: "+525648380194",  label: "+52 56 4838 0194", bg: "url('../assets/queretaro-map.jpg')", avatar: "assets/admins/queretaro2.jpeg" },
  { city: "Cancún",          tel: "+529985380764",  label: "+52 998 538 0764", bg: "url('../assets/cancun-map.jpg')", avatar: "assets/admins/cancun.jpeg" },
  { city: "San Luis Potosí", tel: "+524445737746",  label: "+52 444 573 7746", bg: "url('../assets/slpotosi-map.jpg')", avatar: "assets/admins/slpotosi.jpeg" },
  { city: "Sonora",          tel: "+526442255400",  label: "+52 644 225 5400", bg: "url('../assets/sonora-map.jpg')", avatar: "assets/admins/sonora.png" },  
  { city: "Xalapa",          tel: "+525531919945",  label: "+52 55 3191 9945", bg: "url('../assets/xalapa-map.png')", avatar: "assets/admins/xalapa.jpeg" },
  { city: "Tabasco",         tel: "+529932869704",  label: "+52 993 286 9704", bg: "url('../assets/tabasco-map.jpg')", avatar: "assets/admins/tabasco.jpeg" },
  { city: "Zumpango",        tel: "+525545424170",  label: "+52 55 4542 4170", bg: "url('../assets/zumpango-map.jpg')", avatar: "assets/admins/zumpango.jpeg" },
];

/* ═══════════════════════════════════
   RENDER
════════════════════════════════════ */

function renderServices() {
  const el = document.getElementById("services-grid");
  if (!el) return;
  el.innerHTML = SERVICES.map((s, i) => `
  <div class="col-6 col-sm-4 col-lg-3"
       data-aos="fade-up" data-aos-delay="${(i % 4) * 50}">
    <div class="sb-svc-card" style="background-image:url('${s.img}')">
      <div class="sb-svc-overlay"></div>
      <div class="sb-svc-content">
        <span class="sb-svc-icon">${s.icon}</span>
        <p class="sb-svc-title">${s.title}</p>
        <p class="sb-svc-desc">${s.desc}</p>
      </div>
    </div>
  </div>`).join("");
}

function renderGarantias() {
  const el = document.getElementById("garantias-grid");
  if (!el) return;
  el.innerHTML = GARANTIAS.map((g, i) => `
    <div class="col-md-6 col-lg-4"
         data-aos="fade-up" data-aos-delay="${(i % 3) * 60}">
      <div class="sb-guarantee-card">
        <div class="sb-g-icon">${g.icon}</div>
        <div>
          <p class="sb-g-title">${g.title}</p>
          <p class="sb-g-text">${g.text}</p>
        </div>
      </div>
    </div>`).join("");
}

function renderContacts() {
  const el = document.getElementById("contacts-grid");
  if (!el) return;
  el.innerHTML = CONTACTS.map((c, i) => `
  <div class="col-6 col-sm-4 col-md-3 col-xl-2"
       data-aos="fade-up" data-aos-delay="${(i % 6) * 25}">
    <div class="sb-contact-card" style="background:${c.bg};background-size:cover;background-position:center;">

      <!-- Overlay igual que .sb-svc-overlay -->
      <div class="sb-contact-overlay"></div>

      <!-- Avatar top right -->
      <div class="sb-contact-avatar">
        ${c.avatar
          ? `<img src="${c.avatar}" alt="Admin ${c.city}"/>`
          : `<span>${c.initial.charAt(0)}</span>`
        }
      </div>

      <!-- Contenido encima del overlay -->
      <div class="sb-contact-content">
        <span class="sb-contact-city">${c.city}</span>
        <a href="https://wa.me/${c.tel.replace(/\D/g,'')}"
           target="_blank" rel="noopener"
           class="sb-contact-wa"
           data-gtm="contact_wapp">
          <i class="bi bi-whatsapp"></i>
          ${c.label}
        </a>
      </div>

    </div>
  </div>`).join("");
}

/* ═══════════════════════════════════
   NAVBAR scroll
════════════════════════════════════ */
function initNavbar() {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  const update = () => nav.classList.toggle("scrolled", window.scrollY > 50);
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ═══════════════════════════════════
   SMOOTH SCROLL
════════════════════════════════════ */
function initScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const t = document.querySelector(a.getAttribute("href"));
      if (!t) return;
      e.preventDefault();
      window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 74, behavior: "smooth" });
      const menu = document.getElementById("navMenu");
      if (menu?.classList.contains("show")) {
        bootstrap.Collapse.getInstance(menu)?.hide();
      }
    });
  });
}

/* ═══════════════════════════════════
   GTM eventos
════════════════════════════════════ */
function initGTM() {
  document.querySelectorAll("[data-gtm]").forEach(el => {
    el.addEventListener("click", () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "cta_click", label: el.dataset.gtm });
    });
  });
}

function animateCounters() {
  const counters = document.querySelectorAll(".sb-stat-num[data-count], .sb-cta-num[data-count]");
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);

      const el       = entry.target;
      const target   = +el.dataset.count;
      const prefix   = el.dataset.prefix || "";
      const suffix   = el.dataset.suffix || "";   // ← línea nueva
      const duration = 1600;
      const steps    = 60;
      const stepTime = duration / steps;
      let current    = 0;

      const timer = setInterval(() => {
        current += target / steps;
        if (current >= target) {
          el.textContent = prefix + target + suffix;   // ← suffix agregado
          clearInterval(timer);
        } else {
          el.textContent = prefix + Math.floor(current) + suffix;   // ← suffix agregado
        }
      }, stepTime);
    });
  }, { threshold: 0.4 });

  counters.forEach(c => observer.observe(c));
}

/* ═══════════════════════════════════
   AOS
════════════════════════════════════ */
function initAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 500, once: true, easing: "ease-out-cubic", offset: 50 });
  }
}

/* ═══════════════════════════════════
   INIT
════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderGarantias();
  renderContacts();
  initNavbar();
  initScroll();
  initGTM();
  animateCounters();
  initAOS();
});