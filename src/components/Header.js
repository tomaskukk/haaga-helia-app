import React from "react";
import NavBar from "react-bootstrap/Navbar";
import NavBarBrand from "react-bootstrap/NavbarBrand";
import engFlag from "../img/english_flag.png";
import finFlag from "../img/finnish_flag.png";
import Navigation from "./Nav";
import "./css/components.css";

const Header = ({ handleLangClick, selectedLang }) => {
  const langToShow = selectedLang === "fi" ? engFlag : finFlag;

  return (
    <NavBar>
      <NavBarBrand id="hhHeader">
        Haaga-Helia App
        <button
          className="langButton"
          name="lang"
          onClick={() => {
            handleLangClick();
          }}
        >
          <img name="lang" src={langToShow} alt="English"></img>
        </button>
      </NavBarBrand>
      <div id="deskNav">
        <Navigation />
      </div>
    </NavBar>
  );
};

export default Header;
