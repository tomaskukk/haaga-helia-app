import zonePicture from "../../img/zone.png";
import hhfinnaPicture from "../../img/hhfinna.png";
import helgaPicture from "../../img/helga.png";
import startupschoolPicture from "../../img/startupschool.png";
import moveonPicture from "../../img/moveon.png";
import studentsguidePicture from "../../img/studentsguide.png";
import lauraPicture from "../../img/laura.png";
import strings from "../Langstrings";

const otherLinkItems = [
  {
    href: "http://www.haaga-helia.fi/fi/opinto-opas",
    src: studentsguidePicture,
    text: strings.studentsGuide
  },
  {
    href: "https://startupschool.fi/",
    src: startupschoolPicture,
    text: "Startup-school"
  },
  {
    href: "https://helga.fi/jobteaser/",
    src: lauraPicture,
    text: strings.laura
  },
  {
    href: "https://haaga-helia.finna.fi/",
    src: hhfinnaPicture,
    text: "HH-Finna"
  },
  {
    href: "https://hahe.moveon4.de/publisher/1/eng",
    src: moveonPicture,
    text: "Moveon"
  },
  {
    href: "http://www.helga.fi/",
    src: helgaPicture,
    text: "Helga"
  },
  {
    href: "https://helga.fi/palvelusi/zone-liikuntapalvelut/",
    src: zonePicture,
    text: strings.zone
  }
];

export default otherLinkItems;
