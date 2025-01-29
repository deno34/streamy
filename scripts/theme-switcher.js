const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
let currentTheme = localStorage.getItem('theme') || 'dark';

const setTheme = (theme) => {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
};

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
});

// Initialize theme
setTheme(currentTheme);