// SELECTORS
btnGuess = document.querySelector(".btn");
hiddenNumber = document.querySelector(".hidden-number");
answerBox = document.querySelector(".answerbox");
errorBase = document.querySelector(".errorBase");
errorNumberContainer = document.querySelector(".error-number");
pickNumberText = document.querySelector(".pick-number");

// EVENT LISTENER
window.addEventListener("DOMContentLoaded", () => {
  let hiddenRandomNumber = Math.floor(Math.random() * 100);
  hiddenNumber.textContent = hiddenRandomNumber;
  hiddenNumber.textContent = parseInt(hiddenNumber.textContent);

  // FUNCTION TO HANDLE CHECK NUMBERS
  const checkNumber = () => {
    let foundNumber = "You Found The Number";
    let tooLow = "Too Low";
    let tooHigh = "Too High";

    inputValue = parseInt(document.getElementById("guessInput").value);

    // CHECK CONSOLE FOR ACTUAL VALUES
    console.log(
      "inputValue;",
      inputValue,
      "hiddenNumber;",
      parseInt(hiddenNumber.textContent)
    );

    // LOGIC FOR CHECKING NUMBER AND FUNCTIONALITY
    if (inputValue === parseInt(hiddenNumber.textContent)) {
      hiddenNumber.classList.add("show-hidden-number");
      errorNumberContainer.classList.add("show-error-number");
      answerBox.classList.add("answerbox");
      pickNumberText.classList.add("hide-pick-number");
      answerBox.textContent = foundNumber;
    } else if (inputValue < parseInt(hiddenNumber.textContent)) {
      answerBox.textContent = tooLow;
    } else if (inputValue > parseInt(hiddenNumber.textContent)) {
      answerBox.textContent = tooHigh;
    } else return;
  };

  // FUNCTION TO HANDLE PREVIOUS ERRORS AND LOCAL STORAGE
  let errorArray = [];
  document.getElementsByClassName("errorBase").innerHTML = errorArray;

  const pushInputValues = () => {
    errorArray.push(inputValue);
    if (inputValue === parseInt(hiddenNumber.textContent)) {
      errorArray.pop();
      errorBase.textContent = errorArray.join(",");
    }
    // LOCAL STORAGE
    if (inputValue) {
      localStorage.setItem("inputsAttempts", errorArray);
    }
  };

  // BUTTON EVENT LISTENER
  btnGuess.addEventListener("click", (e) => {
    e.preventDefault();
    checkNumber();
    pushInputValues();

    // CHECK CONSOLE FOR ERROR ARRAY AND LOCAL STORAGE ARRAY
    console.log("errors:", errorArray);

    // CHECK CONSOLE FOR LOCAL STORAGE ARRAY
    console.log(localStorage);
  });
});
