const secretNumber = document.querySelector(".number");

const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const scoreInput = document.querySelector(".score");
const highScoreInput = document.querySelector(".highscore");
const again = document.querySelector(".again");

const randomNumber = Math.trunc(Math.random() * 20) + 1;

again.addEventListener("click", function() {
  document.querySelector("body").style.backgroundColor="black";
  guess.textContent = "0";
  scoreInput.textContent = "20";
  secretNumber.textContent = "?";
  message.textContent = "Start guessing...";
  guess.value = "";
})

let score = 20;
let highScore = 0;

checkBtn.addEventListener("click", function () {
  if (Number(guess.value) > randomNumber) {
    message.textContent = "Too high";
    if (score > 1) {
      score--;
      scoreInput.textContent = score;
    } else {
      scoreInput.textContent = 0;
      message.textContent = "You lost the game";
    }
  } else if (Number(guess.value) < randomNumber) {
    message.textContent = "Too low";
    if (score > 1) {
      score--;
      scoreInput.textContent = score;
    } else {
      scoreInput.textContent = 0;
      message.textContent = "You lost the game";
    }
    //qalib olan hal
  } else if (Number(guess.value) == randomNumber) {
    message.textContent = "You win the game";
    document.querySelector("body").style.backgroundColor = "green";
    secretNumber.textContent = randomNumber;
    if (score > highScore) {
      highScore = score;
      highScoreInput.textContent = highScore;
    }
  }
});
