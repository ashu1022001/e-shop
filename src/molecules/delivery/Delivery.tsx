import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import "./Delivery.scss";
import React from "react";
import Heading from "../../atoms/heading/Heading";

interface IDelivery {
  className: string;
}
interface IDeliveryMethod {
  img: string;
  cost: number;
}

const Delivery: React.FC<React.PropsWithChildren<IDelivery>> = ({
  className = "",
}) => {
  const deliveryMethods: IDeliveryMethod[] = [
    { img: "inpost.svg", cost: 20.0 },
    { img: "dpd.png", cost: 12.0 },
    { img: "dhl.svg", cost: 15.0 },
    { img: "fedex.png", cost: 10.0 },
  ];
  return (
    <div className="delivery-container">
      <Heading type="h4">Delivery methods</Heading>
      <div className="delivery-methods-wrapper">
        {deliveryMethods.map((method) => {
          return (
            <Button
              className="delivery-button-wrapper"
              type="secondary"
              key={method.cost}
            >
              <div className="delivery-img">
                <img src={`/img/${method.img}`} />{" "}
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
