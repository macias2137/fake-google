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
            value={inputState}
            className="main__input"
            onChange={(e) => setInputState(e.target.value)}
          ></input>
          <img
            src={cross}
            className={inputState ? "main__icon" : "main__icon--hidden"}
            alt="cross"
            onClick={() => setInputState("")}
          />
        </div>
        <div>
          <Button
            text="Google Search"
            href={
              inputState &&
              `https://google.com/search?q=${inputState.split(" ").join("+")}`
            }
            disabled={!inputState && true}
          />
          <Button
            text="I'm feeling lucky"
            href="https://www.google.com/doodles"
          />
        </div>
        <p className="main__">
          Google offered in: <a href="https://www.google.pl">polski</a>
        </p>
      </div>
    </main>
  );
};

export default Main;
