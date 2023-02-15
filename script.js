var board = ["", "", "", "", "", "", "", "", ""];
var turn = "X";

document.getElementById("chooseX").addEventListener("click", function() {
  turn = "X";
});

document.getElementById("chooseO").addEventListener("click", function() {
  turn = "O";
});

for (var i = 0; i < 9; i++) {
  document.getElementById("cell-" + i).addEventListener("click", function(event) {
    if (event.target.innerHTML === "") {
      event.target.innerHTML = turn;
      board[event.target.id.split("-")[1]] = turn;
      turn = (turn === "X") ? "O" : "X";
    }
  });
}
