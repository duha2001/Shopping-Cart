import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const PriceList = (props) => {
  const { totalItems, totalPrice } = props;

  return (
    <ListGroup className="shadow-sm mb-4">
      <ListGroupItem>
        Giá tiền ( {totalItems} sản phẩm )
        <span className="float-right">{totalPrice}</span>
      </ListGroupItem>

      <ListGroupItem>
        Phí giao hàng<span className="float-right">0</span>
      </ListGroupItem>

      <ListGroupItem color="success">
        <b>
          TỔNG TIỀN<span className="float-right">{totalPrice}</span>
        </b>
      </ListGroupItem>
    </ListGroup>
  );
};

export default PriceList;
