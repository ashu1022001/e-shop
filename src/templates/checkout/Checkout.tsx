import {
  faArrowLeft,
  faBackspace,
  faCartShopping,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
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
        <h3 className="sub-header-title">Shipping and Payment</h3>
        <div className="sub-header-actions">
          <Button className="shopping-cart-btn" variation="secondary">
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
          <div className="line"></div>
          <Button variation="primary">
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
      <div className="checkout-actions">
        <Button className="checkout-action-navigation" variation="secondary">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>back</span>
        </Button>
        <div className="checkout-action-buttons">
          <Button variation="secondary"> CONTINUE SHOPPING </Button>
          <Button variation="primary"> PROCEED TO PAYMENT </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
