
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css"
import {
  faCartShopping,
  faSearch,
  faUser
} from "@fortawesome/free-solid-svg-icons";

interface IHeader {
    className: string;
}

const Header:React.FC<React.PropsWithChildren<IHeader>>=(
    {
        className = ""
    }
) => {
  return (
    <div className="Header">
      <div className="header-logo">
        <span></span>
        <span>E-shop</span>
      </div>
      <div className="header-category">
        <span> Men</span>
        <span>Women </span>
        <span>Kids </span>
      </div>
      <div className="header-icons">
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faCartShopping} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
}

export default Header