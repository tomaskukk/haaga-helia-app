import React from 'react'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup' 
import Button from 'react-bootstrap/Button'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'

const Newcourse = ({ name, url,
     handler, createCourseFnc }) => {
    return (
        <Form onSubmit={createCourseFnc}>
        <FormGroup controlId="formBasicText">
          <FormLabel>Kursille nimi</FormLabel>
          <FormControl type="text" name="courseName" value={name} onChange={handler} placeholder="Anna kurssille nimi" />
        </FormGroup>
      
        <FormGroup controlId="formBasicText">
          <FormLabel>Linkki</FormLabel>
          <FormControl type="text" name="courseUrl" value={url} onChange={handler} placeholder="Kurssin linkki esim. https://hhmoodle.haaga-helia.fi/course/view.php?id=23298" />
        </FormGroup>
        <Button variant="primary" type="submit">
          Tallenna
        </Button>
      </Form>
    )
}

export default Newcourse