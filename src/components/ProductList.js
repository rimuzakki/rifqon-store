import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import { ProductConsumer } from "../context";
import { Container, Row, Col } from "react-bootstrap";

class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="header-product">
          <Container>
            <Row>
              <Col xs={12} md={7}>
                <div className="desc pt-4">
                  <h1>Koleksi Kami</h1>
                  <p>Persembahan karya terbaik kami</p>
                </div>
                <div className="desc">
                  <p>
                    Dengan nuansa dan sentuhan yang berbeda satu dengan lainnya,
                    setiap koleksi jam tangan Matoa memberikan pengalaman yang
                    berbeda bagi anda.
                    <br />
                    Setiap harinya kami akan menggabungkan teknik kerajinan
                    terbaik dan teknologi modern, dan untuk selalu memberikan
                    produk berkualitas kami selalu menjaga setiap proses
                    pembuatan jam Matoa mulai dari konsep hingga pengemasan
                  </p>
                </div>
              </Col>
              <Col xs={12} md={5}>
                <img
                  class="img-fluid"
                  src="img/couple.png"
                  alt="product-header"
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section id="product-list" className="py-5">
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
        </section>
        <Newsletter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProductList;
