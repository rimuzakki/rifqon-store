import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="footer" className="py-4 py-md-5">
          <Container>
            <Row>
              <Col xs={10} md={3} className="mx-auto text-center">
                <img
                  src="img/logo_white.png"
                  className="img-fluid pt-3 pb-5"
                  alt="footer-logo"
                />
              </Col>
              <Col xs={10} md={3} className="mx-auto pb-3">
                <div className="footer-content">
                  <p class="footer-title">
                    <strong>Hubungi kami</strong>
                  </p>
                  <p>Senin - Jumat : 08.00 - 21.00</p>
                  <p>Sabtu - Minggu : 08.00 - 17.00</p>

                  <p>Email : rolaralaproject@gmail.com</p>
                  <p>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f fa-lg" />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter fa-lg" />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram fa-lg" />
                    </a>
                  </p>
                </div>
              </Col>
              <Col xs={10} md={3} className="mx-auto pb-3">
                <div classaName="footer-content">
                  <p className="footer-title">
                    <strong>Rolarala</strong>
                  </p>
                  <p>Tentang Kami</p>
                  <p>
                    <Link to="/">Hubungi Kami</Link>
                  </p>
                  <p>Konfirmasi Pembayaran</p>
                  <p>Pengembalian Barang</p>
                </div>
              </Col>
              <Col xs={10} md={3} className="mx-auto pb-3">
                <div className="footer-content">
                  <p className="footer-title">
                    <strong>Lainnya</strong>
                  </p>
                  <p>Jurnal</p>
                  <p>Ketentuan Layanan</p>
                  <p>Kebijaka Privasi</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="copyright">
          <div className="copyright">©2019 Rolarala. All Rights Reserved.</div>
        </section>
      </React.Fragment>
    );
  }
}

export default Footer;
