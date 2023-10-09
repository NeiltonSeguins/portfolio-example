const imagemFlutuante = document.querySelector(".imagemFlutuante");
const texto = "Halo! Saya Gunawan.";
const elementoMaquinaEscrever = document.querySelector(".typewriter");

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

let indice = 0;

function escreverTexto() {
  if (indice < texto.length) {
    elementoMaquinaEscrever.textContent += texto.charAt(indice);
    indice++;
    setTimeout(escreverTexto, 100); // Ajuste a velocidade da digitação aqui (em milissegundos)
  }
}

// Iniciar a animação quando a página carregar
window.addEventListener("load", animarFlutuacao);
// Iniciar a animação quando a página carregar
window.addEventListener("load", escreverTexto);
