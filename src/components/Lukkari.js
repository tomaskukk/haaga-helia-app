import React from 'react'
import Form from 'react-bootstrap/Form'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import Button from 'react-bootstrap/Button'
import './css/lukkari.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Lukkari = ({ findByGroupId, lukkariState, handler, groupId }) => {


  return (
    <div id="lukkari">
    <Form className="lukkariForm" onSubmit={(event) => {findByGroupId(event, groupId)}}>
        <FormGroup >
          <FormLabel>Group id</FormLabel>
          <FormControl id="groupInput" type="text" name="groupId" value={groupId} onChange={handler} placeholder="tn2pa" />
        </FormGroup>
        <Button id="searchButton" variant="primary" type="submit">
          Search
        </Button>

      </Form>
      <div dangerouslySetInnerHTML={{__html: lukkariState}}></div>
      </div>
  )
}

export default Lukkari