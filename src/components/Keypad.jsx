import React, { useEffect, useState } from "react";
import keypadLetters from "/data/keypadLetters.json";

export default function Keypad({ usedKeys, isCorrect, handleKeydownKeypad }) {
  /*const [letters, setLetters] = useState(null);
  useEffect(() => {
    setLetters(keypadLetters.letters);
  }, []);*/
  return (
    <>
      {/*
    <div className="keypad">
        {letters &&
          letters.map((object, index) => {
            const color = usedKeys[object.key];

            return (
              <div key={index} className={color}>
                {object.key}{" "}
              </div>
            );
          })}
        <div className="keypad-enter-button">ENTER</div>
        <div className="keypad-delete-button">DEL</div>
      </div>
    */}
      {!isCorrect && (
        <>
          <div className="keypad-row-1">
            <button
              className={`${usedKeys["q"]}`}
              onClick={() => {
                handleKeydownKeypad("q");
              }}
            >
              Q
            </button>
            <button
              className={`${usedKeys["w"]}`}
              onClick={() => {
                handleKeydownKeypad("w");
              }}
            >
              W
            </button>
            <button
              className={`${usedKeys["e"]}`}
              onClick={() => {
                handleKeydownKeypad("e");
              }}
            >
              E
            </button>
            <button
              className={`${usedKeys["r"]}`}
              onClick={() => {
                handleKeydownKeypad("r");
              }}
            >
              R
            </button>
            <button
              className={`${usedKeys["t"]}`}
              onClick={() => {
                handleKeydownKeypad("t");
              }}
            >
              T
            </button>
            <button
              className={`${usedKeys["y"]}`}
              onClick={() => {
                handleKeydownKeypad("y");
              }}
            >
              Y
            </button>
            <button
              className={`${usedKeys["u"]}`}
              onClick={() => {
                handleKeydownKeypad("u");
              }}
            >
              U
            </button>
            <button
              className={`${usedKeys["i"]}`}
              onClick={() => {
                handleKeydownKeypad("i");
              }}
            >
              I
            </button>
            <button
              className={`${usedKeys["o"]}`}
              onClick={() => {
                handleKeydownKeypad("o");
              }}
            >
              O
            </button>
            <button
              className={`${usedKeys["p"]}`}
              onClick={() => {
                handleKeydownKeypad("p");
              }}
            >
              P
            </button>
          </div>
          <div className="keypad-row-2">
            <button
              className={`${usedKeys["a"]}`}
              onClick={() => {
                handleKeydownKeypad("a");
              }}
            >
              A
            </button>
            <button
              className={`${usedKeys["s"]}`}
              onClick={() => {
                handleKeydownKeypad("s");
              }}
            >
              S
            </button>
            <button
              className={`${usedKeys["d"]}`}
              onClick={() => {
                handleKeydownKeypad("d");
              }}
            >
              D
            </button>
            <button
              className={`${usedKeys["f"]}`}
              onClick={() => {
                handleKeydownKeypad("f");
              }}
            >
              F
            </button>
            <button
              className={`${usedKeys["g"]}`}
              onClick={() => {
                handleKeydownKeypad("g");
              }}
            >
              G
            </button>
            <button
              className={`${usedKeys["h"]}`}
              onClick={() => {
                handleKeydownKeypad("h");
              }}
            >
              H
            </button>
            <button
              className={`${usedKeys["j"]}`}
              onClick={() => {
                handleKeydownKeypad("j");
              }}
            >
              J
            </button>
            <button
              className={`${usedKeys["k"]}`}
              onClick={() => {
                handleKeydownKeypad("k");
              }}
            >
              K
            </button>
            <button
              className={`${usedKeys["l"]}`}
              onClick={() => {
                handleKeydownKeypad("l");
              }}
            >
              L
            </button>
          </div>
          <div className="keypad-row-3">
            <button
              className="keypad-enter-button"
              onClick={() => {
                handleKeydownKeypad("Enter");
              }}
            >
              ENTER
            </button>
            <button
              className={`${usedKeys["z"]}`}
              onClick={() => {
                handleKeydownKeypad("z");
              }}
            >
              Z
            </button>
            <button
              className={`${usedKeys["x"]}`}
              onClick={() => {
                handleKeydownKeypad("x");
              }}
            >
              X
            </button>
            <button
              className={`${usedKeys["c"]}`}
              onClick={() => {
                handleKeydownKeypad("c");
              }}
            >
              C
            </button>
            <button
              className={`${usedKeys["v"]}`}
              onClick={() => {
                handleKeydownKeypad("v");
              }}
            >
              V
            </button>
            <button
              className={`${usedKeys["b"]}`}
              onClick={() => {
                handleKeydownKeypad("b");
              }}
            >
              B
            </button>
            <button
              className={`${usedKeys["n"]}`}
              onClick={() => {
                handleKeydownKeypad("n");
              }}
            >
              N
            </button>
            <button
              className={`${usedKeys["m"]}`}
              onClick={() => {
                handleKeydownKeypad("m");
              }}
            >
              M
            </button>
            <button
              className="keypad-delete-button"
              onClick={() => {
                handleKeydownKeypad("Backspace");
              }}
            >
              <img
                src="/images/backspace.svg"
                height={30}
                width={30}
                alt="DEL"
              />
            </button>
          </div>
        </>
      )}

      {isCorrect && (
        <>
          <div className="keypad-row-1">
            <button className={`${usedKeys["q"]}`}>Q</button>
            <button className={`${usedKeys["w"]}`}>W</button>
            <button className={`${usedKeys["e"]}`}>E</button>
            <button className={`${usedKeys["r"]}`}>R</button>
            <button className={`${usedKeys["t"]}`}>T</button>
            <button className={`${usedKeys["y"]}`}>Y</button>
            <button className={`${usedKeys["u"]}`}>U</button>
            <button className={`${usedKeys["i"]}`}>I</button>
            <button className={`${usedKeys["o"]}`}>O</button>
            <button className={`${usedKeys["p"]}`}>p</button>
          </div>
          <div className="keypad-row-2">
            <button className={`${usedKeys["a"]}`}>A</button>
            <button className={`${usedKeys["s"]}`}>S</button>
            <button className={`${usedKeys["d"]}`}>D</button>
            <button className={`${usedKeys["f"]}`}>F</button>
            <button className={`${usedKeys["g"]}`}>G</button>
            <button className={`${usedKeys["h"]}`}>H</button>
            <button className={`${usedKeys["j"]}`}>J</button>
            <button className={`${usedKeys["k"]}`}>K</button>
            <button className={`${usedKeys["l"]}`}>L</button>
          </div>
          <div className="keypad-row-3">
            <button className="keypad-enter-button">ENTER</button>
            <button className={`${usedKeys["z"]}`}>Z</button>
            <button className={`${usedKeys["x"]}`}>X</button>
            <button className={`${usedKeys["c"]}`}>C</button>
            <button className={`${usedKeys["v"]}`}>V</button>
            <button className={`${usedKeys["b"]}`}>B</button>
            <button className={`${usedKeys["n"]}`}>N</button>
            <button className={`${usedKeys["m"]}`}>M</button>
            <button className="keypad-delete-button">
              <img
                src="/images/backspace.svg"
                height={30}
                width={30}
                alt="DEL"
              />
            </button>
          </div>{" "}
        </>
      )}
    </>
  );
}
