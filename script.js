// Jornada Acadêmica 2026 — script compartilhado por todas as páginas

// Menu do celular (botão ☰)
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('menu');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));
}

// Contagem regressiva (só roda na página que tiver #countdown) — fuso de MT, UTC-4
(function () {
  const num = document.getElementById('countdown');
  const label = document.getElementById('countdown-label');
  if (!num || !label) return;
  const inicio = new Date('2026-10-29T00:00:00-04:00');
  const fim = new Date('2026-11-01T00:00:00-04:00');
  const agora = new Date();
  if (agora < inicio) {
    const dias = Math.ceil((inicio - agora) / 86400000);
    num.textContent = dias;
    label.textContent = dias === 1 ? 'dia para a abertura' : 'dias para a abertura';
  } else if (agora < fim) {
    num.textContent = 'Hoje';
    label.textContent = 'A Jornada está acontecendo!';
  } else {
    num.textContent = '2026';
    label.textContent = 'Obrigado por participar!';
  }
})();
