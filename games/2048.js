document.addEventListener("DOMContentLoaded", () => {
  const gridSize = 4;
  let board = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));

  function initializeBoard() {
    addRandomTile();
    addRandomTile();
    renderBoard();
  }

  function renderBoard() {
    const gameBoardElement = document.getElementById("game-board");
    gameBoardElement.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const tileValue = board[i][j];
        const tileElement = document.createElement("div");
        tileElement.className = `tile tile-${tileValue}`;
        tileElement.textContent = tileValue !== 0 ? tileValue : "";
        gameBoardElement.appendChild(tileElement);
      }
    }
  }

  function addRandomTile() {
    const emptyTiles = [];
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        if (board[i][j] === 0) {
          emptyTiles.push({ row: i, col: j });
        }
      }
    }

    if (emptyTiles.length > 0) {
      const { row, col } =
        emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
      board[row][col] = Math.random() < 0.9 ? 2 : 4;
    }
  }

  function handleKeyPress(event) {
    let moved = false;

    switch (event.key) {
      case "ArrowUp":
        moved = moveUp();
        break;
      case "ArrowDown":
        moved = moveDown();
        break;
      case "ArrowLeft":
        moved = moveLeft();
        break;
      case "ArrowRight":
        moved = moveRight();
        break;
    }

    if (moved) {
      addRandomTile();
      renderBoard();
      // Add logic to check for game over or victory
    }
  }

  function moveUp() {
    let moved = false;

    for (let col = 0; col < gridSize; col++) {
      for (let row = 1; row < gridSize; row++) {
        if (board[row][col] !== 0) {
          let currentRow = row;
          while (currentRow > 0 && board[currentRow - 1][col] === 0) {
            board[currentRow - 1][col] = board[currentRow][col];
            board[currentRow][col] = 0;
            currentRow--;
            moved = true;
          }

          if (
            currentRow > 0 &&
            board[currentRow - 1][col] === board[currentRow][col]
          ) {
            board[currentRow - 1][col] *= 2;
            board[currentRow][col] = 0;
            moved = true;
          }
        }
      }
    }

    return moved;
  }

  function moveDown() {
    let moved = false;

    for (let col = 0; col < gridSize; col++) {
      for (let row = gridSize - 2; row >= 0; row--) {
        if (board[row][col] !== 0) {
          let currentRow = row;
          while (
            currentRow < gridSize - 1 &&
            board[currentRow + 1][col] === 0
          ) {
            board[currentRow + 1][col] = board[currentRow][col];
            board[currentRow][col] = 0;
            currentRow++;
            moved = true;
          }

          if (
            currentRow < gridSize - 1 &&
            board[currentRow + 1][col] === board[currentRow][col]
          ) {
            board[currentRow + 1][col] *= 2;
            board[currentRow][col] = 0;
            moved = true;
          }
        }
      }
    }

    return moved;
  }

  function moveLeft() {
    let moved = false;

    for (let row = 0; row < gridSize; row++) {
      for (let col = 1; col < gridSize; col++) {
        if (board[row][col] !== 0) {
          let currentCol = col;
          while (currentCol > 0 && board[row][currentCol - 1] === 0) {
            board[row][currentCol - 1] = board[row][currentCol];
            board[row][currentCol] = 0;
            currentCol--;
            moved = true;
          }

          if (
            currentCol > 0 &&
            board[row][currentCol - 1] === board[row][currentCol]
          ) {
            board[row][currentCol - 1] *= 2;
            board[row][currentCol] = 0;
            moved = true;
          }
        }
      }
    }

    return moved;
  }

  function moveRight() {
    let moved = false;

    for (let row = 0; row < gridSize; row++) {
      for (let col = gridSize - 2; col >= 0; col--) {
        if (board[row][col] !== 0) {
          let currentCol = col;
          while (
            currentCol < gridSize - 1 &&
            board[row][currentCol + 1] === 0
          ) {
            board[row][currentCol + 1] = board[row][currentCol];
            board[row][currentCol] = 0;
            currentCol++;
            moved = true;
          }

          if (
            currentCol < gridSize - 1 &&
            board[row][currentCol + 1] === board[row][currentCol]
          ) {
            board[row][currentCol + 1] *= 2;
            board[row][currentCol] = 0;
            moved = true;
          }
        }
      }
    }

    return moved;
  }

  document.addEventListener("keydown", handleKeyPress);

  initializeBoard();
});
