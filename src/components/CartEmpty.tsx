import React from "react";
import { Link } from "react-router-dom";

import emptyCartImg from "../assets/img/empty-cart.png";

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Cart is empty <span>😕</span>
      </h2>
      <p>
        Probably you didn't add any pizza
        <br />
        For order go to the main page
      </p>
      <img src={emptyCartImg} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Back</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
