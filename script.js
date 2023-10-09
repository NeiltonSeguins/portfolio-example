const imagemFlutuante = document.querySelector(".imagemFlutuante");
let direcao = 1; // Define a direção da flutuação
let distancia = 10; // Define a distância vertical da flutuação em pixels

function animarFlutuacao() {
  imagemFlutuante.style.transform = `translateY(${distancia}px)`;

  // Inverte a direção quando atinge um limite
  if (distancia === 10) {
    direcao = -1;
  } else if (distancia === -10) {
    direcao = 1;
  }

  distancia += direcao;
}

// Iniciar a animação a cada 200 milissegundos
setInterval(animarFlutuacao, 45);
