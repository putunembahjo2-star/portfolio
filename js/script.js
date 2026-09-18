// Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle menu navigasi (mobile)
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

navToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Tutup menu saat salah satu tautan diklik (mobile)
primaryNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Menandai tautan navigasi yang sedang aktif sesuai posisi scroll
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.primary-nav a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));
