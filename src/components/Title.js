import React from "react";
import { Row, Col } from "react-bootstrap";

function Title({ name, title }) {
  return (
    <Row>
      <Col xs={10} className="mx-auto my-2 text-center text-title mb-5">
        <h1 className="text-capitalize font-weight-bold">
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </Col>
    </Row>
  );
}

export default Title;
