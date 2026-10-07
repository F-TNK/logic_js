const button = document.querySelector("#calc");
const TAXA_SERVICO = document.querySelector("#servico");
const vFinal = document.querySelector("#total");
const porPessoa = document.querySelector("#porPessoa");

button.onclick = () => {
  const val = Number(document.querySelector("#val").value);
  const pessoas = Number(document.querySelector("#pessoas").value);

  const TAXA = val * 0.1;
  const total = val + TAXA;
  const pPessoa = total / pessoas;

  TAXA_SERVICO.textContent = "Valor da taxa de serviço: R$" + TAXA.toFixed(2);
  vFinal.textContent = "Valor total da conta: R$" + total.toFixed(2);
  porPessoa.textContent = "Valor por pessoa: R$" + pPessoa.toFixed(2);
};
