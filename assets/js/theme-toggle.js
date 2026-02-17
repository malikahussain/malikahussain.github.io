// Theme toggle: light / dark mode
(function () {
  var html  = document.documentElement;
  var btn   = document.getElementById('theme-toggle');
  var icon  = document.getElementById('theme-icon');

  if (!btn || !icon) return;

  function apply(theme) {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
      icon.textContent = '☀️';
    } else {
      html.removeAttribute('data-theme');
      icon.textContent = '🌙';
    }
  }

  // Sync icon with whatever was set in <head>
  apply(html.getAttribute('data-theme') || 'light');

  btn.addEventListener('click', function () {
    var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    localStorage.setItem('theme', next);
  });
}());
