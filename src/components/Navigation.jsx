import React, { useState } from "react";

export default function Navigation({ solution }) {
  const [cheat, setCheat] = useState(null);
  return (
    <>
      <div className="nav-container">
        <div className="title">
          <h2>Wordle</h2>
        </div>
        <button
          onClick={() => {
            if (cheat === null) {
              setCheat(true);
            } else {
              setCheat(!cheat);
            }
          }}
          className="cheat-btn"
        >
          SOLUTION
        </button>
        {cheat && cheat !== null && (
          <div className="solution-nav">
            <h1 className="cheat">{solution}</h1>
          </div>
        )}
        {!cheat && cheat !== null && (
          <div className="solution-nav">
            <h1 className="no-cheat">{solution}</h1>
          </div>
        )}
      </div>
    </>
  );
}
