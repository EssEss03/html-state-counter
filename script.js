// Initialize the counter
let count = 0;

// Get references to DOM elements
const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("incrementButton");

// Add click listener to the button
incrementButton.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;

  // Disable the button if the count reaches the maximum value
  if (count >= 10) {
    incrementButton.disabled = true;
  }
});
