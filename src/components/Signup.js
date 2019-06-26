import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

class Signup extends Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

  render() {
    const { validated } = this.state;
    return (
      <React.Fragment>
        <section id="login-form" className="py-4 py-md-5">
          <Container>
            <Row>
              <Col xs={10} className="mx-auto text-center pb-3 pb-md-5">
                <h3>Register new account now</h3>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6} className="mx-auto">
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={e => this.handleSubmit(e)}
                >
                  <Form.Group controlId="formBasicFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Full Name"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="Email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password rolarala"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Confirm Password rolarala"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                    />
                  </Form.Group>

                  <Button className="btn btn-default" type="submit">
                    Signup
                  </Button>
                </Form>
                <p className="pt-3 pb-2">Already have rolarala account?</p>
                <Link to="/login">Please Login</Link>
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

export default Signup;
