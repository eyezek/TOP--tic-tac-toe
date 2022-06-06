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

let gameBoard = {
  board: [
    square1,
    square2,
    square3,
    square4,
    square5,
    square6,
    square7,
    square8,
    square9,
  ],
};

let player1 = {
  marker: "X",
};

let player2 = {
  marker: "O",
};

function player1Turn() {
  square1.addEventListener("click", function () {
    square1.innerHTML = "X";
  });
  square2.addEventListener("click", function () {
    square2.innerHTML = "X";
  });
  square3.addEventListener("click", function () {
    square3.innerHTML = "X";
  });
  square4.addEventListener("click", function () {
    square4.innerHTML = "X";
  });
  square5.addEventListener("click", function () {
    square5.innerHTML = "X";
  });
  square6.addEventListener("click", function () {
    square6.innerHTML = "X";
  });
  square7.addEventListener("click", function () {
    square7.innerHTML = "X";
  });
  square8.addEventListener("click", function () {
    square8.innerHTML = "X";
  });
  square9.addEventListener("click", function () {
    square9.innerHTML = "X";
  });
}

function player2Turn() {
  square1.addEventListener("click", function () {
    square1.innerHTML = "O";
  });
  square2.addEventListener("click", function () {
    square2.innerHTML = "O";
  });
  square3.addEventListener("click", function () {
    square3.innerHTML = "O";
  });
  square4.addEventListener("click", function () {
    square4.innerHTML = "O";
  });
  square5.addEventListener("click", function () {
    square5.innerHTML = "O";
  });
  square6.addEventListener("click", function () {
    square6.innerHTML = "O";
  });
  square7.addEventListener("click", function () {
    square7.innerHTML = "O";
  });
  square8.addEventListener("click", function () {
    square8.innerHTML = "O";
  });
  square9.addEventListener("click", function () {
    square9.innerHTML = "O";
  });
}

player1Turn();

function game() {}

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
