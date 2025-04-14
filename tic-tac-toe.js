// Targeting Elements

let box = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset");
let player1Score = document.getElementById("player1");
let player2Score = document.getElementById("player2");
let xturn = document.querySelector(".xturn h1");
let tie = document.getElementById("TIES");
let windows = document.getElementById("window");
let nextRound = document.getElementById("NextRound");
let quit = document.getElementById("Quit");
let Round = document.getElementById("round");
let Youwon = document.getElementById("YouWon");

// Global Variables
let turnX = true;
let player1Count = 0;
let player2Count = 0;
let tiecount = 0;

// X & O Logic

box.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "" && !box.classList.contains("disabled")) {
      if (turnX) {
        box.innerText = "X";
        box.style.color = "#30C0BD";
        box.style.fontSize = "400%";
        turnX = false;
        xturn.innerText = "O TURN";
      } else {
        box.innerText = "O";
        box.style.color = "#9C7735";
        box.style.fontSize = "400%";
        turnX = true;
        xturn.innerText = "X TURN";
      }

      checkWinner();
    }
  });
});

// Pattern Logic

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// checkwinner Logic

const checkWinner = () => {
  let hasWinner = false;

  // Check for a winner
  for (let pattern of winningPatterns) {
    let val1 = box[pattern[0]].innerText;
    let val2 = box[pattern[1]].innerText;
    let val3 = box[pattern[2]].innerText;

    if (val1 !== "" && val1 === val2 && val2 === val3) {
      hasWinner = true;
      console.log(val1, "won");
      box.forEach((element) => element.classList.add("disabled")); // Disable all boxes after finding a winner

      if (val1 === "X") {
        player1Count++;
        player1Score.innerText = `X(PLAYER1): ${player1Count}`;
        Round.innerText = `X TAKES THE ROUND`;
      } else if (val1 === "O") {
        player2Count++;
        player2Score.innerText = `O(PLAYER2): ${player2Count}`;
        Round.innerText = `O TAKES THE ROUND`;
      }
      PopUp();
      break;
    }
  }

  // TIE LOGIC

  if (!hasWinner && Array.from(box).every((b) => b.innerText !== "")) {
    tiecount++;
    tie.innerText = `TIES: ${tiecount}`;
    Round.innerText = `TIE!`;
    Youwon.innerText = `Nobody Won!`;
    tiecount = 0;
    box.forEach((element) => element.classList.add("disabled")); // Disable all boxes after a tie
    PopUp();
  }
};

// RESET LOGIC

resetBtn.addEventListener("click", () => {
  windows.style.display = "none";
  box.forEach((element) => {
    element.innerText = "";
    element.classList.remove("disabled");
  });
  xturn.innerText = "X TURN"; // Reset the turn indicator
  turnX = true; // Reset to X's turn
  tie.innerText = "TIES: 0";
  player1Score.innerText = "X(PLAYER1): 0";
  player2Score.innerText = "O(PLAYER2): 0";
  player1Count = 0;
  player2Count = 0;
});

// QUIT LOGIC

quit.addEventListener("click", () => {
  windows.style.display = "none";
  box.forEach((element) => {
    element.innerText = "";
    element.classList.remove("disabled");
  });
  xturn.innerText = "X TURN"; // Reset the turn indicator
  turnX = true; // Reset to X's turn
  tie.innerText = "TIES: 0";
  player1Score.innerText = "X(PLAYER1): 0";
  player2Score.innerText = "O(PLAYER2): 0";
  player1Count = 0;
  player2Count = 0;
});

// Next Round Logic

nextRound.addEventListener("click", () => {
  windows.style.display = "none";
  box.forEach((element) => {
    element.innerText = "";
    element.classList.remove("disabled");
  });
  xturn.innerText = "X TURN"; // Reset the turn indicator
  turnX = true; // Reset to X's turn
  hasWinner = true;
  console.log(val1, "won");
  box.forEach((element) => element.classList.add("disabled")); // Disable all boxes after finding a winner

  if (val1 === "X") {
    player1Count++;
    player1Score.innerText = `X(PLAYER1): ${player1Count}`;
  } else if (val1 === "O") {
    player2Count++;
    player2Score.innerText = `O(PLAYER2): ${player2Count}`;
  }
  if (!hasWinner && Array.from(box).every((b) => b.innerText !== "")) {
    tiecount++;
    tie.innerText = `TIES: ${tiecount}`;
    box.forEach((element) => element.classList.add("disabled")); // Disable all boxes after a tie
  }
});

// PopUp
const PopUp = () => {
  windows.style.display = "flex";
};
