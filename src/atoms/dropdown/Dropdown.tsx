import React from "react";
import "./Dropdown.scss";

interface IOption {
  label: string;
  value: string;
}

interface IDropdown extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: IOption[];
}

const Dropdown: React.FC<React.PropsWithChildren<IDropdown>> = ({
  className = "",
  options = [],
  ...props
}) => {
  return (
    <select {...props} className={`dropdown ${className}`}>
      {options.map((option) => (
        <option key={option.value} value={option?.value}>{option?.value}</option>
      ))}
    </select>
  );
};

export default Dropdown;
