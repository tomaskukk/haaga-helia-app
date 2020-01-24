import React from "react";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "./css/components.css";
import Tooltip from "react-bootstrap/Tooltip";
import navItems from "./jsonfiles/Navitems";

const Navigation = () => {
  return (
    <Nav className="justify-content-center">
      {navItems.map(item => {
        return (
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id={`hhtooltip`}>{item.text}</Tooltip>}
          >
            <NavLink
              className="navLink"
              href={item.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                id="roviusLink"
                className="navImg"
                src={item.src}
                roundedCircle
              ></Image>
            </NavLink>
          </OverlayTrigger>
        );
      })}
    </Nav>
  );
};

export default Navigation;
