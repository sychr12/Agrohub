// Dados dos perfis (simulando uma API)
const suggestedFriends = [
    {
        id: 1,
        name: "Luiz Felipe",
        image: "/src/imgPerfil/Luiz.png",
        mutualFriends: 4,
        isAdded: false
    },
    {
        id: 2,
        name: "Vitor Ramires",
        image: "/src/imgPerfil/vitoR.png",
        mutualFriends: 8,
        isAdded: false
    },
    {
        id: 3,
        name: "Gustavo Martiz luz",
        image: "/src/imgPerfil/GustavoMartins.png",
        mutualFriends: 2,
        isAdded: false
    },
    {
        id: 4,
        name: "Vinicius Alves",
        image: "/src/imgPerfil/vini.png",
        mutualFriends: 5,
        isAdded: false
    },
    {
        id: 5,
        name: "Vitor Santos",
        image: "/src/imgPerfil/vitorc.png",
        mutualFriends: 1,
        isAdded: true
    },

    {
        id: 6,
        name: "Silvio Italo",
        image: "/src/imgPerfil/italo.png",
        mutualFriends: 1,
        isAdded: true
    }
];

const peopleYouMayKnow = [
    {
        id: 6,
        name: "Sung yong",
        image: "/src/imgPerfil/kev.png",
        mutualFriends: 3,
        isAdded: false
    },
    {
        id: 7,
        name: "Jarllyson",
        image: "/src/imgPerfil/jarllyson.png",
        mutualFriends: 7,
        isAdded: false
    },
    {
        id: 8,
        name: "Lorem Impsum",
        image: "/src/imgPerfil/lorem.png",
        mutualFriends: 0,
        isAdded: false
    },
    {
        id: 9,
        name: "Ruan Pinheiro ",
        image: "/src/imgPerfil/ruan.png",
        mutualFriends: 2,
        isAdded: false
    },
    {
        id: 10,
        name: "Jean Oliveira",
        image: "/src/imgPerfil/jean.png",
        mutualFriends: 4,
        isAdded: true
    }
];

// Função para criar um card de amigo
function createFriendCard(friend, containerId) {
    const friendCard = document.createElement('div');
    friendCard.className = 'friend-card';
    
    friendCard.innerHTML = `
        <img src="${friend.image}" alt="${friend.name}" class="friend-image">
        <div class="friend-info">
            <div class="friend-name">${friend.name}</div>
            <div class="friend-mutual">
                ${friend.mutualFriends > 0 ? 
                    `<img src="${friend.image}" alt="Mutual friend">
                     <span>${friend.mutualFriends} amigo(s) em comum</span>` : 
                    'Sem amigos em comum'}
            </div>
            <button class="add-button ${friend.isAdded ? 'added' : ''}" data-id="${friend.id}">
                <i class="fas ${friend.isAdded ? 'fa-check' : 'fa-plus'}"></i>
                ${friend.isAdded ? 'Adicionado' : 'Adicionar'}
            </button>
        </div>
    `;
    
    document.getElementById(containerId).appendChild(friendCard);
}

// Função para renderizar todos os amigos
function renderFriends() {
    const suggestedGrid = document.createElement('div');
    suggestedGrid.className = 'friends-grid';
    suggestedGrid.id = 'suggestedGrid';
    document.querySelector('.friends-container').insertBefore(suggestedGrid, document.querySelectorAll('.section-title')[1]);
    
    const peopleGrid = document.createElement('div');
    peopleGrid.className = 'friends-grid';
    peopleGrid.id = 'peopleGrid';
    document.querySelector('.friends-container').appendChild(peopleGrid);
    
    suggestedFriends.forEach(friend => {
        createFriendCard(friend, 'suggestedGrid');
    });
    
    peopleYouMayKnow.forEach(friend => {
        createFriendCard(friend, 'peopleGrid');
    });
    
    // Adicionar event listeners aos botões
    document.querySelectorAll('.add-button').forEach(button => {
        button.addEventListener('click', function() {
            const friendId = parseInt(this.getAttribute('data-id'));
            toggleFriendStatus(friendId);
        });
    });
}

// Função para alternar o status de amigo adicionado
function toggleFriendStatus(friendId) {
    // Verificar em suggestedFriends
    let friend = suggestedFriends.find(f => f.id === friendId);
    
    if (!friend) {
        // Se não encontrou, verificar em peopleYouMayKnow
        friend = peopleYouMayKnow.find(f => f.id === friendId);
    }
    
    if (friend) {
        friend.isAdded = !friend.isAdded;
        const button = document.querySelector(`.add-button[data-id="${friendId}"]`);
        
        if (friend.isAdded) {
            button.innerHTML = '<i class="fas fa-check"></i> Adicionado';
            button.classList.add('added');
        } else {
            button.innerHTML = '<i class="fas fa-plus"></i> Adicionar';
            button.classList.remove('added');
        }
    }
}

// Função de busca
function setupSearch() {
    const searchInput = document.querySelector('.search-bar input');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        document.querySelectorAll('.friend-card').forEach(card => {
            const name = card.querySelector('.friend-name').textContent.toLowerCase();
            if (name.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Inicializar a página
document.addEventListener('DOMContentLoaded', function() {
    renderFriends();
    setupSearch();
});