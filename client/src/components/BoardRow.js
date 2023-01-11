import React from "react";
import { Row, Col } from "reactstrap";

const BoardRow = () => {
  return (
    <Row className="board-row">
      <Col className="board-col bg-light border m-1">A</Col>
      <Col className="board-col bg-light border m-1">A</Col>
      <Col className="board-col bg-light border m-1">A</Col>
      <Col className="board-col bg-light border m-1">A</Col>
      <Col className="board-col bg-light border m-1">A</Col>
    </Row>
  );
};

export default BoardRow;
