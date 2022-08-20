import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import Heading from "../../atoms/heading/Heading";
import { items } from "../../data/cart";
import CartItem from "../../molecules/cart-item/CartItem";
import "./Cart.css";

interface ICart {
  className: string;
}

const Cart: React.FC<React.PropsWithChildren<ICart>> = ({ className = "" }) => {
  const totalCost = useMemo(
    () =>
      items.reduce((acc, cur) => {
        acc += cur.itemCost;
        return acc;
      }, 0),
    [items]
  );

  const policyDifference = 190 - totalCost;
  return (
    <div className="cart-wrapper">
      <Heading type="h4" className="cart-title">
        Your cart
      </Heading>
      <div className="cart-list">
        {items.map((item) => {
          return <CartItem item={item} key={item.itemId} />;
        })}
      </div>
      <div className="cart-total-value-container">
        <span className="cart-value-text">Total cost</span>
        <span className="cart-value-number">${totalCost}</span>
      </div>
      {policyDifference > 0 ? (
        <div className="shipping-cost-details">
          {" "}
          <span>
            {" "}
            <FontAwesomeIcon icon={faTruck} />{" "}
          </span>{" "}
          <span>
            {" "}
            you are ${policyDifference.toFixed(2)} away from free shipping!{" "}
          </span>
        </div>
      ) : (
        <div className="shipping-cost-details"> Free shipping !!</div>
      )}
    </div>
  );
};

export default Cart;
