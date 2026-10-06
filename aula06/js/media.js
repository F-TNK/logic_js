console.log("ligou");

const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");

botao.onclick = () => {
  // 1. ler
  const n1 = Number(document.querySelector("#nota1").value);
  const n2 = Number(document.querySelector("#nota2").value);

  // 2. calcular
  const media = (n1 + n2) / 2;

  // 3. mostrar
  saida.textContent = "Média: " + media.toFixed(1);
};

/* Pergunta 3.1: 
    Resultado aparece como NaN (not a number) porque sem o Number() não processa os inputs como números
*/
