import React from 'react'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup' 
import Button from 'react-bootstrap/Button'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'

const CreateAccountForm = ({ username, password,
     handler, passwordConfirmation, createAccountFnc }) => {
    return (
        <Form onSubmit={createAccountFnc}>
        <FormGroup controlId="formBasicText">
          <FormLabel>Käyttäjätunnus</FormLabel>
          <FormControl type="text" name="username" value={username} onChange={handler} placeholder="Käyttäjätunnus" />
        </FormGroup>
      
        <FormGroup controlId="formBasicPassword">
          <FormLabel>Salasana</FormLabel>
          <FormControl type="password" name="password" value={password} onChange={handler} placeholder="Salasana" />
        </FormGroup>
        
        <FormGroup controlId="formBasicPasswordConfirmation">
          <FormLabel>Salasana uudestaan</FormLabel>
          <FormControl type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={handler} placeholder="Salasana uudestaan" />
        </FormGroup>

        <Button variant="primary" type="submit">
          Luo käyttäjä
        </Button>
      </Form>
    )
}

export default CreateAccountForm