import React from "react";
import CartItem from "./CartItem";
import { Container } from "react-bootstrap";

function CartList({ value }) {
  const { cart } = value;
  console.log(value, cart);

  return (
    <Container>
      {cart.map(item => {
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </Container>
  );
}

export default CartList;
