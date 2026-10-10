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

// ── Contact form submit (real delivery via FormSubmit) ──
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = document.getElementById('formMsg');
    const btn = form.querySelector('button[type="submit"]');
    msg.textContent = '// sending...';
    btn.disabled = true;
    try {
      const res = await fetch('https://formsubmit.co/ajax/fahad@fahadbinnasir.tech', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          subject: document.getElementById('subject').value || '(no subject)',
          message: document.getElementById('message').value,
        }),
      });
      if (!res.ok) throw new Error('send failed');
      msg.textContent = "// Message sent! I'll get back to you soon.";
      form.reset();
    } catch (err) {
      msg.textContent = '// Send failed — email me directly at fahad@fahadbinnasir.tech';
    } finally {
      btn.disabled = false;
      setTimeout(() => { msg.textContent = ''; }, 6000);
    }
  });
}

// ── Nav background on scroll ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(10,10,15,0.97)';
  } else {
    nav.style.background = 'rgba(10,10,15,0.85)';
  }
});
