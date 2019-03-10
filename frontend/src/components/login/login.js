import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText
} from 'reactstrap';

class Login extends Component {
  constructor(props){
    super(props);
      this.state = {
      'email': '',
      'password': '',
      validate: {
        emailState: ''}
      };
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail(e) {
  const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { validate } = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success'
    } else {
      validate.emailState = 'has-danger'
    }
    this.setState({ validate })
    console.log(validate);
  }

  render(){
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                valid={ this.state.validate.emailState === 'has-success' }
                invalid={ this.state.validate.emailState === 'has-danger' }
                onChange={ (e) => this.validateEmail(e)}
              />
              <FormText>Your username is most likely your email.</FormText>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default Login