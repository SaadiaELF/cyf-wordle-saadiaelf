import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [letter, setLetter] = useState("");
  const [word, setWord] = useState([]);
  const [click, setClick] = useState(0);
  const [wordGrid, setWordGrid] = useState([]);

  useEffect(() => {
    letter && word.length < 5 && setWord(word.concat(letter));
    word.length >= 5 && setWord([]);
  }, [click]);

  useEffect(() => {
    click === 5 && wordGrid.length < 6 && setWordGrid([...wordGrid, word]);
  }, [word]);

  console.log("word:", word);
  console.log("grid:", wordGrid);
  console.log(click);

  function getLetter(e) {
    setLetter(e.target.value);
    word.length < 5 ? setClick(() => click + 1) : setClick(0);
  }

  return (
    <div className="App">
      <Header />
      <Board wordGrid={wordGrid} letter={letter} word={word} />
      <Keyboard onclick={getLetter} />
    </div>
  );
}

export default App;
