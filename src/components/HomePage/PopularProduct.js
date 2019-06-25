import React, { Component } from "react";
import Product from "../Product";
import { ProductConsumer } from "../../context";
import { ButtonContainer } from "../Button";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

class PopularProduct extends Component {
  render() {
    return (
      <section id="home-product" className="py-4 py-md-5">
        <Container>
          <Row className="py-3">
            <Col xs={12} md={5}>
              <div class="desc">
                <h1 class="text-uppercase">Popular Products</h1>
                <p>Persembahan karya terbaik kami</p>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div class="desc">
                <p>
                  Rolarala lahir menjadi sesuatu yang baru dan berbeda. Kami
                  mengoptimalkan nilai keindahan yang terkandung dalam Ikat
                  Troso menjadi produk fashion tidak hanya oleh fungsi, tetapi
                  juga upaya untuk melestarikan warisan budaya Indonesia.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="py-4 py-md-5">
            <ProductConsumer>
              {value => {
                return value.popularProduct.map(product => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </Row>
          <Row>
            <Col xs={12} className="text-center">
              <Link to="/product">
                <ButtonContainer>See more products </ButtonContainer>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default PopularProduct;
