document.addEventListener("DOMContentLoaded", function () {
  const rollButton = document.getElementById("rollButton");
  const diceTypeSelect = document.getElementById("diceType");
  const resultDisplay = document.getElementById("resultDisplay");
  const diceContainer = document.getElementById("diceContainer"); // Ensure you have this element reference

  rollButton.addEventListener("click", function () {
      const diceType = diceTypeSelect.value;
      const maxNumber = parseInt(diceType.substring(1)); // Extract the number from the dice type (e.g., d6 -> 6)
      const result = rollDice(maxNumber);
      resultDisplay.textContent = `You rolled a ${result}!`;
      showDice(result);
  });

  function rollDice(max) {
      return Math.floor(Math.random() * max) + 1; // Generate a random number from 1 to max
  }

  function showDice(result) {
      diceContainer.innerHTML = ''; // Clear previous dice images
      const diceImage = document.createElement('div');
      diceImage.className = 'die d' + result; // Set the appropriate class for the dice face
      diceContainer.appendChild(diceImage);
  }
});
