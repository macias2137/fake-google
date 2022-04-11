import React from "react";
import Button from "../Button";

const ButtonSection = ({ query }) => {
  return (
    <div>
      <Button
        text="Google Search"
        href={
          query && `https://google.com/search?q=${query.split(" ").join("+")}`
        }
        disabled={!query && true}
      />
      <Button text="I'm feeling lucky" href="https://www.google.com/doodles" />
    </div>
  );
};

export default ButtonSection;
