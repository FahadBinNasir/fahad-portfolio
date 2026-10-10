// ── Reveal on scroll (restrained) ──
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.fade-up').forEach((el) => revealObserver.observe(el));

// ── Nav state on scroll ──
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Mobile menu ──
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('mobileMenu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  menu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// ── Contact form (delivery via FormSubmit) ──
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = document.getElementById('formMsg');
    const btn = form.querySelector('button[type="submit"]');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      msg.textContent = 'Please fill in your name, email, and message.';
      return;
    }
    msg.textContent = 'Sending...';
    btn.disabled = true;
    try {
      const res = await fetch('https://formsubmit.co/ajax/fahad@fahadbinnasir.tech', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject: document.getElementById('subject').value.trim() || '(no subject)',
          message,
        }),
      });
      if (!res.ok) throw new Error('send failed');
      msg.textContent = "Message sent — I'll get back to you within a day.";
      form.reset();
    } catch (err) {
      msg.textContent = 'Send failed — email me directly at fahad@fahadbinnasir.tech';
    } finally {
      btn.disabled = false;
      setTimeout(() => { msg.textContent = ''; }, 7000);
    }
  });
}

// ── Footer year ──
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
