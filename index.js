// script.js
function criarPresente() {
    const presente = document.createElement('img');
    presente.src = 'https://cdn.dooca.store/103018/products/presente-surpresa-661553a0a7117_620x620.png?v=1727621053&webp=0';  // Substitua pelo caminho da imagem do presente
    presente.alt = 'Presente';
    presente.classList.add('presente'); // Aplica a animação de queda

    // Definindo tamanho aleatório do presente
    const tamanho = Math.random() * (100 - 50) + 50;
    presente.style.width = `${tamanho}px`;

    // Posicionando aleatoriamente a posição horizontal
    presente.style.left = `${Math.random() * window.innerWidth}px`;

    // Adiciona o presente ao corpo da página
    document.body.appendChild(presente);

    // Remover o presente após o fim da animação
    setTimeout(() => {
        presente.remove();
    }, 5000); // Tempo da animação (5 segundos)
}

// Criar presentes a cada 1 segundo
setInterval(criarPresente, 1000);
