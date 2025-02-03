// Initialize the counter
let count = 0;

// Get references using querySelector
const countDisplay = document.querySelector("#count");
const incrementButton = document.querySelector("#incrementButton");
const decrementButton = document.querySelector("#decrementButton");
const resetButton = document.querySelector("#resetButton");
const counterForm = document.querySelector("#counterForm");
const setCountInput = document.querySelector("#setCount");

// Update the displayed count
const updateDisplay = () => {
  countDisplay.textContent = count;
  decrementButton.disabled = count <= 0; // Disable only if count is 0
};

// Add event listeners
incrementButton.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decrementButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

counterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newValue = parseInt(setCountInput.value, 10);
  if (!isNaN(newValue) && newValue >= 0) {
    count = newValue; // Accept any number, no limit
    updateDisplay();
  }
});

// Initial state setup
updateDisplay();
