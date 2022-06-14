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
let winner;

const gameBoard = (function () {
  "use strict";
  const board = ["", "", "", "", "", "", "", "", ""];

  const setSquare = function (index, marker) {
    board[index] = marker;
  };

  const checkForWin = function (board) {
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

    for (let i = 0; i <= winningConditions.length; i++) {
      if (winningConditions[i].every(isX) || winningConditions[i].every(isO)) {
        winner = true;
      } else {
        winner = false;
      }

      return winner;
    }
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

  const displayWinner = function () {
    if (winner == true) {
      winnerText.innerHTML = "Game over! Three in a row!";
    }
  };

  const resetGame = function () {};

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
      gameBoard.checkForWin(gameBoard.board);
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
