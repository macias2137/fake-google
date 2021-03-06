import React from "react";
import magnifier from "../../assets/magnifier.svg";
import cross from "../../assets/cross.svg";
import "../../styles/main.sass";

const QuerySection = ({ inputState, setInputState }) => {
  return (
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
        className={
          inputState ? "main__icon--cursor-pointer" : "main__icon--hidden"
        }
        alt="cross"
        onClick={() => setInputState("")}
      />
    </div>
  );
};

export default QuerySection;
