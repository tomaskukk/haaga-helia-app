import React from 'react'
import Form from 'react-bootstrap/Form'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import Button from 'react-bootstrap/Button'
import './css/lukkari.css'

const Lukkari = ({ findByGroupId, lukkariState, handler, groupId, waitMessage }) => {

  const lukkariParts = lukkariState.split('</style>')

  return (
    <div id="lukkari">
    <h4>Timetable</h4>
    <br></br>
    <Form className="lukkariForm" onSubmit={(event) => {findByGroupId(event, groupId)}}>
        <FormGroup >
          <h5><FormLabel>Group id</FormLabel></h5>
          <FormControl id="groupInput" type="text" name="groupId" value={groupId} onChange={handler} placeholder="e.g tn2pa" />
        </FormGroup>
        <Button id="searchButton" variant="primary" type="submit">
          Search
        </Button>
        {waitMessage}
      </Form>
      <div dangerouslySetInnerHTML={{__html: lukkariParts[1]}}></div>
      </div>
  )
}

export default Lukkari