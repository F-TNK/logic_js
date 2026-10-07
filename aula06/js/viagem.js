const button = document.querySelector("#calc");
const litrosGastos = document.querySelector("#litrosGastos");
const ida = document.querySelector("#ida");
const ida_e_volta = document.querySelector("#idaVolta");

button.onclick = () => {
  const distancia = Number(document.querySelector("#distancia").value);
  const consumo = Number(document.querySelector("#consumo").value);
  const preco = Number(document.querySelector("#preco").value);

  const lGastos = distancia / consumo;
  const gastoIda = preco * lGastos;
  const idaVolta = gastoIda * 2;

  litrosGastos.textContent = "Litros Necessários: " + lGastos.toFixed(1) + "L";
  ida.textContent = "Custo de Ida: R$" + gastoIda.toFixed(2);
  ida_e_volta.textContent = "Custo de Ida e Volta: R$" + idaVolta.toFixed(2);
};
