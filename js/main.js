// ── Scroll-triggered fade-up animations ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.fade-up').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});

// ── Contact form submit (demo) ──
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('formMsg');
    msg.textContent = '// Message sent! I\'ll get back to you soon.';
    form.reset();
    setTimeout(() => { msg.textContent = ''; }, 4000);
  });
}

// ── Nav active state on scroll ──
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(10,10,15,0.97)';
  } else {
    nav.style.background = 'rgba(10,10,15,0.85)';
  }
});
