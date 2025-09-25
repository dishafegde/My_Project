const btn = document.getElementById('toggle');

btn.addEventListener('click', () => {
  const dark = document.documentElement.getAttribute('data-dark') === 'true';
  document.documentElement.setAttribute('data-dark', !dark);
});
