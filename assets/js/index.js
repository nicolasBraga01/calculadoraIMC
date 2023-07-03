
alert('Agora está aceitando virgulas')
const form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const peso = parseNumber(document.querySelector("#peso").value);
  const altura = parseNumber(document.querySelector("#altura").value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  if (peso >= 200) {
    setResultado("Peso acima do limite", false);
    return;
  }

  if (peso <= 20) {
    setResultado("Peso abaixo do limite", false);
    return;
  }

  if (altura >= 3) {
    setResultado("Altura acima do limite", false);
    return;
  }

  const calculoImc = parseFloat(peso / altura ** 2);
  const infoIMc = getInfoImc(calculoImc);
  setResultado(
    `Seu IMC é ${calculoImc.toFixed(2)} e você está classificado como ${infoIMc}`,
    true
  );
});

function parseNumber(value) {
  // Remover caracteres não numéricos, exceto vírgula e ponto
  value = value.replace(/[^0-9,.]/g, "");
  // Substituir vírgula por ponto
  value = value.replace(",", ".");
  // Remover pontos adicionais
  value = value.replace(/\.(?=.*\.)/g, "");
  // Converter para número
  return parseFloat(value);
}

function getInfoImc(calculoImc) {
  const infoIMc = [
    "Abaixo do peso",
    "Peso Normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (calculoImc < 18.5) return infoIMc[0];
  if (calculoImc <= 24.9) return infoIMc[1];
  if (calculoImc <= 29.9) return infoIMc[2];
  if (calculoImc <= 34.9) return infoIMc[3];
  if (calculoImc <= 39.9) return infoIMc[4];
  if (calculoImc >= 40) return infoIMc[5];
}

function setResultado(mensagem, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = document.createElement("p");
  p.textContent = mensagem;

  if (isValid) {
    p.classList.add("p-certo");
  } else {
    p.classList.add("p-errado");
  }

  resultado.appendChild(p);
}
