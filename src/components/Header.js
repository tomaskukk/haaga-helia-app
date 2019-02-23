import React from 'react'
import NavBar from 'react-bootstrap/Navbar'
import NavBarBrand from 'react-bootstrap/NavbarBrand'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'

const Header = () => {

  return (
    <NavBar className="header">
      <NavBarBrand>Haaga-Helia App</NavBarBrand>
      <Nav className="justify-content-center">
        <NavItem></NavItem>
      </Nav>
    </NavBar>
  )
}

export default Header