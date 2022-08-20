import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDOM from "react-dom";
import Button from "../../atoms/button/Button";
import "./Modal.scss";

interface IModal {
  isOpen: boolean;
  header?: React.ReactElement;
  footer?: React.ReactElement;
  closeFn: () => void;
}
const Modal: React.FC<React.PropsWithChildren<IModal>> = ({ isOpen, header, footer, children, closeFn }) => {
  const modal = (
    isOpen &&
    <div className="modal">
      <div className="overlay" onClick={closeFn}></div>
      <div className="modal-content">
        <Button onClick={closeFn} className="modal-close" variation="secondary">
          <FontAwesomeIcon icon={faXmark} />
        </Button>
        { header && <div className="modal-header"> { header } </div> }
        <div className="modal-body"> { children } </div>
        { footer && <div className="modal-footer"> { footer } </div> }
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.body);
};
export default Modal;
