squares = document.querySelectorAll(".squares");
square1 = document.getElementById("square1");
square2 = document.getElementById("square2");
square3 = document.getElementById("square3");
square4 = document.getElementById("square4");
square5 = document.getElementById("square5");
square6 = document.getElementById("square6");
square7 = document.getElementById("square7");
square8 = document.getElementById("square8");
square9 = document.getElementById("square9");
playerText = document.getElementById("player");
winnerText = document.getElementById("winnerText");
resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
  location.reload();
});
let winner;

const gameBoard = (function () {
  "use strict";
  const board = ["", "", "", "", "", "", "", "", ""];

  const setSquare = function (index, marker) {
    board[index] = marker;
  };

  const checkForWin = function () {
    const winningConditions = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    function isX(element) {
      return element === "X";
    }

    function isO(element) {
      return element === "O";
    }

    for (let i = 0; i < winningConditions.length; i++) {
      if (winningConditions[i].every(isX) || winningConditions[i].every(isO)) {
        winner = true;
        console.log(winner);
      } else {
        winner = false;
        console.log(winner);
      }
    }
    return winner;
  };

  return {
    board,
    setSquare,
    checkForWin,
    winner,
  };
})();

const playerFactory = function (name, marker) {
  return { name, marker };
};

const player1 = playerFactory("player1", "X");

const player2 = playerFactory("player2", "O");

let currentPlayer = player1;

const displayController = (function () {
  "use strict";
  const displayPlayer = function () {
    if (currentPlayer == player1) {
      playerText.innerHTML = "Player 1/X's Turn!";
    } else if (currentPlayer == player2) {
      playerText.innerHTML = "Player 2/O's Turn";
    }
  };

  const displayWinner = function () {
    if (winner == true) {
      winnerText.innerHTML = "Game over! Three in a row!";
    }
  };

  return {
    displayPlayer,
    displayWinner,
  };
})();

const gameModule = (function () {
  "use strict";
  const switchPlayers = function () {
    if (currentPlayer == player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  };
  const turn = document.querySelectorAll(".squares").forEach(function () {
    addEventListener("click", function (event) {
      event.target.innerHTML = currentPlayer.marker;
      gameBoard.setSquare(
        event.target.getAttribute("data-index-number"),
        currentPlayer.marker
      );
      gameBoard.checkForWin();
      displayController.displayWinner();
      switchPlayers();
      displayController.displayPlayer();
    });
  });
  return {
    turn,
    switchPlayers,
  };
})();

function game() {
  gameModule.turn;
}

game();

// let gameBoard = {
//   board: [
//     square1,
//     square2,
//     square3,
//     square4,
//     square5,
//     square6,
//     square7,
//     square8,
//     square9,
//   ],
// };

// function endTurn() {
//   if (square1.innerhtml == "X") {
//     return;
//   } else if (square2.innerHTML == "X") {
//     return;
//   } else if (square3.innerHTML == "X") {
//     return;
//   } else if (square4.innerHTML == "X") {
//     return;
//   } else if (square5.innerHTML == "X") {
//     return;
//   } else if (square6.innerHTML == "X") {
//     return;
//   } else if (square7.innerHTML == "X") {
//     return;
//   } else if (square8.innerHTML == "X") {
//     return;
//   } else if (square9.innerHTML == "X") {
//     return;
//   } else {
//   }
// }

// function player1Turn() {
//   square1.addEventListener("click", function () {
//     square1.innerHTML = "X";
//   });
//   endTurn();
//   square2.addEventListener("click", function () {
//     square2.innerHTML = "X";
//   });
//   endTurn();
//   square3.addEventListener("click", function () {
//     square3.innerHTML = "X";
//   });
//   endTurn();
//   square4.addEventListener("click", function () {
//     square4.innerHTML = "X";
//   });
//   endTurn();
//   square5.addEventListener("click", function () {
//     square5.innerHTML = "X";
//   });
//   endTurn();
//   square6.addEventListener("click", function () {
//     square6.innerHTML = "X";
//   });
//   endTurn();
//   square7.addEventListener("click", function () {
//     square7.innerHTML = "X";
//   });
//   endTurn();
//   square8.addEventListener("click", function () {
//     square8.innerHTML = "X";
//   });
//   endTurn();
//   square9.addEventListener("click", function () {
//     square9.innerHTML = "X";
//   });
//   endTurn();
// }

// function player2Turn() {
//   square1.addEventListener("click", function () {
//     square1.innerHTML = "O";
//   });
//   square2.addEventListener("click", function () {
//     square2.innerHTML = "O";
//   });
//   square3.addEventListener("click", function () {
//     square3.innerHTML = "O";
//   });
//   square4.addEventListener("click", function () {
//     square4.innerHTML = "O";
//   });
//   square5.addEventListener("click", function () {
//     square5.innerHTML = "O";
//   });
//   square6.addEventListener("click", function () {
//     square6.innerHTML = "O";
//   });
//   square7.addEventListener("click", function () {
//     square7.innerHTML = "O";
//   });
//   square8.addEventListener("click", function () {
//     square8.innerHTML = "O";
//   });
//   square9.addEventListener("click", function () {
//     square9.innerHTML = "O";
//   });
// }

// player1Turn();

// function game() {}

// let gameBoard = {
//     square1: document.getElementById("square1"),
//     square2: document.getElementById("square2"),
//     square3: document.getElementById("square3"),
//     square4: document.getElementById("square4"),
//     square5: document.getElementById("square5"),
//     square6: document.getElementById("square6"),
//     square7: document.getElementById("square7"),
//     square8: document.getElementById("square8"),
//     square9: document.getElementById("square9"),
//   };
