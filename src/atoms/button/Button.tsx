import React from "react";
import "./Button.scss";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variation: "primary" | "secondary";
}

const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<IButton>
>(({ variation = "primary", className = '', children, ...props }, ref) => {
  return (
    <button ref={ref} {...props} className={`btn ${className} ${variation}`}>
      {children}
    </button>
  );
});

export default Button;
