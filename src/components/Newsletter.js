import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class Newsletter extends Component {
  render() {
    return (
      <section id="newsletter" className="py-4 py-md-5">
        <Container>
          <Row>
            <Col xs={10} md={6} className="mx-auto">
              <div class="desc text-center">
                <h1>Newsletter</h1>
                <p>Subscribe to the latest stories and promotions</p>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter your email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Button className="btn btn-default" type="submit">
                    Subscribe Now
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Newsletter;
