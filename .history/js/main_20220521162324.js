import {
  getCellElementList,
  getCurrentTurnElement,
  getGameStatusElement,
  getReplayButtonElm,
  getCellElementAtIdx,
} from './selectors.js';
import { TURN, GAME_STATUS, CELL_VALUE } from './constants.js';
import { checkGameStatus } from './utils.js';

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
function updateGameStatus(newGameStatus) {
  gameStatus = newGameStatus;
  const gameStatusElm = getGameStatusElement();
  if (gameStatusElm) gameStatusElm.textContent = newGameStatus;
}

function showReplayButton() {
  const replayButton = getReplayButtonElm();
  if (replayButton) replayButton.classList.add('show');
}

function highlightWinCells(winPositions) {
  if (!Array.isArray(winPositions) || winPositions.length !== 3) {
    throw new Error('invalid win positions');
  }

  for (const position of winPositions) {
    const cell = getCellElementAtIdx(position);
  }
}
function handleCellClick(liElement, index) {
  const isClicked =
    liElement.classList.contains(TURN.CROSS) || liElement.classList.contains(TURN.CIRCLE);
  const isEndGame = gameStatus !== GAME_STATUS.PLAYING;
  if (isClicked || isEndGame) return;
  //set selected cell
  liElement.classList.add(currentTurn);
  //update cell values
  cellValues[index] = currentTurn === TURN.CIRCLE ? CELL_VALUE.CIRCLE : CELL_VALUE.CROSS;

  //toggle turn
  toggleTurn();

  const game = checkGameStatus(cellValues);
  switch (game.status) {
    case GAME_STATUS.ENDED: {
      //update game status
      updateGameStatus(game.status);
      // show replay button
      showReplayButton();
      break;
    }
    case GAME_STATUS.X_WIN:
    case GAME_STATUS.ENDED: {
      //update game status
      updateGameStatus(game.status);
      // show replay button
      showReplayButton();
      //highlight wins cells
      highlightWinCells(game.winPositions);
      break;
    }
    default:
    //playing
  }
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
