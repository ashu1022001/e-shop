import ShippingInfo from "./molecules/shipping-info/ShippingInfo";
import Cart from "./organisms/cart/Cart";
import Button from "./atoms/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./organisms/header/Header";
import { faCartShopping, faTruck } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Checkout from "./templates/checkout/Checkout";
export default function App() {
  return (
    <div className="App">
      <Header className="app-header" />
      <div className="app-container">
        <Checkout />
      </div>
    </div>
  );
}
