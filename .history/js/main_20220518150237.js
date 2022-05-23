import { getCellElementList } from "./selectors";

/**
 * Global variables
 */
let currentTurn = "cross";
let isGameEnded = false;
let cellValues = new Array(9).fill("");

function handleCellClick() {
  console.log("abc");
}

function innitCellElementList() {
  const cellElmLists = getCellElementList();
  console.log(cellElmLists);
  cellElmLists.forEach((cell, idx) => {
    cell.addEventListener("click", () => {
      handleCellClick();
    });
  });
}
/**
 * TODOs
 *
 * 1. Bind click event for all cells
 * 2. On cell click, do the following:
 *    - Toggle current turn
 *    - Mark current turn to the selected cell
 *    - Check game state: win, ended or playing
 *    - If game is win, highlight win cells
 *    - Not allow to re-click the cell having value.
 *
 * 3. If game is win or ended --> show replay button.
 * 4. On replay button click --> reset game to play again.
 *
 */

// innitCellElementList();

(() => {
  console.log("abcs");
  //   innitCellElementList();
})();
