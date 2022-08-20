import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "react-tiny-popover";
import "./Header.scss";
import {
  faCartShopping,
  faSearch,
  faSignOut,
  faUser,
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
  const { logout, currentUser } = useAuth();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <nav className="Header">
      <div>
        <img className="header-logo" alt="logo" src="/img/logo.png" />
      </div>
      <ul className="header-category">
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

      <div className="header-icons">
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
    </nav>
  );
};

export default Header;
