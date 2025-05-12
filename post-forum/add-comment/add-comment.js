// Modo escuro
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = darkModeBtn.querySelector("i");
  icon.classList.toggle("bxs-moon");
  icon.classList.toggle("bxs-sun");
});

// Carrega imagem do localStorage
window.addEventListener("DOMContentLoaded", () => {
  const previewImg = document.getElementById("preview-img");
  const savedImg = localStorage.getItem("previewImage");
  if (savedImg) {
    previewImg.src = savedImg;
  }
});

// Botão "Publicar"
document.getElementById("postarBtn").addEventListener("click", () => {
  const comentario = document.getElementById("comentario").value.trim();
  if (comentario === "") {
    alert("Por favor, escreva um comentário.");
  } else {
    alert("Comentário enviado: " + comentario);
    // Aqui você pode usar fetch/AJAX ou redirecionar
  }
});

// Função de recorte
let cropper;

document.querySelector(".edit-btn").addEventListener("click", () => {
  const previewImg = document.getElementById("preview-img");
  const cropImage = document.getElementById("crop-image");
  const cropContainer = document.getElementById("crop-container");

  cropImage.src = previewImg.src;
  cropContainer.style.display = "block";

  if (cropper) cropper.destroy();

  cropper = new Cropper(cropImage, {
    aspectRatio: NaN,
    viewMode: 1,
    autoCropArea: 0.9,
    movable: true,
    cropBoxResizable: true
  });
});

// Confirmar recorte
document.getElementById("confirm-crop").addEventListener("click", () => {
  if (!cropper) return;

  const canvas = cropper.getCroppedCanvas();
  const croppedDataUrl = canvas.toDataURL();

  document.getElementById("preview-img").src = croppedDataUrl;
  localStorage.setItem("previewImage", croppedDataUrl);

  document.getElementById("crop-container").style.display = "none";
  cropper.destroy();
  cropper = null;

  alert("Imagem recortada com sucesso!");
});

// Cancelar recorte
document.getElementById("cancel-crop").addEventListener("click", () => {
  if (cropper) {
    cropper.destroy();
    cropper = null;
  }
  document.getElementById("crop-container").style.display = "none";
});
