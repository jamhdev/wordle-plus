import React, { useEffect, useState } from "react";

export default function useWordDictionary(word) {
  const [wordInfo, setWordInfo] = useState(null);
  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        setWordInfo(data);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("There was an error fetching word details!", error);
        }
      });

    return () => {
      controller.abort();
    };
  }, [word]);

  return wordInfo;
}
