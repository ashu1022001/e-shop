import React from "react";
import CartItem from "../../molecules/cart-item/CartItem";
import "./Cart.css"
interface ICart{
    className: string;
}
const  Cart: React.FC<React.PropsWithChildren<ICart>> =({
    className = ""
}) => {
  return (
    <div className="Cart">
      <div>Your cart</div>
      <CartItem />
      <CartItem />
      <div className="cart-total-value-cont">
        <span className="cart-value-text">Total cost</span>
        <span className="cart-value-number">$189</span>
      </div>
    </div>
  );
}

export default Cart;