// script.js is intentionally left blank.
document.addEventListener('DOMContentLoaded', function() {
    // Troca entre abas
    const menuItems = document.querySelectorAll('.config-menu li');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove a classe active de todos os itens e conteúdos
            document.querySelector('.config-menu li.active').classList.remove('active');
            document.querySelector('.tab-content.active').classList.remove('active');
            
            // Adiciona a classe active ao item clicado
            this.classList.add('active');
            
            // Mostra o conteúdo correspondente
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    <button type="button" class="save-btn" onclick="window.location.href='/views/perfil.html'">Salvar Alterações</button>

    
    // Envio do formulário
    const accountForm = document.getElementById('account-form');
    
    accountForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aqui você adicionaria a lógica para salvar as alterações
        // Exemplo com fetch para uma API:
        /*
        const formData = new FormData(this);
        
        fetch('/api/account/update', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert('Configurações salvas com sucesso!');
        })
        .catch(error => {
            console.error('Erro:', error);
        });
        */
        
        alert('Configurações salvas (simulação)');
    });
});