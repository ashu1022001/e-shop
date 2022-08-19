import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import "./Payment.scss";
import React from "react";
import Heading from "../../atoms/heading/Heading";

interface IPayment {
  className: string;
}

const Payment: React.FC<React.PropsWithChildren<IPayment>> = ({
  className = "",
}) => {
  const paymentMethods: string[] = [
    "paypal.png",
    "visa.jpg",
    "mastercard.png",
    "maestro.png",
    "discover.png",
    "ideal.png",
  ];
  return (
    <div className="payment-container">
      <Heading type="h4">Payment methods</Heading>
      <div className="payment-methods-wrapper">
        {paymentMethods.map((method) => {
          return (
            <Button type="secondary" key={method}>
              <div className="payment-img">
                <img src={`/img/${method}`} />{" "}
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Payment;
