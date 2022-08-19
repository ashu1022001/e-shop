import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import "./Payment.scss";
import React from "react";

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
      <h4>Payment methods</h4>
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
