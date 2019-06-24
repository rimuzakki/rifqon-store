import React, { Component } from "react";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Typed from "react-typed";
import Tilt from "react-tilt";

class Home extends Component {
  render() {
    return (
      <section id="intro">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div className="text-intro">
                <h1>Local brand Ikat Troso</h1>

                <Typed
                  className="typewrite"
                  strings={["OFFICIAL", "SHOW CASE", "PRODUCTS"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />

                <p>
                  Rolarala a project to revive the beauty of ikat Troso Jepara
                  as Indonesia's cultural heritage into a fashion product which
                  can compete in a global world.
                </p>
                <Link to="/product">
                  <ButtonContainer className="my-3">Shop</ButtonContainer>
                </Link>
              </div>
            </Col>

            <Col xs={12} md={8} />
          </Row>
        </Container>
      </section>
    );
  }
}

export default Home;
