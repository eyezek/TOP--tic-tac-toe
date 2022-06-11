squares = document.getElementsByClassName("squares");
square1 = document.getElementById("square1");
square2 = document.getElementById("square2");
square3 = document.getElementById("square3");
square4 = document.getElementById("square4");
square5 = document.getElementById("square5");
square6 = document.getElementById("square6");
square7 = document.getElementById("square7");
square8 = document.getElementById("square8");
square9 = document.getElementById("square9");

const gameBoard = (function () {
  "use strict";
  const board = ["", "", "", "", "", "", "", "", ""];

  const setSquare = function (index, marker) {
    board[index] = marker;
  };
  return {
    board,
    setSquare,
  };
})();

const playerFactory = function (name, marker) {
  return { name, marker };
};

const player1 = playerFactory("player1", "X");

const player2 = playerFactory("player2", "O");

const displayController = (function () {
  "use strict";
  // placeholder
})();

const gameModule = (function () {
  "use strict";

  const endTurn = function () {
    if (square1.innerhtml == "X") {
      return;
    } else if (square2.innerHTML == "X") {
      return;
    } else if (square3.innerHTML == "X") {
      return;
    } else if (square4.innerHTML == "X") {
      return;
    } else if (square5.innerHTML == "X") {
      return;
    } else if (square6.innerHTML == "X") {
      return;
    } else if (square7.innerHTML == "X") {
      return;
    } else if (square8.innerHTML == "X") {
      return;
    } else if (square9.innerHTML == "X") {
      return;
    } else if (square1.innerHTML == "O") {
      return;
    } else if (square2.innerHTML == "O") {
      return;
    } else if (square3.innerHTML == "O") {
      return;
    } else if (square4.innerHTML == "O") {
      return;
    } else if (square5.innerHTML == "O") {
      return;
    } else if (square6.innerHTML == "O") {
      return;
    } else if (square7.innerHTML == "O") {
      return;
    } else if (square8.innerhtml == "O") {
      return;
    } else if (square9.innerHTML == "O") {
      return;
    } else {
    }
  };

  const player1Turn = function () {
    square1.addEventListener("click", function () {
      square1.innerHTML = "X";
      gameBoard.setSquare(1, player1.marker);
      endTurn();
    });
    square2.addEventListener("click", function () {
      square2.innerHTML = "X";
      gameBoard.setSquare(2, player1.marker);
      endTurn();
    });
    square3.addEventListener("click", function () {
      square3.innerHTML = "X";
      gameBoard.setSquare(3, player1.marker);
      endTurn();
    });
    square4.addEventListener("click", function () {
      square4.innerHTML = "X";
      gameBoard.setSquare(4, player1.marker);
      endTurn();
    });
    square5.addEventListener("click", function () {
      square5.innerHTML = "X";
      gameBoard.setSquare(5, player1.marker);
      endTurn();
    });
    square6.addEventListener("click", function () {
      square6.innerHTML = "X";
      gameBoard.setSquare(6, player1.marker);
      endTurn();
    });
    square7.addEventListener("click", function () {
      square7.innerHTML = "X";
      gameBoard.setSquare(7, player1.marker);
      endTurn();
    });
    square8.addEventListener("click", function () {
      square8.innerHTML = "X";
      gameBoard.setSquare(8, player1.marker);
      endTurn();
    });
    square9.addEventListener("click", function () {
      square9.innerHTML = "X";
      gameBoard.setSquare(9, player1.marker);
      endTurn();
    });
  };

  const player2Turn = function () {
    square1.addEventListener("click", function () {
      square1.innerHTML = "O";
      gameBoard.setSquare(1, player2.marker);
      endTurn();
    });
    square2.addEventListener("click", function () {
      square2.innerHTML = "O";
      gameBoard.setSquare(2, player2.marker);
      endTurn();
    });
    square3.addEventListener("click", function () {
      square3.innerHTML = "O";
      gameBoard.setSquare(3, player2.marker);
      endTurn();
    });
    square4.addEventListener("click", function () {
      square4.innerHTML = "O";
      gameBoard.setSquare(4, player2.marker);
      endTurn();
    });
    square5.addEventListener("click", function () {
      square5.innerHTML = "O";
      gameBoard.setSquare(5, player2.marker);
      endTurn();
    });
    square6.addEventListener("click", function () {
      square6.innerHTML = "O";
      gameBoard.setSquare(6, player2.marker);
      endTurn();
    });
    square7.addEventListener("click", function () {
      square7.innerHTML = "O";
      gameBoard.setSquare(7, player2.marker);
      endTurn();
    });
    square8.addEventListener("click", function () {
      square8.innerHTML = "O";
      gameBoard.setSquare(8, player2.marker);
      endTurn();
    });
    square9.addEventListener("click", function () {
      square9.innerHTML = "O";
      gameBoard.setSquare(9, player2.marker);
      endTurn();
    });
  };
  return {
    endTurn,
    player1Turn,
    player2Turn,
  };
})();

function game() {
  gameBoard.board;
  gameBoard.setSquare();
  gameModule.endTurn();
  gameModule.player1Turn();
  gameModule.player2Turn();
}

game();
