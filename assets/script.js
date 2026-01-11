// Close mobile nav after clicking a link
(() => {
  const nav = document.getElementById('nav');
  if (!nav) return;
  nav.addEventListener('click', (e) => {
    const a = e.target.closest('a.nav-link');
    if (!a) return;
    const bsCollapse = bootstrap.Collapse.getInstance(nav);
    if (bsCollapse) bsCollapse.hide();
  });
})();
