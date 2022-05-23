import { getCellElementList, getCurrentTurnElement } from './selectors.js';
import { TURN, GAME_STATUS } from './constants.js';

/**
 * Global variables
 */
let currentTurn = TURN.CROSS;
let gameStatus = GAME_STATUS.PLAYING;
let cellValues = new Array(9).fill('');

function toggleTurn() {
  currentTurn = currentTurn === TURN.CIRCLE ? TURN.CROSS : TURN.CIRCLE;
  const currentTurnElm = getCurrentTurnElement();
  if (currentTurnElm) {
    currentTurnElm.classList.remove(TURN.CROSS, TURN.CIRCLE);
    currentTurnElm.classList.add(currentTurn);
  }
}

function handleCellClick(liElement, index) {
  const isClicked =
    liElement.classList.contains(TURN.CROSS) || liElement.classList.contains(TURN.CIRCLE);
  const isEndGame = gameStatus !== GAME_STATUS.PLAYING;
  if (isClicked) return;
  //set selected cell
  liElement.classList.add(currentTurn);
  //update cell values

  //toggle turn
  toggleTurn();
}

function innitCellElementList() {
  const cellElmLists = getCellElementList();
  cellElmLists.forEach((cell, idx) => {
    cell.addEventListener('click', () => handleCellClick(cell, idx));
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
