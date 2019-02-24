import React from 'react'
import NavBar from 'react-bootstrap/Navbar'
import NavBarBrand from 'react-bootstrap/NavbarBrand'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import ReactWeather from 'react-open-weather'

const Header = () => {

  return (
    <NavBar  className="header justify-content-between">
      <NavBarBrand>Haaga-Helia App</NavBarBrand>
      <Nav className="justify-content-center">
        <NavItem>
        <ReactWeather
        id="weatherWidget"
        forecast="today"
        apikey="7c7d3d54514d4667a1372822192402"
        type="auto"/>
        </NavItem>
      </Nav>
    </NavBar>
  )
}

export default Header