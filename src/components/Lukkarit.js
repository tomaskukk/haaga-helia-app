import React from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'


const Lukkari = () => {

    const styleLukkariKone = {
        width: '750px',
        height: '500px'
    }

    return (
        <div id="accordion">
        <ButtonToolbar>
  {['top', 'right', 'bottom', 'left'].map(placement => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Tooltip id={`tooltip-${placement}`}>
          Tooltip on <strong>{placement}</strong>.
        </Tooltip>
      }
    >
      <Button onTouchMoveCapture={OverlayTrigger} variant="secondary">Tooltip on {placement}</Button>
    </OverlayTrigger>
  ))}
</ButtonToolbar>
            {/* <iframe style={styleLukkariKone} src="https://lukkarit.haaga-helia.fi/#"></iframe> */}
        </div>
    )
}

export default Lukkari