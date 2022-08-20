import React from "react";
import "./Input.scss";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<React.PropsWithChildren<IInput>> = ({
  className = "",
  ...props
}) => {
  return <input className={`input ${className}`} {...props}></input>;
};

export default Input;
