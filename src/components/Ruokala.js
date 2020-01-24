import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import trafficService from "../services/Traffic";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import strings from "./Langstrings";

const Ruokala = () => {
  const [show, setShow] = useState(false);
  const handleVisibility = () => setShow(!show);

  const getImg = () => {
    handleVisibility();
    trafficService.getTrafficPicture().then(response => {
      if (response !== "") {
        setTrafficImage(response);
        setTimeStampForImage(response);
      }
    });
  };

  const setTimeStampForImage = response => {
    const timestampTrafficImg = document.getElementById("timestampTrafficPic");
    if (timestampTrafficImg) {
      const timestampToRender =
        "Picture taken at " +
        response.substring(9, 11) +
        ":" +
        response.substring(11, 13) +
        ":" +
        response.substring(13, 15);
      timestampTrafficImg.innerHTML = timestampToRender;
    }
  };

  const setTrafficImage = response => {
    const trafficImg = document.getElementById("trafficImg");
    if (trafficImg) {
      trafficImg.src = "/img/" + response;
    }
  };

  return (
    <div>
      <Button className="lunchButtons" variant="success" onClick={getImg}>
        {strings.cafeteriaButton}
      </Button>

      <Modal size="lg" show={show} onHide={handleVisibility}>
        <Modal.Header closeButton>
          <Modal.Title>Cafeteria traffic monitoring</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-title h5" id="timestampTrafficPic"></p>
          <br></br>
          <Image
            rounded
            fluid
            id="trafficImg"
            alt="Picture of cafeteriatraffic"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleVisibility}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Ruokala;
