const input = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");
input.addEventListener("input", (event) =>{
  spanOutput.textContent = event.currentTarget.value.trim() || "Anonymous";
});