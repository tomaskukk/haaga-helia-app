import React from 'react'
import Form from 'react-bootstrap/Form'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import Button from 'react-bootstrap/Button'
import './css/lukkari.css'
import './css/components.css'


const Lukkari = ({ findByGroupId, lukkariState, handler, groupId, waitMessage }) => {

  const changedHtml = lukkariState.replace('<table ', '<table class="table table table-responsive table-striped table-bordered table-hover"')

  const lukkariParts = changedHtml.split('</style>')
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
        <h5>{waitMessage}</h5>
      </Form>
      <div dangerouslySetInnerHTML={{__html: lukkariParts[1]}}></div>
      </div>
  )
}

export default Lukkari