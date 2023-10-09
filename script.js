const imagemFlutuante = document.querySelector(".imagemFlutuante");

function animarFlutuacao() {
  let distancia = 20; // Distância vertical da flutuação em pixels
  let duracao = 2000; // Duração da animação em milissegundos

  imagemFlutuante.style.transition = `transform ${duracao}ms ease-in-out`;
  imagemFlutuante.style.transform = `translateY(-${distancia}px)`;

  setTimeout(() => {
    imagemFlutuante.style.transition = `transform ${duracao}ms ease-in-out`;
    imagemFlutuante.style.transform = `translateY(${distancia}px)`;

    setTimeout(() => {
      animarFlutuacao();
    }, duracao);
  }, duracao);
}

// Iniciar a animação quando a página carregar
window.addEventListener("load", animarFlutuacao);
