import React, { useState } from "react";
import "../../styles/main.sass";
import logo from "../../assets/logo.svg";
import magnifier from "../../assets/magnifier.svg";
import products from "../../assets/products.svg";
import cross from "../../assets/cross.svg";
import Button from "../Button";

const Main = () => {
  const [inputState, setInputState] = useState("");
  return (
    <main className="main">
      <div className="main__wrapper">
        <img src={logo} className="main__logo" alt="logo" />
        <div className="main__query-wrapper">
          <img src={magnifier} className="main__icon" alt="magnifier" />
          <input
            type="text"
            className="main__input"
            onChange={(e) => setInputState(e.target.value)}
          ></input>
          {inputState && <img src={cross} className="main__icon" alt="cross" />}
        </div>
        <div>
          <Button text="Google Search" />
          <Button text="I'm feeling lucky" />
        </div>
      </div>
    </main>
  );
};

export default Main;
