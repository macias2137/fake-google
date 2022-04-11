import React from "react";
import "../../styles/button.sass";

const Button = ({ text, onSubmit }) => {
  return (
    <button type="submit" onSubmit={onSubmit} className="main__button">
      {text}
    </button>
  );
};

export default Button;
