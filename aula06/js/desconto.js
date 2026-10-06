console.log("ligado");

const button = document.querySelector("#calc");
const pFinal = document.querySelector("#pFinal");

button.onclick = () => {
  const preco = Number(document.querySelector("#preco").value);
  const prcnt = Number(document.querySelector("#prcnt").value);

  const valDisc = (preco / 100) * prcnt;
  const valFinal = preco - valDisc;

  pFinal.textContent = "Preço Final = " + valFinal.toFixed(2);
};
