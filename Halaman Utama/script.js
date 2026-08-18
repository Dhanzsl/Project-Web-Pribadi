// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; });
(function loop() {
  rx += (mx - rx) * .12; ry += (my - ry) * .12;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(loop);
})();
document.querySelectorAll('a,button,.proj,.film-frame').forEach(el => {
  el.addEventListener('mouseenter', () => { ring.style.width = '56px'; ring.style.height = '56px'; cursor.style.transform = 'translate(-50%,-50%) scale(1.8)'; });
  el.addEventListener('mouseleave', () => { ring.style.width = '36px'; ring.style.height = '36px'; cursor.style.transform = 'translate(-50%,-50%) scale(1)'; });
});

// Scroll reveal
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => { if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 90); });
}, { threshold: .1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));


// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
  navAs.forEach(a => { a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--amber)' : ''; });
});