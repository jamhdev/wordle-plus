import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";
import AlertModal from "./AlertModal";

export default function Wordle({ solution, dictionary }) {
  const {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    handleKeydown,
    usedKeys,
    activeAlert,
    alertMessage,
    setActiveAlert,
    handleKeydownKeypad,
  } = useWordle(solution, dictionary);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (activeAlert === true) {
      setTimeout(() => {
        setActiveAlert((prev) => !prev);
      }, 1500);
    }
  }, [activeAlert]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    if (isCorrect) {
      console.log("Congrats, you win!");
      window.removeEventListener("keydown", handleKeydown);

      setTimeout(() => {
        setShowModal(true);
      }, 1500);
    }

    if (turn > 5 && !isCorrect) {
      console.log("Sorry, you lose!");
      window.removeEventListener("keydown", handleKeydown);
      setTimeout(() => {
        setShowModal(true);
      }, 1500);
    }
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown, isCorrect, turn]);

  /*useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);*/

  return (
    <>
      {activeAlert && <AlertModal alertMessage={alertMessage} />}
      <div className="board-container">
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      </div>
      <div className="keypad-container">
        <Keypad
          usedKeys={usedKeys}
          isCorrect={isCorrect}
          handleKeydownKeypad={handleKeydownKeypad}
        />
      </div>
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </>
  );
}
