import React from "react";
import "../../styles/footer.sass";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div className="footer__top">
        <p>Polska</p>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-menu">
          <a className="footer__bottom-menu-link">O nas</a>
          <a className="footer__bottom-menu-link">Reklamuj się</a>
          <a className="footer__bottom-menu-link">Dla firm</a>
          <a className="footer__bottom-menu-link">Jak działa wyszukiwarka</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
