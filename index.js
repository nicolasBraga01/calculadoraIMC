const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  // e = evento de forma abreviada

  //não vai deixar o formulário ser enviado
  e.preventDefault();

  // console.log('passou')

  //pega os valores e transforma em número
  const peso = Number(document.querySelector("#peso").value);
  const altura = Number(document.querySelector("#altura").value);
  console.log(peso, altura);
  //caso peso não seja um número "faça isso"
  if (!peso) {
    setResultado("peso invalido", false);
    return;
  }
  //caso a altura não seja um número "faça isso"
  if (!altura) {
    setResultado("altura invalida", false);
    return;
  }
  if ( peso >= 300){
    setResultado("peso acima do limite ", false);
    return;
  }
  if ( altura >= 3){
    setResultado("altura acima do limite ", false);
    return;
  }
  const calculoImc = parseFloat(peso / altura ** 2);
  const infoIMc = infoImc(calculoImc);
  setResultado(
    `Seu imc é ${calculoImc.toFixed(2)} e você está classificado ${infoIMc}`,
    true
  );
});

// automatiza a criação de paragrafos
function fazP() {
  // cria um elemento do html no javascript
  const p = document.createElement("p");
  return p;
}
function infoImc(calculoImc) {
  const infoIMc = [
    "Abaixo do peso",
    "Peso Normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  console.table(infoIMc)

  if (calculoImc < 18.5) return infoIMc[0];

  if (calculoImc <= 24.9) return infoIMc[1];

  if (calculoImc <= 29.9) return infoIMc[2];

  if (calculoImc <= 34.9) return infoIMc[3];

  if (calculoImc <= 39.9) return infoIMc[4];

  if (calculoImc > 40) return infoIMc[5];
}
function setResultado(mensagem, isVAlid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = fazP();

  if (isVAlid) {
    // adiciona uma classe no elemento que eu criei, oq me dar a possibilidade de formatar pelo css;
    p.classList.add("p-certo");
  } else {
    p.classList.add("p-errado");
  }

  p.innerHTML = mensagem;

  //   so funciona se tiver essa último parte pois ele diz que o p entrará na div resultado (parte importante)
  resultado.appendChild(p);
}
