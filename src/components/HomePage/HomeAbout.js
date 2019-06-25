import React, { Component } from "react";
import { ButtonContainer } from "../Button";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

class HomeAbout extends Component {
  render() {
    return (
      <section id="home-about" className="py-4 py-md-5">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="desc">
                <h1>
                  APA ITU <br /> ROLARALA?
                </h1>
                <p className="py-3">
                  Halo kami rolarala. Kami adalah merk lokal yang berfokus
                  Indonesia dengan Ikat Troso. Kami mengangkat keindahan Ikat
                  Troso menjadi produk fashion yang dapat bersaing dengan dunia
                  global dengan menyediakan inovasi desain baru.
                </p>
                <Link to="/">
                  <ButtonContainer className="my-3">
                    More about us
                  </ButtonContainer>
                </Link>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <img
                src="img/home-about.jpg"
                className="img-fluid"
                alt="home-about"
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default HomeAbout;
