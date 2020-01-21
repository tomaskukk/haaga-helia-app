import React, {useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import trafficService from '../services/Traffic';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';


const Ruokala = () => {
  const [show, setShow] = useState(false);
  const handleVisibility = () => setShow(!show);

  const getImg = async () => {
    handleVisibility()
        await trafficService.getTrafficPicture()
        .then((response) => {
          const trafficImg = document.getElementById('trafficImg');
          const timestampTrafficImg = document.getElementById('timestampTrafficPic');
          if (trafficImg) {
            trafficImg.src = 'http://localhost:3000/img/' + response;
          }
          if (timestampTrafficImg) {
            const timestampToRender = 'Picture taken at ' + 
            response.substring(9, 11) + 
            ':' + 
            response.substring(11, 13) + 
            ':' + 
            response.substring(13, 15);
            timestampTrafficImg.innerHTML = timestampToRender;
          }
        });
  };


  return (
    <div>
      <Button className="lunchButtons" variant="success" onClick={getImg}>
        Show cafeteria queue!
      </Button>

      <Modal size="lg" show={show} onHide={handleVisibility}>
        <Modal.Header closeButton>
          <Modal.Title>Cafeteria traffic monitoring</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-title h5" id="timestampTrafficPic"></p>
          <br></br>
          <Image rounded fluid id="trafficImg" alt="Picture of cafeteriatraffic" />
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
