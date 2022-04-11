import React from "react";
import "../../styles/button.sass";

const Button = ({ text, href, disabled }) => {
  return (
    <button className="main__button">
      {disabled ? (
        <a role="link" aria-disabled="true">
          {text}
        </a>
      ) : (
        <a href={href}>{text}</a>
      )}
    </button>
  );
};

export default Button;
