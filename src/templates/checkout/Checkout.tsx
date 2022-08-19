import { faCartShopping, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";
import Cart from "../../organisms/cart/Cart";
import ShippingInfo from "../../molecules/shipping-info/ShippingInfo";
import PaymentCard from "../../organisms/payment-card/PaymentCard";
import "./Checkout.scss";
import Heading from "../../atoms/heading/Heading";

interface ICheckout {}

const Checkout: React.FC<React.PropsWithChildren<ICheckout>> = ({}) => {
  return (
    <div className="checkout-wrapper">
      <div className="sub-header-wrapper">
        <Heading type="h4" className="sub-header-title">Shipping and Payment</Heading>
        <div className="sub-header-actions">
          <Button className="shopping-cart-btn" type="secondary">
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
          <div className="line"></div>
          <Button type="primary">
            <FontAwesomeIcon icon={faTruck} />
          </Button>
        </div>
      </div>
      <div className="checkout-subcontainer">
        <div className="shipping-card">
          <ShippingInfo className="app-login" />
        </div>
        <div className="payment-card">
          <PaymentCard className="" />
        </div>

        <div className="cart-card">
          <Cart className="app-cart" />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
