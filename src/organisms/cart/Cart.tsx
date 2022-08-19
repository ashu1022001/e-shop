import React from "react";
import CartItem from "../../molecules/cart-item/CartItem";
import "./Cart.css";
interface ICart {
  className: string;
}
const Cart: React.FC<React.PropsWithChildren<ICart>> = ({ className = "" }) => {
  return (
    <div className="cart-wrapper">
      <h4 className="cart-title">Your cart</h4>
      <div className="cart-list">
        <CartItem />
        <CartItem />
      </div>
      <div className="cart-total-value-container">
        <span className="cart-value-text">Total cost</span>
        <span className="cart-value-number">$189</span>
      </div>
    </div>
  );
};

export default Cart;
