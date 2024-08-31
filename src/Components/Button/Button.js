import React from "react";
import "./Button.css";

const Button = ({ className, children }) => {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
};

export default Button;
