
let valorItens = document.querySelectorAll(".num");
let intervalo = 4000;

valorItens.forEach((valorItem) => {
  let valorInicial = 0;
  let valorFinal = parseInt(valorItem.getAttribute("data-val"));
  let duracao = Math.floor(intervalo / valorFinal);
  let contador = setInterval(function (){
    valorInicial +=1;
    valorItem.textContent = valorInicial;

    if(valorInicial == valorFinal) {
      clearInterval(contador);
    }
  }, duracao);
});