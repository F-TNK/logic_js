const button = document.querySelector("#conv");
const horaMin = document.querySelector("#horaMin");

button.onclick = () => {
  const min = Number(document.querySelector("#min").value);
  const h = Math.floor(min / 60);
  const rest = min % 60;

  horaMin.textContent =
    min + "min é equivalente a " + h + "h e " + rest + "min";
};
