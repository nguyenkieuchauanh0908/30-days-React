import Player from "./components/PlayerInfo.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";
function App() {
  let [playerActive, setPlayerActive] = useState("X");
  let [gameTurns, setGameTurns] = useState([]);
  function handleSelectSquare() {
    setPlayerActive((prevPlayerActive) =>
      prevPlayerActive === "X" ? "O" : "X"
    );
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={playerActive === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={playerActive === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={playerActive}
        />
      </div>
    </main>
  );
}

export default App;
