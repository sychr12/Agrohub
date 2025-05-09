// Variáveis globais
let followers = 98;
let following = 50;
let likes = 134;
let isBioAdded = false;

// Elementos do DOM
const editProfileBtn = document.getElementById('editProfile');
const editModal = document.getElementById('editModal');
const closeBtn = document.querySelector('.close');
const profileForm = document.getElementById('profileForm');
const addBioBtn = document.getElementById('addBio');
const editDetailsBtn = document.getElementById('editDetails');
const addHighlightsBtn = document.getElementById('addHighlights');
const likeButtons = document.querySelectorAll('.like-btn');
const viewModeSelect = document.getElementById('viewMode');
const darkModeBtn = document.getElementById('darkModeBtn');

// Event Listeners
editProfileBtn.addEventListener('click', openEditModal);
closeBtn.addEventListener('click', closeEditModal);
profileForm.addEventListener('submit', saveProfileChanges);
addBioBtn.addEventListener('click', addBiography);
editDetailsBtn.addEventListener('click', openEditModal);
addHighlightsBtn.addEventListener('click', addHighlights);
viewModeSelect.addEventListener('change', changeViewMode);
darkModeBtn.addEventListener('click', toggleDarkMode);

// Adiciona eventos para os botões de curtir
likeButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        toggleLike(this);
    });
});

// Fecha o modal se clicar fora dele
window.addEventListener('click', function(event) {
    if (event.target === editModal) {
        closeEditModal();
    }
});

// Funções
function openEditModal() {
    editModal.style.display = 'block';
}

function closeEditModal() {
    editModal.style.display = 'none';
}

function saveProfileChanges(e) {
    e.preventDefault();
    
    const newCity = document.getElementById('newCity').value;
    const newFrom = document.getElementById('newFrom').value;
    const newBio = document.getElementById('newBio').value;
    
    document.getElementById('city').textContent = newCity;
    document.getElementById('from').textContent = newFrom;
    
    if (newBio) {
        isBioAdded = true;
        addBioBtn.textContent = newBio;
        addBioBtn.classList.remove('add-bio');
        addBioBtn.style.color = '#333';
    }
    
    closeEditModal();
}

function addBiography(e) {
    e.preventDefault();
    if (!isBioAdded) {
        openEditModal();
    }
}

function addHighlights(e) {
    e.preventDefault();
    alert('Funcionalidade "Adicionar Destaques" será implementada em breve!');
}

function toggleLike(button) {
    const postId = button.getAttribute('data-post');
    const post = document.getElementById(postId);
    
    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
        button.innerHTML = '<i class="bx bx-heart"></i>';
        likes--;
    } else {
        button.classList.add('liked');
        button.innerHTML = '<i class="bx bxs-heart" style="color: #e0245e;"></i>'; 
        likes++;
    }
    
    document.getElementById('curtidasCount').textContent = likes;
}

function changeViewMode() {
    const mode = viewModeSelect.value;
    if (mode === 'grid') {
        alert('Visualização em grade ativada! (Esta é apenas uma demonstração)');
    } else {
        alert('Visualização em lista ativada!');
    }
}

function openChat() {
    alert('Chat aberto! (Funcionalidade simulada)');
}

function sharePost() {
    alert('Post compartilhado! (Funcionalidade simulada)');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}