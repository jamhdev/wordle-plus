import React from "react";
import useWordDictionary from "../hooks/useWordDictionary";

export default function WordInfo({ word }) {
  const wordInfo = useWordDictionary(word);

  let definition = wordInfo?.[0]?.meanings?.[0]?.definitions?.[0]?.definition;
  let example = wordInfo?.[0]?.meanings?.[0]?.definitions?.[0]?.example;
  let partOfSpeech = wordInfo?.[0]?.meanings?.[0]?.partOfSpeech;
  let synonyms = wordInfo?.[0]?.meanings?.[0]?.definitions?.[0]?.synonyms;
  let antonyms = wordInfo?.[0]?.meanings?.[0]?.definitions?.[0]?.antonyms;
  let origin = wordInfo?.[0]?.origin;
  let phoneticPronunctiation = wordInfo?.[0]?.phonetic;
  let audioPronunciation = wordInfo?.[0]?.phonetics[0]?.audio;

  return (
    <>
      {wordInfo !== null ? (
        <div className="word-info-main-container">
          <h3>Word Info</h3>
          {definition != undefined && (
            <div className="word-info-section">
              <span>Definition: </span>
              {definition}
            </div>
          )}

          {example != undefined && (
            <div className="word-info-section">
              <span>Example: </span>
              {example}
            </div>
          )}

          {partOfSpeech != undefined && (
            <div className="word-info-section">
              <span>Part of Speech: </span>
              {partOfSpeech}
            </div>
          )}

          {synonyms != undefined && synonyms.length >= 1 && (
            <div className="word-info-section">
              <span>Synonyms: </span>
              {synonyms.join(" , ")}
            </div>
          )}

          {antonyms != undefined && antonyms.length >= 1 && (
            <div className="word-info-section">
              <span>Antonyms: </span>
              {antonyms.join(" , ")}
            </div>
          )}

          {origin != undefined && (
            <div className="word-info-section">
              <span>Origin: </span>
              {origin}
            </div>
          )}

          {phoneticPronunctiation != null && (
            <div className="word-info-section">
              <span>Phonetic pronunctiation: </span>
              {phoneticPronunctiation}
            </div>
          )}

          {audioPronunciation != null &&
            audioPronunciation != undefined &&
            audioPronunciation != "" && (
              <div className="word-info-section">
                <span>Audio Pronunciation: </span>
                <audio src={audioPronunciation} controls></audio>
              </div>
            )}
        </div>
      ) : (
        <div>No word info found</div>
      )}
    </>
  );
}
