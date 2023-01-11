import React from "react";
import { Row } from "reactstrap";
import BoardCol from "./BoardCol";

const BoardRow = () => {
  return (
    <Row className="board-row m-auto">
      <BoardCol />
      <BoardCol />
      <BoardCol />
      <BoardCol />
      <BoardCol />
    </Row>
  );
};

export default BoardRow;
