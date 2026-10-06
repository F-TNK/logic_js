console.log("ligou");

const botao = document.querySelector("#convert");
const result = document.querySelector("#resultado");

botao.onclick = () => {
  const c = Number(document.querySelector("#tempC").value);

  const f = (c * 9) / 5 + 32;

  result.textContent = "Temperatura em °F = " + f.toFixed(1);
};
