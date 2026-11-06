const counter = document.getElementById("counter");
const button = document.getElementById("btn");
const reset = document.getElementById("reset");

let count = 0;

button.addEventListener("click", () => {
  count += 1;
  counter.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});
