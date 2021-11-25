import React from "react";
import "./CartItem.css";
import { Row, Col, ListGroupItem } from "reactstrap";

const CartItem = (props) => {
  const { item, getQuantity, removeFromCart, getTotalItemPrice } = props;

  const { id, img, title, seller, offerPrice } = item;
  let quantity = getQuantity(id);
  let totalPrice = getTotalItemPrice(id);

  return (
    <ListGroupItem className="mb-4 shadow-sm">
      <Row>
        <Col md="4">
          <img src={img} className="w-100 cart-img" alt="cart item" />
        </Col>

        <Col md="8">
          <div className="prod-details">
            <h5 className="m-0">{title}</h5>
            <p className="small text-muted m-0 mb-2">Người bán: {seller}</p>
            <p className="text-muted m-0">Số lượng: {quantity}</p>
            <p className="text-muted mb-3">
              {quantity} x {offerPrice} ={" "}
              <span className="bold"> {totalPrice}</span>
            </p>
            <span className="cart-remove" onClick={() => removeFromCart(id)}>
              XÓA
            </span>
          </div>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default CartItem;
