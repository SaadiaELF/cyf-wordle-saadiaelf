import React from "react";
import { Container } from "reactstrap";
import BoardRow from "./BoardRow";

const Board = ({ wordGrid }) => {
  return (
    <Container className="mb-4">
      {wordGrid.length > 0 &&
        wordGrid.map((word, i) => <BoardRow key={i} word={word} />)}
    </Container>
  );
};

export default Board;
