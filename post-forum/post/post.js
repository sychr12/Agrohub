// Seletores
const fileUpload = document.getElementById("file-upload");
const filePreview = document.getElementById("file-preview");
const nextBtn = document.getElementById("next-btn"); // Corrigido ID

// Evento: carregar e mostrar imagem ou vídeo
fileUpload.addEventListener("change", function () {
  const file = this.files[0];
  filePreview.innerHTML = ""; // Limpa prévia anterior

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (e) {
    let content = "";

    if (file.type.startsWith("image/")) {
      content = `<img src="${e.target.result}" alt="Pré-visualização da imagem" />`;
    } else if (file.type.startsWith("video/")) {
      content = `<video controls><source src="${e.target.result}" type="${file.type}">Seu navegador não suporta vídeo.</video>`;
    } else {
      content = "<p>Tipo de arquivo não suportado.</p>";
    }

    filePreview.innerHTML = content;

    // Ativa o botão avançar
    nextBtn.style.display = "inline-block";
    nextBtn.disabled = false;
    nextBtn.classList.add("active");
  };

  reader.readAsDataURL(file);
});

nextBtn.addEventListener('click', function () {
  const file = fileUpload.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    localStorage.setItem('previewImage', e.target.result); // salva no navegador
    window.location.href = 'add-comment.html';
  };
  reader.readAsDataURL(file);
});



const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Alterna o ícone do botão
  const icon = darkModeBtn.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("bxs-moon");
    icon.classList.add("bxs-sun");
  } else {
    icon.classList.remove("bxs-sun");
    icon.classList.add("bxs-moon");
  }
});
