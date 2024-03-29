function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const randomColor = document.querySelector(".change-color");
const output = document.querySelector(".color");

randomColor.addEventListener("click", () => {
  let hexColor = getRandomHexColor();
  const body = document.querySelector("body");
  body.style.backgroundColor = hexColor;
  output.textContent = hexColor;
})