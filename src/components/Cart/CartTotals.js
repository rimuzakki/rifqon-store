import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PayPalButton from "./PayPalButton";

function CartTotals({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <div>
      <React.Fragment>
        <Container>
          <Row>
            <Col
              xs={{ span: 8, offset: 2 }}
              md={{ span: 4, offset: 8 }}
              className="mt-w ml-sm-5 ml-md-auto text-capitalize text-center text-md-right"
            >
              <Link to="/">
                <button
                  className="btn btn-default text-uppercase mb-3 px-5"
                  type="button"
                  onClick={() => clearCart()}
                >
                  clear cart
                </button>
              </Link>
            </Col>
          </Row>

          <Row>
            <Col xs={{ span: 6, offset: 3 }} md={{ span: 4, offset: 8 }}>
              <div className="total text-right float-md-right">
                <table>
                  <tr>
                    <td>
                      <div className="text-title">
                        <h5>subtotal :</h5>
                      </div>
                    </td>
                    <td>
                      <h5>
                        <strong>$ {cartSubTotal}</strong>
                      </h5>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="text-title">
                        <h5>tax :</h5>
                      </div>
                    </td>
                    <td>
                      <h5>
                        <strong>$ {cartTax}</strong>
                      </h5>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="text-title">
                        <h5>total :</h5>
                      </div>
                    </td>
                    <td>
                      <h5>
                        <strong>$ {cartTotal}</strong>
                      </h5>
                    </td>
                  </tr>
                </table>

                <PayPalButton
                  total={cartTotal}
                  clearCart={clearCart}
                  history={history}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default CartTotals;
