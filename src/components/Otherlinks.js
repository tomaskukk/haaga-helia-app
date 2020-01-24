import React from "react";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropDown from "react-bootstrap/Dropdown";
import otherLinkItems from "./jsonfiles/Otherlinks";
import strings from "./Langstrings";

const Otherlinks = () => {
  return (
    <DropDown id="otherLinks">
      <h5>{strings.commonLinks}</h5>
      {otherLinkItems.map(item => {
        return (
          <DropdownItem
            key={item.href}
            className="cool-link"
            rel="noopener noreferrer"
            target="_blank"
            href={item.href}
          >
            <img className="commonLinksPictures" src={item.src} alt=""></img>
            {item.text}
          </DropdownItem>
        );
      })}
    </DropDown>
  );
};

export default Otherlinks;
