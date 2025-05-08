function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const darkModeBtn = document.getElementById('darkModeBtn');
    const icon = darkModeBtn.querySelector('i');

    // Atualiza o ícone e salva o estado
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        icon.classList.replace('bx-moon', 'bx-moon');
    } else {
        localStorage.setItem('darkMode', 'disabled');
        icon.classList.replace('bx-moon', 'bx-moon');
    }
}

// Verifica o estado do modo escuro ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        const darkModeBtn = document.getElementById('darkModeBtn');
        const icon = darkModeBtn.querySelector('i');
        icon.classList.replace('bx-moon', 'bx-moon');
    }
});