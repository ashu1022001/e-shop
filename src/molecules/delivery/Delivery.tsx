import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import "./Delivery.scss";
import React from "react";
import Heading from "../../atoms/heading/Heading";
import { IDeliveryMethod } from "../../types/delivery";
import { deliveryMethods } from "../../data/delivery";

interface IDelivery {
  className: string;
}

const Delivery: React.FC<React.PropsWithChildren<IDelivery>> = ({
  className = "",
}) => {
  return (
    <div className="delivery-container">
      <Heading type="h4">Delivery methods</Heading>
      <div className="delivery-methods-wrapper">
        {deliveryMethods.map((method) => {
          return (
            <Button
              className="delivery-button-wrapper"
              variation="secondary"
              key={method.cost}
            >
              <div className="delivery-img">
                <img src={`/img/delivery/${method.img}`} />{" "}
              </div>
              <div className="delivery-cost">{`$${method.cost}`}</div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Delivery;
