import React from "react";
import "./Checkout.css";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { checkout } from "../../redux/actions";
import { getTotalPrice } from "../../redux/reducers";
import { getAllProductsId } from "../../redux/reducers/products";

import Button from "../../components/shared/button/Button";

class Checkout extends React.Component {
  componentWillUnmount() {
    //products Ids are passed to make selectedQuantity of products to 1 again.
    this.props.checkout(this.props.allProductsId);
  }

  render() {
    const { totalPrice } = this.props;

    return (
      <Container style={{ marginTop: "2.8rem" }}>
        <Row>
          <Col md="8" className="m-auto text-center">
            <h4 className="lead text-muted font-italic">
              CẢM ƠN QUÝ KHÁCH ĐÃ MUA HÀNG TẠI SHOP
            </h4>
            <h2 className="font-weight-bold">
              ĐÃ THANH TOÁN VỚI SỐ TIỀN: {totalPrice}
            </h2>
            <img
              src="https://cdni.iconscout.com/illustration/free/thumb/shopping-fun-1567066-1322717.png"
              alt="shopping"
              className="checkout-img"
            />

            <Link to="/">
              <Button>Quay lại trang chủ</Button>
            </Link>

            <h4 className="lead text-muted font-italic my-4">
              Copyright by Huynh Anh Du
            </h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  totalPrice: getTotalPrice(state),
  allProductsId: getAllProductsId(state.products),
});

const mapDispatchToProps = (dispatch) => ({
  checkout: (allProductsId) => dispatch(checkout(allProductsId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
