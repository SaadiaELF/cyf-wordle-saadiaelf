import React from "react";
import { Container, Button } from "reactstrap";

const BoardCol = ({ onclick }) => {
  let letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <Container className="keyboard d-flex flex-row flex-wrap justify-content-center">
      {letters.map((letter, i) => (
        <Button
          className="m-2"
          size="lg"
          key={i}
          value={letter}
          onClick={onclick}
          outline
        >
          {letter}
        </Button>
      ))}
    </Container>
  );
};

export default BoardCol;
