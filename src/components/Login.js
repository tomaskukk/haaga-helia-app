import React from 'react'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup' 
import Button from 'react-bootstrap/Button'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'

const login = ({ loginFnc, username, password, handler }) => {
    
    return (

          <Form onSubmit={loginFnc}>
          <FormGroup controlId="formBasicText">
            <FormLabel>Username</FormLabel>
            <FormControl type="text" name="username" value={username} onChange={handler} placeholder="Username" />
          </FormGroup>
        
          <FormGroup controlId="formBasicPassword">
            <FormLabel>Password</FormLabel>
            <FormControl type="password" name="password" value={password} onChange={handler} placeholder="Password" />
          </FormGroup>
          <Button variant="success" type="submit">
            Log in
          </Button>
        </Form>
    )
}

export default login