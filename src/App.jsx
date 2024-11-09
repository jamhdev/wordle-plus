import "./index.css";
import dictionary from "../data/dictionary.json";
import words from "../data/targetWords.json";
import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import Navigation from "./components/Navigation";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length - 1);
    setSolution(words[randomIndex]);
  }, []);
  return (
    <>
      <Navigation solution={solution} />
      {solution && <Wordle solution={solution} dictionary={dictionary} />}
    </>
  );
}

export default App;
