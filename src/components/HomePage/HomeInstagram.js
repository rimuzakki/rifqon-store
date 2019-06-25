import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class HomeInstagram extends Component {
  render() {
    return (
      <section id="home-instagram" className="py-4 py-md-5">
        <Container fluid="true">
          <Row>
            <Col>
              <div className="desc text-center pb-3">
                <h1 className="text-capitalize">Instagram</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10} md className="mx-auto">
              <img
                className="img-fluid"
                src="img/Cave-Blouse.jpg"
                alt="instagram"
              />
            </Col>
            <Col xs={10} md className="mx-auto">
              <img
                className="img-fluid"
                src="img/Island-blouse.jpg"
                alt="instagram"
              />
            </Col>
            <Col xs={10} md className="mx-auto">
              <img
                className="img-fluid"
                src="img/Wonder-Blouse.jpg"
                alt="instagram"
              />
            </Col>
            <Col xs={10} md className="mx-auto">
              <img
                className="img-fluid"
                src="img/Grassly1.jpg"
                alt="instagram"
              />
            </Col>
            <Col xs={10} md className="mx-auto">
              <img
                className="img-fluid"
                src="img/Grassly2.jpg"
                alt="instagram"
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default HomeInstagram;
