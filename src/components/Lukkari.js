import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import Button from 'react-bootstrap/Button'
import './css/lukkari.css'
import './css/components.css'


const Lukkari = ({ findByGroupId, lukkariState, handler, groupId, waitMessage }) => {

  let changedHtml = lukkariState.replace('<table ', '<table class="table table table-responsive-lg table-striped table-bordered table-hover"')

  changedHtml = changedHtml.replace(/src/g, 'ref')  

  let lukkariParts = changedHtml.split('</style>')

  return (
    <div id="lukkari">
    <Form className="lukkariForm" onSubmit={(event) => {findByGroupId(event, groupId)}}>
        <FormGroup id="lukkariFormGroup">
        <Form.Label>Group id</Form.Label>
          <FormControl id="groupInput" type="text" name="groupId" 
value={groupId} onChange={handler} placeholder="e.g Tn2pd" />
        </FormGroup>
        <Button id="searchButton" variant="primary" type="submit">
          Search
        </Button> 
        <h5 id="waitMessage">{waitMessage}</h5>
      </Form>
      <h5 id="scrollRight">Scroll right to see all days</h5>
      <div dangerouslySetInnerHTML={{__html: lukkariParts[1]}}></div>
      </div>
  )
}

export default Lukkari
