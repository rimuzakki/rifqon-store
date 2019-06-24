import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { Container, Row, Col, Button } from "react-bootstrap";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <Container className="py-5">
              {/* title */}
              <Row>
                <Col
                  xs={10}
                  className="mx-auto text-center text-slanted text-blue my-5"
                >
                  <h1>{title}</h1>
                </Col>
              </Row>
              {/* end title */}
              {/* product info */}
              <Row>
                <Col xs={10} md={6} className="mx-auto my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="product" />
                </Col>
                {/* product text */}
                <Col xs={10} md={6} className="mx-auto my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>

                  {/* Buttons */}
                  <div>
                    <Link to="/">
                      <Button variant="link">Back to product</Button>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </Col>
              </Row>
            </Container>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
