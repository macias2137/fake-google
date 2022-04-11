import React from "react";
import "../../styles/button.sass";

const Button = ({ text, href, disabled }) => {
  return (
    <button className="main__button">
      {disabled ? (
        <a className="main__button-link" role="link" aria-disabled="true">
          {text}
        </a>
      ) : (
        <a className="main__button-link" href={href}>
          {text}
        </a>
      )}
    </button>
  );
};

export default Button;
