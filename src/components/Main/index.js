import React, { useState } from "react";
import "../../styles/main.sass";
import logo from "../../assets/logo.svg";
import QuerySection from "../QuerySection";
import ButtonSection from "../ButtonSection";

const Main = () => {
  const [inputState, setInputState] = useState("");
  return (
    <main className="main">
      <div className="main__wrapper">
        <img src={logo} className="main__logo" alt="logo" />

        <QuerySection inputState={inputState} setInputState={setInputState} />
        <ButtonSection query={inputState} />
        <p className="main__">
          Google offered in: <a href="https://www.google.pl">polski</a>
        </p>
      </div>
    </main>
  );
};

export default Main;
