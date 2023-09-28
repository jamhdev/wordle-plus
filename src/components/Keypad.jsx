import React, { useEffect, useState } from "react";
import keypadLetters from "/data/keypadLetters.json";

export default function Keypad({ usedKeys, isCorrect, handleKeydownKeypad }) {
  return (
    <>
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fillRule="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7427 8.46448L19.1569 9.87869L17.0356 12L19.157 14.1214L17.7428 15.5356L15.6214 13.4142L13.5 15.5355L12.0858 14.1213L14.2072 12L12.0859 9.87878L13.5002 8.46457L15.6214 10.5858L17.7427 8.46448Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.58579 19L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L8.58579 5H22.5857V19H8.58579ZM9.41421 7L4.41421 12L9.41421 17H20.5857V7H9.41421Z"
                  fill="currentColor"
                />
              </svg>
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fillRule="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7427 8.46448L19.1569 9.87869L17.0356 12L19.157 14.1214L17.7428 15.5356L15.6214 13.4142L13.5 15.5355L12.0858 14.1213L14.2072 12L12.0859 9.87878L13.5002 8.46457L15.6214 10.5858L17.7427 8.46448Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.58579 19L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L8.58579 5H22.5857V19H8.58579ZM9.41421 7L4.41421 12L9.41421 17H20.5857V7H9.41421Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>{" "}
        </>
      )}
    </>
  );
}
