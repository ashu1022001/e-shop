import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import Header from "../../organisms/header/Header";
import Checkout from "../checkout/Checkout";
import "./Layout.scss";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

  const { restoreLoggedInState } = useAuth();  

  useEffect(() => {
    restoreLoggedInState();
  }, []); 
    
  return (
    <div className="App">
      <Header className="layout-header" />
      <div className="layout-container">
        <Checkout />
      </div>
    </div>
  );
};


export default Layout;