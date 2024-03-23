document.addEventListener("DOMContentLoaded", function () {
  // Get references to HTML elements
  const userChoiceDisplay = document.getElementById("user-choice");
  const computerChoiceDisplay = document.getElementById("computer-choice");
  const resultDisplay = document.getElementById("result");

  // Define the choices for the game
  const choices = ["rock", "paper", "scissors"];

  // Add click event listeners to each button
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function () {
      // Get user's choice based on the button clicked
      const userChoice = button.id.toLowerCase(); // Convert to lowercase for consistency
      userChoiceDisplay.textContent = userChoice;

      // Generate computer's choice randomly
      const computerChoice = generateComputerChoice();
      computerChoiceDisplay.textContent = computerChoice;

      // Determine the result of the game
      const result = getResult(userChoice, computerChoice);
      resultDisplay.textContent = result;
    });
  });

  // Function to generate computer's choice
  function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }

  // Function to determine the result of the game
  function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
});
