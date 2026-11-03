(() => {
  const btn = document.querySelector('.menu-toggle'), nav = document.querySelector('.main-nav');
  if (btn && nav) {
    const close = () => { nav.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', 'Open navigation'); btn.textContent = '☰'; };
    btn.addEventListener('click', () => { const o = nav.classList.toggle('is-open'); btn.setAttribute('aria-expanded', String(o)); btn.setAttribute('aria-label', o ? 'Close navigation' : 'Open navigation'); btn.textContent = o ? '×' : '☰'; });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    window.addEventListener('resize', () => { if (innerWidth > 1050) close(); });
  }
  const f = document.querySelector('form[data-static]');
  if (f) {
    const t = new URLSearchParams(location.search).get('topic'); if (t) f.subject.value = t;
    f.addEventListener('submit', e => {
      e.preventDefault();
      if (!f.checkValidity()) { f.reportValidity(); return; }
      const d = new FormData(f), n = document.getElementById('form-note');
      n.textContent = 'Opening your email app with the message ready to send…';
      location.href = 'mailto:dsabmalawi@gmail.com?subject=' + encodeURIComponent(d.get('subject')) + '&body=' + encodeURIComponent(d.get('message') + '\n\nFrom: ' + d.get('name') + ' (' + d.get('email') + ')');
    });
  }
})();
