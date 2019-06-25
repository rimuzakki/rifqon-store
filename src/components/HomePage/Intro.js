import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";
import { Container, Row, Col } from "react-bootstrap";
import Typed from "react-typed";

class Intro extends Component {
  render() {
    return (
      <section id="intro" className="py-4 py-md-5">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div className="py-4 py-md-5">
                <h1 className="mb-3">Local brand Ikat Troso</h1>

                <Typed
                  className="typewrite"
                  strings={["OFFICIAL", "SHOW CASE", "PRODUCTS"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />

                <p className="mt-4">
                  Rolarala a project to revive the beauty of ikat Troso Jepara
                  as Indonesia's cultural heritage into a fashion product which
                  can compete in a global world.
                </p>
                <Link to="/product">
                  <ButtonContainer className="my-3">Shop Now</ButtonContainer>
                </Link>
              </div>
            </Col>

            <Col xs={12} md={{ span: 7, offset: 1 }}>
              <img
                src="img/intro.jpg"
                className="img-fluid d-flex align-items-end justify-content-end"
                alt="intro"
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Intro;
