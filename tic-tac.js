document.addEventListener("DOMContentLoaded", function () {
  let boxes = document.querySelectorAll(".box");
  let reSetBtn = document.querySelector(".reset-btn");
  const winnerResulte = document.querySelector(".resulte");
  let turnO = true;
  let draw = 0;
  const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  boxes.forEach((clicked) => {
    clicked.addEventListener("click", () => {
      if (turnO) {
        clicked.innerText = "O";
        clicked.style.color = "blue";
        turnO = !turnO;
      } else {
        clicked.innerText = "X";
        clicked.style.color = "red";
        turnO = !turnO;
      }
      clicked.disabled = true;
      checkTheWinner();
      draw++;
      console.log(draw);
      if (draw === 9) {
        result("There is no winner");
      }

    });
  });

  const disableBox = () => {
    for (const box of boxes) {
      box.disabled = true;
    }
  };
  const result = (winner) => {
    winnerResulte.innerText = `${winner}`;
    disableBox();
  };
  const checkTheWinner = () => {
    for (const pattern of winningPattern) {
      let pos1 = boxes[pattern[0]].innerText;
      let pos2 = boxes[pattern[1]].innerText;
      let pos3 = boxes[pattern[2]].innerText;
      if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
        if (pos1 === pos2 && pos2 === pos3 && draw !== true) {
          result(`the winner is ${pos1}`);
        }
      }
    }
  };

  reSetBtn.addEventListener("click", () => {
    boxes.forEach((clicked) => {
      if (clicked.innerText) {
        clicked.innerText = "";
        winnerResulte.innerText = "";
        // location.reload();
        draw = 0;
        turnO = true;
      }
      clicked.disabled = false;
    });
  });
});
