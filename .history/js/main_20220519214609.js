import { getCellElementList, getCurrentTurnElement } from './selectors.js';
import { TURN } from './constants.js';

/**
 * Global variables
 */
let currentTurn = TURN.CROSS;
let isGameEnded = false;
let cellValues = new Array(9).fill('');

function handleCellClick(liElement, index) {
  liElement.classList.add(currentTurn);
}

function innitCellElementList() {
  const cellElmLists = getCellElementList();
  cellElmLists.forEach((cell, idx) => {
    cell.addEventListener('click', () => {
      handleCellClick(cell, idx);
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
  innitCellElementList();
})();
