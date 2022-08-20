import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import "./PaymentCard.scss";
import Payment from "../../molecules/payment/Payment";
import React from "react";
import Delivery from "../../molecules/delivery/Delivery";

interface IPaymentCard {
  className: string;
}

const PaymentCard: React.FC<React.PropsWithChildren<IPaymentCard>> = ({
  className = "",
}) => {
  return (
    <div className="payment-card-container">
      <Payment className="" />
      <Delivery className="" />
    </div>
  );
};

export default PaymentCard;
