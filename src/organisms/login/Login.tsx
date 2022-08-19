
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import "./Login.css"
import React from "react";

interface ILogin {
    className: string;
}

const Login: React.FC<React.PropsWithChildren<ILogin>> = ({
    className = ""
}) => {
  return (
    <div className="Login">
      <div className="login-container">
        <Button  type="primary">LOG IN</Button>
        <Button  type="secondary">SIGN UP</Button>
      </div>
      <div>Shipping Information</div>

      <div className="shipping-info">
        <Input type="text" placeholder="Email"></Input>
        <Input type="text" placeholder="Address"></Input>
        <Input type="text" placeholder="Full name"></Input>
        <Input type="text" placeholder="City"></Input>
        <Input type="text" placeholder="Last name"></Input>
        <Input type="text" placeholder="Postal Code/Zip"></Input>
        <Input type="text" placeholder="Phone number"></Input>
        <Input type="text" placeholder="country"></Input>
      </div>
    </div>
  );
}

export default Login;