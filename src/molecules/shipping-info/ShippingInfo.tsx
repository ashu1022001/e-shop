import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import "./ShippingInfo.scss";
import React from "react";
import Heading from "../../atoms/heading/Heading";
import LoginModal from "../../organisms/login-modal/LoginModal";
import { useState } from "react";
import SignupModal from "../../organisms/signup-modal/SignupModal";
import { useAuth } from "../../hooks/useAuth";

interface IShippingInfo {
  className: string;
}

const ShippingInfo: React.FC<React.PropsWithChildren<IShippingInfo>> = ({
  className = "",
}) => {


  const { currentUser} = useAuth();


  const [isLoginModalOpen, toggleLoginModal] = useState(false);
  const [isSignupModalOpen, toggleSignUpModal] = useState(false);

  return (
    <div className="checkout-container">
      <LoginModal isOpen={isLoginModalOpen} closeFn={() => toggleLoginModal(false) }/>
      <SignupModal isOpen={isSignupModalOpen} closeFn={() => toggleSignUpModal(false) }/>
     { !currentUser?.email && (<div className="auth-container">
        <Button variation="primary" onClick={() => toggleLoginModal(true)}>LOG IN</Button>
        <Button variation="secondary" onClick={() => toggleSignUpModal(true)} >SIGN UP</Button>
      </div>)
}

      <div className="shipping-info">
        <Heading type="h4" className="shpping-title">
          Shipping Information
        </Heading>
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
