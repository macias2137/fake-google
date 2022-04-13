import React from "react";
import "../../styles/header.sass";
import products from "../../assets/products1.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a className="nav__link">Gmail</a>
        <a className="nav__link">Images</a>
        <a className="nav__link">
          <img src={products} alt="products" />
        </a>
        <a className="nav__link">Images</a>
      </nav>
    </header>
  );
};

export default Header;
