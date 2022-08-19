import React from "react";
import "./Button.css"

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  type: "primary" | "secondary";
}

const Button: React.FC<React.PropsWithChildren<IButton>> = ({
  type = "primary",
  children,
  ...props
}) => {
  return (
    <button {...props} className={`modified-button ${type}`}>{children}</button>
  );
};

export default Button;
