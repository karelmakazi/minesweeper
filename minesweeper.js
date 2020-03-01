document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 1,
      col: 1,
      isMine:false,
      hidden: true,
    },
    {
      row: 1,
      col: 2,
      isMine:false,
      hidden: true,
    },
    {
      row: 1,
      col: 3,
      isMine: false,
      hidden: true,
    },
    {
      row: 2,
      col: 1,
      isMine:false,
      hidden: true,
    },
    {
      row: 2,
      col: 2,
      isMine:true,
      hidden: true,
    },
    {
      row: 2,
      col: 3,
      isMine:false,
      hidden: true,
    },
    {
      row: 3,
      col: 1,
      isMine:false,
      hidden: true,
    },
    {
      row: 3,
      col: 2,
      isMine:false,
      hidden: true,
    },
    {
      row: 3,
      col: 3,
      isMine:true,
      hidden: true,
    },
  ]
}; 

function startGame () {
  // Don't remove this function call: it makes the game work!
  for(var i = 0; i < board.cells.length; i++){
    var currentCol = board.cells[i].col 
    var currentRow = board.cells[i].row
    var countResult = countSurroundingMines(currentRow, currentCol)
    board.cells[i].surroundingMines = countResult;
    }

  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (currentRow, currentCol) {
  var mineCount = 0;
  var checkReturn = lib.getSurroundingCells(currentRow, currentCol);
  
  for(var a = 0; a < checkReturn.length; a++){
    if(checkReturn[a].isMine === true){
      mineCount++;
    }
  }
  return mineCount;
}

