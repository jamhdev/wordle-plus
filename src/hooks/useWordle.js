import { useState } from "react";

const useWordle = (solution, dictionary) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({}); //{a: ''}
  const [activeAlert, setActiveAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "grey" };
    });

    //find any green letters
    formattedGuess.forEach((object, index) => {
      if (solutionArray[index] === object.key) {
        formattedGuess[index].color = "green";
        solutionArray[index] = null;
      }
    });
    //find any yellow letters
    formattedGuess.forEach((object, index) => {
      if (solutionArray.includes(object.key) && object.color !== "green") {
        formattedGuess[index].color = "yellow";
        solutionArray[solutionArray.indexOf(index.key)] = null;
      }
    });
    return formattedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGeusses = [...prevGuesses];
      newGeusses[turn] = formattedGuess;
      return newGeusses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setUsedKeys((prevUsedKeys) => {
      let newkeys = { ...prevUsedKeys };

      formattedGuess.forEach((letter) => {
        const currentColor = newkeys[letter.key];

        if (letter.color === "green") {
          newkeys[letter.key] = "green";
          return;
        }
        if (letter.color === "yellow" && letter.color !== "green") {
          newkeys[letter.key] = "yellow";
          return;
        }
        if (
          letter.color === "grey" &&
          letter.color !== "green" &&
          letter.color !== "yellow"
        ) {
          newkeys[letter.key] = "grey";
        }
      });

      return newkeys;
    });
    setCurrentGuess("");
  };
  const handleKeydownKeypad = (key) => {
    //console.log("INPUT: ", key);

    if (key === "Enter") {
      if (currentGuess.length !== 5) {
        setAlertMessage("Guess must have 5 letters!");
        setActiveAlert(true);
      } else if (turn > 5) {
        setAlertMessage("Out of turns!");
        setActiveAlert(true);
      } else if (history.includes(currentGuess)) {
        setAlertMessage("Guess must be unique!");
        setActiveAlert(true);
      } else if (!dictionary.includes(currentGuess)) {
        setAlertMessage("Not in word list");
        setActiveAlert(true);
      } else {
        {
          setActiveAlert(false);
          const formatted = formatGuess();
          addNewGuess(formatted);
        }
      }
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
    }

    if (/^[a-z]$/i.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev.concat(key));
      }
    }
  };
  const handleKeydown = ({ key }) => {
    //console.log("INPUT: ", key);

    if (key === "Enter") {
      if (currentGuess.length !== 5) {
        setAlertMessage("Guess must have 5 letters!");
        setActiveAlert(true);
      } else if (turn > 5) {
        setAlertMessage("Out of turns!");
        setActiveAlert(true);
      } else if (history.includes(currentGuess)) {
        setAlertMessage("Guess must be unique!");
        setActiveAlert(true);
      } else if (!dictionary.includes(currentGuess)) {
        setAlertMessage("Not in word list");
        setActiveAlert(true);
      } else {
        {
          setActiveAlert(false);
          const formatted = formatGuess();
          addNewGuess(formatted);
        }
      }
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
    }

    if (/^[a-z]$/i.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev.concat(key));
      }
    }
  };

  return {
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
  };
};

export default useWordle;
