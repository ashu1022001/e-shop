import React from "react";
import { IItem } from "../../types/cart";
import "./CartItem.css";



interface ICartItem{
  item: IItem;
}
const CartItem: React.FC<ICartItem> = ({
  item
}) => {
  return (
    <div className="CartItem">
      <div className="item-picture">
        <img
          src={item?.itemSrc}
          alt="item"
        ></img>
      </div>
      <div className="item-description">
        <div>{item?.itemDescription}</div>
        <span className="item-id">{item?.itemId}</span>
      </div>
      <div className="item-price">
        <div>${item?.itemCost}</div>
      </div>
    </div>
  );
};
export default CartItem;
