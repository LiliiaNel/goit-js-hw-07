function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".js-change-color");
const spanColor = document.querySelector(".js-color");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.style.color = getRandomHexColor();
});
