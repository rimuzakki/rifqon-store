import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ButtonContainer } from "../Button";

function EmptyCart() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={10} className="mx-auto text-center text-title">
          <h1>your cart is currently empty</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="mx-auto text-center py-5">
          <Link to="/product">
            <ButtonContainer>Back to shop</ButtonContainer>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default EmptyCart;
