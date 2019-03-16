import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText
} from 'reactstrap';
import axios from 'axios';

class Registration extends Component {
  constructor(props){
    super(props);
      this.state = {
         "username": "",
         "first_name": "",
         "last_name": "",
         "email": "",
         "password": "",
         "password_confirm": "",
      validate: {
        emailState: '',
        passwordState: '',
        loginState: '',
        confirmPasswordState: ''
      }
      };
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.onchangeOtherFields = this.onchangeOtherFields.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  validateEmail(e) {
    this.setState({'email': e.target.value});
  const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { validate } = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success'
    } else {
      validate.emailState = 'has-danger'
    }
    this.setState({ validate });
  }


  validatePassword(e) {
    this.setState({'password': e.target.value});
  const passwordRex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const { validate } = this.state;
    if (passwordRex.test(e.target.value)) {
      validate.passwordState = 'has-success'
    } else {
      validate.passwordState = 'has-danger'
    }
    this.setState({ validate });
  }

  validateConfirmPassword(e) {
    this.setState({'password_confirm': e.target.value});
    const { validate } = this.state;
      if (e.target.value === this.state.password) {
        validate.confirmPasswordState = 'has-success'
      } else {
        validate.confirmPasswordState = 'has-danger'
      }
      this.setState({ validate });
    }

  validateLogin(e) {
    this.setState({'username': e.target.value});
    //todo add user ifexists feature
  const passwordRex = /^[a-zA-Z\d]{8,}$/;
  const { validate } = this.state;
    if (passwordRex.test(e.target.value)) {
      validate.loginState = 'has-success'
    } else {
      validate.loginState = 'has-danger'
    }
    this.setState({ validate });
  }

  onchangeOtherFields(e, field){
      this.setState({[field]: e.target.value});
  }

  onFormSubmit(e){
    e.preventDefault();
    console.log(this.state);
    axios.post('/api/v1/accounts/register/',
        {
          "username": this.state.username,
          "first_name": this.state.first_name,
          "last_name": this.state.last_name,
          "email": this.state.email,
          "password": this.state.password,
          "password_confirm": this.state.password_confirm
        }


        ).then(function (resp) {
        console.log(resp)
    }).catch(function (err) {
        console.log(err)
    })
  }

  render(){
    return (
      <Container className="App">
        <h2>Registration</h2>
        <Form className="form" onSubmit={(e) => this.onFormSubmit(e)}>
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                id="regUsername"
                valid={ this.state.validate.loginState === 'has-success' }
                invalid={ this.state.validate.loginState === 'has-danger' }
                onChange={ (e) => this.validateLogin(e)}
              />
              <FormText>Your username</FormText>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                name="firstName"
                id="regFirstName"
                onChange={(e) => this.onchangeOtherFields(e, 'first_name')}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="regLastName"
                onChange={(e) => this.onchangeOtherFields(e, 'last_name')}
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
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
                valid={ this.state.validate.passwordState === 'has-success' }
                invalid={ this.state.validate.passwordState === 'has-danger' }
                onChange={ (e) => this.validatePassword(e)}
              />
                <FormText>Minimum eight characters, at least one uppercase letter one lowercase letter and one number</FormText>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Confirm Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                valid={ this.state.validate.confirmPasswordState === 'has-success' }
                invalid={ this.state.validate.confirmPasswordState === 'has-danger' }
                onChange={ (e) => this.validateConfirmPassword(e)}
              />
            </FormGroup>
          </Col>
          <Button className="btn btn-primary btn-large centerButton" type="submit">Send</Button>
        </Form>
      </Container>
    )
  }
}

export default Registration