let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset-btn");
let newGameButton = document.querySelector(".new-game-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let currentPlayer = "X";
let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Clicked box");
    if (currentPlayer === "X" && box.innerText === "") {
      box.innerText = currentPlayer;
      currentPlayer = "O";
    } else if (currentPlayer === "O" && box.innerText === "") {
      box.innerText = currentPlayer;
      currentPlayer = "X";
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
  }
};

const showWinner = (winner) => {
  msgContainer.classList.remove("hide");
  msg.innerText = `Congratulation, Player ${winner} wins!`;
  resetButton.classList.add("hide");
  disableBoxes();
};

const checkWinner = () => {
    
  for (let pattern of winPattern) {
    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;

    if (pos1Value != "" || pos2Value != "" || pos3Value != "") {
      if (pos1Value === pos2Value && pos2Value === pos3Value) {
        showWinner(pos1Value);
      }
    }
  }
};

const resetGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  currentPlayer = "X";
  msgContainer.classList.add("hide");
  resetButton.classList.remove("hide");
};

resetButton.addEventListener("click", resetGame);
newGameButton.addEventListener("click", resetGame);
