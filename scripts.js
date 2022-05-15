const queenPiece = document.getElementById("queen-black");
const pawnf2 = document.getElementById("pawnf2");
const pawng2 = document.getElementById("pawng2");
const btn = document.getElementById("button");
btn.addEventListener("click", foolsMate);

function foolsMate() {
  pawnf2.classList.add("pawn--f2");
  if (pawnf2.getAttribute("listener") !== true) {
    pawnf2.addEventListener("click", function () {
      document.getElementById("f3").classList.add("f3--try");
    });
  }
}
