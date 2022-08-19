import React from "react";
import "./Input.css"

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  
}

const Input: React.FC<React.PropsWithChildren<IInput>> = ({
  ...props
}) => {
  return (
    <input className="modifiedInput"{...props} ></input>
  );
};

export default Input;