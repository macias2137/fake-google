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
        <div className="footer__bottom-menu--left">
          <a className="footer__bottom-menu-link">O nas</a>
          <a className="footer__bottom-menu-link">Reklamuj się</a>
          <a className="footer__bottom-menu-link">Dla firm</a>
          <a className="footer__bottom-menu-link">Jak działa wyszukiwarka</a>
        </div>
        <div className="footer__bottom-menu-text">
          <p>Neutralność węglowa od 2007 roku</p>
        </div>
        <div className="footer__bottom-menu--right">
          <a className="footer__bottom-menu-link">Prywatność</a>
          <a className="footer__bottom-menu-link">Warunki</a>
          <a className="footer__bottom-menu-link">Ustawienia</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
