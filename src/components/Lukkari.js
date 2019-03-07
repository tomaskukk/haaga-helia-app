import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import Button from 'react-bootstrap/Button'
import './css/lukkari.css'
import './css/components.css'
import strings from './Langstrings'


const Lukkari = ({ findByGroupId, lukkariState, 
  handler, groupId, waitMessage }) => {

  // response from lukkarikone is html so lets clear unused functions
  // so we dont get errors in console 
  let changedHtml = lukkariState.replace('<table ', '<table class="table table table-responsive-lg table-striped table-bordered table-hover"')
  changedHtml = changedHtml.replace(/src/g, 'ref')  
  changedHtml = changedHtml.replace(/viewEvent/g, 'console.log(event.target.textContent);console.log')  


  let lukkariParts = changedHtml.split('</style>')


  return (
    <div id="lukkari">
    <Form className="lukkariForm" onSubmit={(event) => {findByGroupId(event, groupId)}}>
        <FormGroup id="lukkariFormGroup">
        <Form.Label>{strings.groupid}</Form.Label>
          <FormControl id="groupInput" type="text" name="groupId" 
value={groupId} onChange={handler} placeholder={strings.eg} />
        </FormGroup>
        <Button id="searchButton" variant="primary" type="submit">
          Search
        </Button> 
        <h5 id="waitMessage">{waitMessage}</h5>
      </Form>
      <h5 id="scrollRight">{strings.scroll}</h5>
      <h5>{strings.moodleHelpText}</h5>
      <div id="lukkariToSave" dangerouslySetInnerHTML={{__html: lukkariParts[1]}}></div>
      </div>
  )
}



export default Lukkari
