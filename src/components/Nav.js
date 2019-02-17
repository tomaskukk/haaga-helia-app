import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import kidePicture from '../img/kide_app.png'
import lukkariPicture from '../img/lukkarikone.png'
import vdiPicture from '../img/vdi.png'
import myNetPicture from '../img/mynet.jpg'
import outlookPicture from '../img/outlook.png'
import moodlePicture from '../img/moodle.jpg'
import myySearchPicture from '../img/myysearch.png'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import './css/Nav.css'

const Navigation = () => {

    const imgStyle = {
        border: '2px solid pink',
        borderRadius: '300px'
    }
    const testStyle = {
        margin: '20px'
    }

    return (
        <Navbar style={testStyle} bg="light" variant="light">
            <Nav className="mr-auto">
                <NavLink className="navLink" href="https://hhmoodle.haaga-helia.fi" rel="noopener noreferrer" target="_blank">
                <Image style={imgStyle} src={moodlePicture} roundedCircle></Image>
                </NavLink>
                <NavLink className="navLink" href="http://vdi.haaga-helia.fi/" rel="noopener noreferrer" target="_blank">
                <Image style={imgStyle} src={vdiPicture} roundedCircle></Image>
                </NavLink>
                <NavLink className="navLink" href="http://palvelum.me/myybrowser/" rel="noopener noreferrer" target="_blank">
                <Image style={imgStyle} src={myySearchPicture} roundedCircle></Image>
                </NavLink>
                <NavLink className="navLink" href="http://mymail.haaga-helia.fi" rel="noopener noreferrer" target="_blank">
                <Image style={imgStyle} src={outlookPicture} roundedCircle></Image>
                </NavLink>
                <NavLink className="navLink" href="https://student.home.haaga-helia.fi/" rel="noopener noreferrer" target="_blank">
                <Image style={imgStyle} src={myNetPicture} roundedCircle></Image>
                </NavLink>
                <NavLink className="navLink" href="https://lukkarit.haaga-helia.fi/#" rel="noopener noreferrer" target="_blank">
                <Image style={imgStyle} src={lukkariPicture} roundedCircle></Image>
                </NavLink>
                <NavLink className="navLink" href="https://kide.app/" rel="noopener noreferrer" target="_blank">
                <Image style={imgStyle} src={kidePicture} roundedCircle></Image>
                </NavLink>
            </Nav>
        </Navbar>
    )
}

export default Navigation