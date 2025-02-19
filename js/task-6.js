function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector(".js-count-input");
const createBtn = document.querySelector(".js-btn-create");
const destroyBtn = document.querySelector(".js-btn-destroy");
const containerBoxes = document.querySelector("#boxes");

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const newBoxes = document.createElement("div");
    newBoxes.style.width = (30 + i * 10) + "px";
    newBoxes.style.height = (30 + i * 10) + "px";
    newBoxes.style.backgroundColor = getRandomHexColor();
    fragment.append(newBoxes);
  }
  containerBoxes.append(fragment);
  containerBoxes.classList.add("active");
}

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount <= 100 && amount >= 1) {
    containerBoxes.innerHTML = "";
    createBoxes(amount);
    input.value = "";
  } 
}) 

destroyBtn.addEventListener("click", () => {
  containerBoxes.innerHTML = "";
  containerBoxes.classList.remove("active");
})