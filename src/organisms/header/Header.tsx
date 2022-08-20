import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "react-tiny-popover";
import "./Header.scss";
import {
  faBars,
  faCartShopping,
  faSearch,
  faSignOut,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../atoms/button/Button";
import { useState } from "react";

interface IHeader {
  className: string;
}

const Header: React.FC<React.PropsWithChildren<IHeader>> = ({
  className = "",
}) => {

  const [menuBtnClicked, setMenuBtnClicked] = useState(false);
  const { logout, currentUser } = useAuth();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <nav className={`Header ${menuBtnClicked && "new-header"} `}>
      <div>
        <img className="header-logo" alt="logo" src="/img/logo.png" />
      </div>
      <ul className={` ${menuBtnClicked && "new-header-category"} header-category`}>
        <li>
          <Button variation="secondary">Men</Button>
        </li>
        <li>
          <Button variation="secondary">Women</Button>
        </li>
        <li>
          <Button variation="secondary">Kids</Button>
        </li>
      </ul>

      <div className={` header-icons`}>
        <Button variation="secondary">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
        <Button variation="secondary">
          <FontAwesomeIcon icon={faCartShopping} />
        </Button>
        {currentUser && (
          <Popover
            isOpen={isPopoverOpen}
            positions={["bottom", "left", "right"]} // preferred positions by priority
            onClickOutside={() => setIsPopoverOpen(false)}
            content={
              <Button
                className="logout-btn"
                variation="secondary"
                onClick={() => {
                  logout();
                  setIsPopoverOpen(false);
                }}
              >
                <FontAwesomeIcon icon={faSignOut} />
                <span>Logout</span>
                <span className="user-name">{currentUser?.displayName}</span>
              </Button>
            }
          >
            <Button variation="secondary">
              <FontAwesomeIcon
                icon={faUser}
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
              />
            </Button>
          </Popover>
        )}
      </div>
      <div
        className="menu-btn"
        onClick={() => setMenuBtnClicked(!menuBtnClicked)}
      >
        {(!menuBtnClicked && <FontAwesomeIcon icon={faBars} />) ||
          (menuBtnClicked && <FontAwesomeIcon icon={faXmark} fontSize={30} />)}
      </div>
    </nav>
  );
};

export default Header;
