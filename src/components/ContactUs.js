import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

class ContactUs extends Component {
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
        <section id="header-contact">
          <Container>
            <Row>
              <Col xs={10} className="mx-auto">
                <img src="img/about.jpg" className="img-fluid" alt="about" />
              </Col>
            </Row>
          </Container>
        </section>

        <section id="contact-detail" className="py-4 py-md-5">
          <Container>
            <Row>
              <Col xs={12} md={5}>
                <div class="desc">
                  <h1>KONTAK KAMI</h1>
                  <p>Rolarala Official - Local Brand Ikat Troso</p>
                </div>
              </Col>
              <Col xs={12} md={7}>
                <div class="desc">
                  <p>
                    Jika anda memliki pertanyaan mengenai layanan dan produk
                    kami atau hanya sekedar ingin menyapa tim kami, anda dapat
                    menggunakan formulir dibawah ini untuk menghubungi kami.
                  </p>
                  <p>
                    Jadi silahkan ajukan pertanyaan anda dan kami akan kembali
                    kepada anda sesegera mungkin.
                  </p>
                </div>
                <div class="desc detail-kontak">
                  <strong>Rolarala Office</strong>
                  <p>Jl. Kanayakan Dalam No. 28 (Dago)</p>
                  <p>Bandung 40135, Jawa Barat, Indonesia</p>
                  <p>Phone: (+62) 22 - 20451023</p>
                  <p>Whatsapp: 08999-580-888</p>
                  <strong>General Question</strong>
                  <p>mail@rolarala.com</p>
                  <strong>Claim & Warranty</strong>
                  <p>order@rolarala.com</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="form-contact" className="pt-4 pb-5">
          <Container>
            <Form
              noValidate
              validated={validated}
              onSubmit={e => this.handleSubmit(e)}
            >
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFullName">
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Full Name"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control required as="textarea" rows="4" />
                </Form.Group>
              </Form.Row>
              <Row>
                <Col xs={{ span: 4, offset: 8 }}>
                  <Button className="btn btn-default btn-block" type="submit">
                    Send
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </section>

        <Newsletter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ContactUs;
