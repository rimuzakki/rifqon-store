import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="header-about">
          <Container>
            <Row>
              <Col xs={10} className="mx-auto">
                <img src="img/about.jpg" className="img-fluid" alt="about" />
              </Col>
            </Row>
          </Container>
        </section>

        <section id="aboutus" className="py-4 py-md-5">
          <Container>
            <Row>
              <Col xs={12} md={5}>
                <div class="desc">
                  <h1>ROLARALA</h1>
                  <p>Rolarala Official - Local Brand Ikat Troso</p>
                </div>
              </Col>
              <Col xs={12} md={7}>
                <div class="desc">
                  <p>
                    Rolarala lahir menjadi sesuatu yang baru dan berbeda, kami
                    mengoptimalkan nilai keindahan yang terkandung dalam Ikat
                    Troso menjadi produk fashion tidak hanya oleh fungsi, tetapi
                    juga upaya melestarikan warisan budaya Indonesia.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum..
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="py-5">
                <img
                  src="img/about-1.jpg"
                  className="img-fluid"
                  alt="about-tenun"
                />
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={{ span: 7, offset: 5 }} className="py-3">
                <div class="desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum..
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="py-4 py-md-5">
              <Col xs={12} md={5}>
                <div class="desc">
                  <h1>MEET THE FOUNDER</h1>
                  <p>Rolarala Official - Local Brand Ikat Troso</p>
                </div>
              </Col>
              <Col xs={12} md={7}>
                <div class="desc">
                  <p>
                    Rolarala lahir menjadi sesuatu yang baru dan berbeda, kami
                    mengoptimalkan nilai keindahan yang terkandung dalam Ikat
                    Troso menjadi produk fashion tidak hanya oleh fungsi, tetapi
                    juga upaya melestarikan warisan budaya Indonesia.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="py-3">
              <Col xs={12} md={5}>
                <img
                  src="img/founder.jpg"
                  className="img-fluid pb-3"
                  alt="founder"
                />
              </Col>
              <Col xs={12} md={7}>
                <div class="desc">
                  <h2>
                    <strong>Analita Hanata P.</strong>
                  </h2>
                  <p>Founder rolarala</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Newsletter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default AboutUs;
