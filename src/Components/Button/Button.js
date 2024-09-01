import React from "react";
import "./Button.css";

const Button = ({ onClick, className, children }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
