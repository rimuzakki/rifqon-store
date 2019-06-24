import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import { Container, Row } from "react-bootstrap";

class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <Container>
            <Title name="our" title="products" />

            <Row>
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
