const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      setActiveLink(visible.target.id);
    }
  },
  {
    rootMargin: '-20% 0px -65% 0px',
    threshold: [0.1, 0.3, 0.6],
  }
);

sections.forEach((section) => observer.observe(section));

document.querySelectorAll('.project-card').forEach((card) => {
  const action = card.querySelector('.summary-action');
  const syncLabel = () => {
    if (!action) return;
    action.textContent = card.open ? '접기' : '자세히 보기';
  };

  syncLabel();
  card.addEventListener('toggle', syncLabel);
});
