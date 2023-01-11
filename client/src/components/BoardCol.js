import React from "react";
import { Col } from "reactstrap";

const BoardCol = ({ letter }) => {
  return (
    <Col className="board-col bg-light border border-dark m-1">
      <div className="letter text-center">{letter}</div>
    </Col>
  );
};

export default BoardCol;
