// Basic JS: smooth scroll and form helper
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) { e.preventDefault(); window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' }); }
  });
});

// Contact form: if action contains placeholder, fallback to mailto
const contactForm = document.getElementById('contactForm');
if (contactForm && contactForm.getAttribute('action').includes('YOUR_FORMSPREE_ID')) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(contactForm);
    const body = [...d.entries()].map(([k,v]) => `${k}: ${v}`).join('%0D%0A');
    const subject = encodeURIComponent('Platinum Solar enquiry');
    window.location.href = `mailto:platinumsolar.za@gmail.com?subject=${subject}&body=${body}`;
  });
}
