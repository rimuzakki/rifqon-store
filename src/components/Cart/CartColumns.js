import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function CartColumns() {
  return (
    <Container className="text-center d-none d-lg-block">
      <Row>
        <Col xs={10} lg={1} className="mx-auto">
          <p className="text-uppercase font-weight-bold">remove</p>
        </Col>
        <Col xs={10} lg={2} className="mx-auto">
          <p className="text-uppercase font-weight-bold">products</p>
        </Col>
        <Col xs={10} lg={3} className="mx-auto">
          <p className="text-uppercase font-weight-bold">name of product</p>
        </Col>
        <Col xs={10} lg={2} className="mx-auto">
          <p className="text-uppercase font-weight-bold">price</p>
        </Col>
        <Col xs={10} lg={2} className="mx-auto">
          <p className="text-uppercase font-weight-bold">quantity</p>
        </Col>
        <Col xs={10} lg={2} className="mx-auto">
          <p className="text-uppercase font-weight-bold">total</p>
        </Col>
      </Row>
    </Container>
  );
}

export default CartColumns;
