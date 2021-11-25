import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../../containers/navbar/NavBar";
import Home from "../../containers/home/Home";
import ViewProduct from "../../containers/view-product/ViewProduct";
import Wishlist from "../../containers/wishlist/Wishlist";
import Cart from "../../containers/cart/Cart";
import Checkout from "../../containers/checkout/Checkout";
import About from "../../containers/about/About";

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/ViewProduct/:prodId" element={<ViewProduct />}></Route>
      <Route path="/wishlist" element={<Wishlist />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  </Router>
);

export default App;
