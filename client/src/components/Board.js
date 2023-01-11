import React from "react";
import { Container } from "reactstrap";
import BoardRow from "./BoardRow";

const Board = () => {
  return (
    <Container className="mb-4">
      <BoardRow />
      <BoardRow />
      <BoardRow />
      <BoardRow />
      <BoardRow />
      <BoardRow />
    </Container>
  );
};

export default Board;
