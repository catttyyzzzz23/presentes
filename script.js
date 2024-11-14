function expandImage(img) {
    var lightbox = document.getElementById("lightbox");
    var expandedImg = document.getElementById("expanded-img");
    expandedImg.src = img.src; // Define a imagem expandida com a mesma fonte da imagem clicada
    lightbox.style.display = "flex"; // Mostra o lightbox
}

function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // Esconde o lightbox
}
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

// Função para mostrar o slide atual
function showSlide(index) {
    // Corrige o índice se for menor que 0 ou maior que o último item
    currentIndex = (index + carouselItems.length) % carouselItems.length;

    // Oculta todos os itens e remove a classe "active"
    carouselItems.forEach(item => item.classList.remove('active'));

    // Adiciona a classe "active" ao item atual
    carouselItems[currentIndex].classList.add('active');
}

// Função para mover o slide
function moveSlide(step) {
    showSlide(currentIndex + step);
}

// Inicializa o carrossel mostrando a primeira imagem
showSlide(currentIndex);
