import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  let [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handleSelectSquare(rowIndex, colIndex, symbol) {
    setGameBoard((prevGameBoard) => {
      let updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
      onSelectSquare();
      return updatedGameBoard;
    });
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => {
                    handleSelectSquare(rowIndex, colIndex, activePlayerSymbol);
                  }}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
