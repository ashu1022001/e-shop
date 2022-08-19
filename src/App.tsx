import ShippingInfo from "./organisms/shipping-info/ShippingInfo";
import Cart from "./organisms/cart/Cart";
import Button from "./atoms/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./organisms/header/Header";
import { faCartShopping, faTruck } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Header className="app-header" />
      <div className=" app-container">
        <div className="sub-header">
          <div className="sub-header1">Shipping and Payment</div>
          <div className="sub-header2">
            <Button type="secondary">
              <FontAwesomeIcon icon={faCartShopping} />
            </Button>
            <Button type="primary">
              <FontAwesomeIcon icon={faTruck} />
            </Button>
          </div>
        </div>
        <div className="app-subcontainer">
          <ShippingInfo className="app-login" />
          <Cart className="app-cart" />
        </div>
      </div>
    </div>
  );
}
