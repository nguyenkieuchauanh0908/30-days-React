import { useState } from "react";
export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  let [isEditing, setIsEditing] = useState(false);
  let [name, setName] = useState(initialName);
  function handleOnChange(event) {
    setName(event.target.value);
  }
  return (
    <li className={isActive ? "active" : ""}>
      {!isEditing ? (
        <span className="player">
          <span className="player-name">
            {name}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
            Edit
          </button>
        </span>
      ) : (
        <span className="player">
          <input type="text" required value={name} onChange={handleOnChange} />
          <button
            onClick={() => {
              setIsEditing((isEditing) => !isEditing),
                onChangeName(symbol, name);
            }}
          >
            Save
          </button>
        </span>
      )}
    </li>
  );
}
