import React from "react";
import { Row, Col } from "react-bootstrap";

function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <Row className="my-1 text-capitalize text-center">
      <Col xs={10} lg={1} className="mx-auto">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </Col>

      <Col xs={10} lg={2} className="mx-auto">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </Col>
      <Col xs={10} lg={3} className="mx-auto">
        <span className="d-lg-none">product : </span> {title}
      </Col>

      <Col xs={10} lg={2} className="mx-auto">
        <span className="d-lg-none">price : $ </span>
        {price}
      </Col>

      <Col xs={10} lg={2} className="mx-auto my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </Col>

      <Col xs={10} lg={2} className="mx-auto">
        <strong>item total : $ {total}</strong>
      </Col>
    </Row>
  );
}

export default CartItem;
