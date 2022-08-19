import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import "./ShippingInfo.scss";
import React from "react";
import Heading from "../../atoms/heading/Heading";

interface IShippingInfo {
  className: string;
}

const ShippingInfo: React.FC<React.PropsWithChildren<IShippingInfo>> = ({
  className = "",
}) => {
  return (
    <div className="checkout-container">
      <div className="auth-container">
        <Button type="primary">LOG IN</Button>
        <Button type="secondary">SIGN UP</Button>
      </div>

      <div className="shipping-info">
        <Heading type="h4" className="shpping-title">Shipping Information</Heading>
        <div className="shipping-form">
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Address" />
          <Input type="text" placeholder="Full name" />
          <Input type="text" placeholder="City" />
          <Input type="text" placeholder="Last name" />
          <Input type="text" placeholder="Postal Code/Zip" />
          <Input type="text" placeholder="Phone number" />
          <Input type="text" placeholder="country" />
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
