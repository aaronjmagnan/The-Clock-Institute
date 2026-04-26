(function() {
  const path = window.location.pathname;
  let key = 'home';
  if (path.includes('about')) key = 'about';
  else if (path.includes('programs')) key = 'programs';
  else if (path.includes('partner')) key = 'partner';

  document.querySelectorAll('[data-nav]').forEach(link => {
    if (link.dataset.nav === key) link.classList.add('active');
  });
})();
