// Inicializar AOS
AOS.init({
  duration: 1000,
  once: true
});

// Alternar modo claro/escuro
const toggleBtn = document.getElementById('toggleMode');
const body = document.body;
let darkMode = false;

toggleBtn.addEventListener('click', () => {
  darkMode = !darkMode;
  body.classList.toggle('dark-mode');
  toggleBtn.textContent = darkMode ? 'Modo Claro' : 'Modo Escuro';
});

// Respeita a preferência do sistema
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.classList.add('dark-mode');
  toggleBtn.textContent = 'Modo Claro';
  darkMode = true;
}
