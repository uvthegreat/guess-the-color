const squares = document.querySelectorAll(".square");
const section = document.querySelector("section");
const secretColor = document.querySelector(".secret-color");
const guessbox = document.querySelector(".guess span");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btns = document.querySelectorAll(".btn");
let noOfQuess;
let randomSecretColor;
let randomIndex;

// initial conditions
// function to reset the page
function reset() {
  noOfQuess = 3;
  guessbox.textContent = noOfQuess;
  randomSecretColor = randomColorGenerator();
  randomIndex = Math.floor(Math.random() * 5);
  secretColor.innerText = randomSecretColor;
  document.querySelector(".secret-color-modal").innerText = randomSecretColor;
  document.querySelector(".modal-square").style.backgroundColor =
    randomSecretColor;
  // setting colors of squares
  for (const square of squares) {
    square.style.backgroundColor = randomColorGenerator();
  }
  squares[randomIndex].style.backgroundColor = randomSecretColor;
  hideModal();
}
reset();

// Main logic
for (const square of squares) {
  square.addEventListener("click", () => {
    // if correct square is clicked
    if (square.style.backgroundColor === randomSecretColor) {
      // console.log("You win");
      modal.firstElementChild.textContent = "You won !!🎉🎉🥳🥳";
      showModal();
    }

    // if wrong square is clicked
    else {
      // console.log("wrong");
      noOfQuess--;
      guessbox.textContent = noOfQuess;
      if (noOfQuess <= 0) {
        // console.log("you lost");
        modal.firstElementChild.textContent =
          "Oops 🤕🤕 out of quesses Try again!!";
        showModal();
      }
    }
  });
}

// if button any button is clicked
for (const btn of btns) {
  btn.addEventListener("click", reset);
}

// function to show modal
function showModal() {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
}

// function to hide modal
function hideModal() {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}

// function to create a random color
function randomColorGenerator() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}
