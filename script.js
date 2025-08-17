// Accordion toggle (accessible-ish)
document.querySelectorAll('.accordion-item').forEach((item) => {
  const btn = item.querySelector('.accordion-button');
  const content = item.querySelector('.accordion-content');
  if (!btn || !content) return;

  btn.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.accordion-item.active').forEach((open) => {
      open.classList.remove('active');
      const b = open.querySelector('.accordion-button');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
    if (!isActive) {
      item.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    } else {
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});
