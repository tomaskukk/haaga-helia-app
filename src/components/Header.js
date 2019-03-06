import React from 'react'
import NavBar from 'react-bootstrap/Navbar'
import NavBarBrand from 'react-bootstrap/NavbarBrand'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import engFlag from '../img/english_flag.png'
import finFlag from '../img/finnish_flag.png'
import './css/components.css'

const Header = ({ handleLangClick, selectedLang }) => {

  let langToShow = selectedLang === 'fi' ? engFlag : finFlag

  return (
    <NavBar  className="header justify-content-between">

      <NavBarBrand id="hhHeader">
      Haaga-Helia App
      <button className="langButton" name="lang" 
      onClick={ () => {handleLangClick()}}>
      <img name="lang" src={langToShow} alt="English"></img>
      </button>
      </NavBarBrand>

      <Nav className="justify-content-center">
        <NavItem>
        </NavItem>
      </Nav>
    </NavBar>
  )
}

export default Header