import React from 'react'
import DropdownItem from 'react-bootstrap/DropdownItem'
import DropDown from 'react-bootstrap/Dropdown'
import zonePicture from '../img/zone.png'
import hhfinnaPicture from '../img/hhfinna.png'
import helgaPicture from '../img/helga.png'
import startupschoolPicture from '../img/startupschool.png'
import moveonPicture from '../img/moveon.png'
import studentsguidePicture from '../img/studentsguide.png'
import lauraPicture from '../img/laura.png'
import strings from './Langstrings'


const Otherlinks = () => {
    
  return (
    <DropDown id="otherLinks">
          <h5>{strings.commonLinks}</h5>
      <DropdownItem className="cool-link" 
      rel="noopener noreferrer" target="_blank" 
      href="http://www.haaga-helia.fi/fi/opinto-opas"><img className="commonLinksPictures" src={studentsguidePicture} alt=""></img>{strings.studentsGuide}</DropdownItem>

      <DropdownItem className="cool-link" rel="noopener noreferrer" 
      target="_blank" href="https://startupschool.fi/"><img className="commonLinksPictures" src={startupschoolPicture} alt=""></img>Startup-school</DropdownItem>

      <DropdownItem className="cool-link" rel="noopener noreferrer" 
      target="_blank" href="https://haagahelia.rekrytointi.com/paikat/?o=A_LOJ&list=1"><img className="commonLinksPictures" src={lauraPicture} alt=""></img>{strings.laura}</DropdownItem>

      <DropdownItem className="cool-link" rel="noopener noreferrer" 
      target="_blank" href="https://haaga-helia.finna.fi/"><img className="commonLinksPictures" src={hhfinnaPicture} alt=""></img>HH-Finna</DropdownItem>

      <DropdownItem className="cool-link" rel="noopener noreferrer" 
      target="_blank" href="https://hahe.moveon4.de/publisher/1/eng"><img className="commonLinksPictures" src={moveonPicture} alt=""></img>Moveon</DropdownItem>

      <DropdownItem className="cool-link" rel="noopener noreferrer" 
      target="_blank" href="http://www.helga.fi/"><img className="commonLinksPictures" src={helgaPicture} alt=""></img>Helga</DropdownItem>

      <DropdownItem className="cool-link" rel="noopener noreferrer" 
      target="_blank" href="http://www.helga.fi/palvelut/liikunta/"><img className="commonLinksPictures" src={zonePicture} alt=""></img>{strings.zone}</DropdownItem>
      
</DropDown>
)
}

export default Otherlinks