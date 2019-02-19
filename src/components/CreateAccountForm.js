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
        <FormGroup controlId="createAccountUsername">
          <FormLabel>Username</FormLabel>
          <FormControl type="text" name="username" value={username} onChange={handler} placeholder="Username" />
        </FormGroup>
      
        <FormGroup controlId="createAccountPassword">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" name="creatingAccountPassword" value={password} onChange={handler} placeholder="Password" />
        </FormGroup>
        
        <FormGroup controlId="createAccountPasswordConfirmation">
          <FormLabel>Password again</FormLabel>
          <FormControl type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={handler} placeholder="Password again" />
        </FormGroup>

        <Button variant="primary" type="submit">
          Create account
        </Button>
      </Form>
    )
}

export default CreateAccountForm