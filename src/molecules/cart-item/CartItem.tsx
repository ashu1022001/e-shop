import React from "react";
import "./CartItem.css"
const  CartItem :React.FC<{}> =()=> {
  return (
    <div className="CartItem">
      <div className="item-picture">
        <img
          src={
            "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          }
          alt="item"
        ></img>
      </div>
      <div className="item-description">
        <div>{"T-shirt Summer vibe"}</div>
      </div>
      <div className="item-price">
        <div>{`$89`}</div>
      </div>
    </div>
  );
}
export default CartItem;