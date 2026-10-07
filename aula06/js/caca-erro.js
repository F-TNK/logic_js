const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");

botao.onclick = () => {
  const n1 = Number(document.querySelector("#nota1").value);
  const n2 = Number(document.querySelector("#nota2").value);
  const n3 = Number(document.querySelector("#nota3").value);
  const media = (n1 + n2 + n3) / 3;
  saida.textContent = "Média: " + media.toFixed(1);
};

/*
1 - no CONST BOTAO estava declarado o id #calcula ao invés de #calcular, 
    como foi pedido para ser declarado no HTML. Possivel de ser encontrado 
    porque a página carregava retornando um erro no console, antes mesmo de 
    interagir com ela
2 - os CONST dos valores de input nao foram escritos com Number(). Esse é
    possivel de identificar imediatamente por observação
3 - A conta "media = n1 + n2 + n3 / 3" foi redigida sem parenteses na soma, 
    para garantir a ordem correta das operações, tambem possivel de ser 
    identificada visualmente imediatamente, mas realizei o teste sem o 
    parenteses para verificar a falha
*/
