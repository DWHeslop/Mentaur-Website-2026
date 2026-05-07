function showScreen(name, tabBtn, fromNav) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');

  document.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.app-nav-link').forEach(l => l.classList.remove('on'));

  const tabMap = { home: 0, discover: 1, relationships: 2, vault: 3, profile: 4 };
  const tabs = document.querySelectorAll('.demo-tab');
  if (tabs[tabMap[name]]) tabs[tabMap[name]].classList.add('active');
  const navLink = document.getElementById('nav-' + name);
  if (navLink) navLink.classList.add('on');
}

// Initialise home screen
showScreen('home');

// Animate goal bars when relationships tab is clicked
document.querySelector('.demo-tab:nth-child(3)').addEventListener('click', () => {
  setTimeout(() => {
    document.querySelectorAll('.goal-fill').forEach(bar => {
      const w = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => { bar.style.width = w; }, 50);
    });
  }, 100);
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Filter pills toggle
document.querySelectorAll('.filter-pill').forEach(p => {
  p.addEventListener('click', () => {
    document.querySelectorAll('.filter-pill').forEach(x => x.classList.remove('on'));
    p.classList.add('on');
  });
});
