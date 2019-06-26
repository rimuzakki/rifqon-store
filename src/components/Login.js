import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

class Login extends Component {
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
                <h3>Please log in to your account</h3>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6} className="mx-auto">
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={e => this.handleSubmit(e)}
                >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button variant="link" className="px-0">
                      Forgot Password
                    </Button>
                  </Form.Group>
                  <Button className="btn btn-default" type="submit">
                    Login
                  </Button>
                </Form>
                <p className="pt-3 pb-2">Don't have rolarala account yet?</p>
                <Link to="/signup">Sign Up Now</Link>
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

export default Login;
