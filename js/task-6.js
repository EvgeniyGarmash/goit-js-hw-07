function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const numberOfDiv = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]")
const destroyBtn = document.querySelector("button[data-destroy]")
const box = document.querySelector("#boxes")

createBtn.addEventListener("click", () => {
  if (numberOfDiv.value <= 0) {
    return alert ("Треба ввести число більше нуля")
  } else {
    if (numberOfDiv.value >= 101) {
      return alert ("Треба ввести число меньше 101")
    }
  }
  let markup = '';
  let wiHe = 30;
  for (let i = 0; i < numberOfDiv.value; i++) {
    markup = markup + `<div class="destroy" style="width: ${wiHe}px;height: ${wiHe}px;background-color: ${getRandomHexColor()};"></div>`;
    wiHe = wiHe + 10;
  }
  box.innerHTML = markup;
})

destroyBtn.addEventListener("click", () => {
  const destItem = document.querySelectorAll(".destroy")
  console.log(destItem)
  destItem.forEach( e => e.remove())
})