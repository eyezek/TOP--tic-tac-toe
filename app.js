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

const gameBoard = (function () {
  "use strict";
  const board = ["", "", "", "", "", "", "", "", ""];

  const setSquare = function (index, marker) {
    board[index] = marker;
  };

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkForWin = function (array) {};

  return {
    board,
    setSquare,
    winningConditions,
  };
})();

const playerFactory = function (name, marker) {
  return { name, marker };
};

const player1 = playerFactory("player1", "X");

const player2 = playerFactory("player2", "O");

let currentPlayer = player1;

playerText.innerHTML = "Player 1/X's Turn!";

const displayController = (function () {
  "use strict";
  const displayPlayer = function () {
    if (currentPlayer == player1) {
      playerText.innerHTML = "Player 1/X's Turn!";
    } else if (currentPlayer == player2) {
      playerText.innerHTML = "Player 2/O's Turn";
    }
  };
  return {
    displayPlayer,
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
