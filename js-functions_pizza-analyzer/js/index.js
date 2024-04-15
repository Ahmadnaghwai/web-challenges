console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code herepizzaInput1.addEventListener("input", () => {
  const pizza1Diameter = pizzaInput1.value;
  const pizza2Diameter = pizzaInput2.value;

  calculatePizzaGain(pizza1Diameter, pizza2Diameter);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here const pizza1Diameter = pizzaInput1.value;
  const pizza1Diameter = pizzaInput1.value;
  const pizza2Diameter = pizzaInput2.value;

  calculatePizzaGain(pizza1Diameter, pizza2Diameter);
});
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = (Math.PI * diameter1 * diameter1) / 4;
  const area2 = (Math.PI * diameter2 * diameter2) / 4;

  const gain = ((area2 - area1) / area1) * 100;

  updatePizzaDisplay(gain);
  updateOutputColor(gain);
}
function updatePizzaDisplay(newValue) {
  output.value = newValue;
}
// Task 1
// define the function calculatePizzaGain here
function updateOutputColor(gain) {
  const isNegative = gain < 0;

  if (isNegative) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
