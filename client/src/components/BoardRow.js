import React from "react";
import { Row } from "reactstrap";
import BoardCol from "./BoardCol";

const BoardRow = ({ word }) => {
  return (
    <Row className="board-row m-auto">
      {word &&
        word.length > 0 &&
        word.map((letter, i) => <BoardCol key={i} letter={letter} />)}
    </Row>
  );
};

export default BoardRow;
