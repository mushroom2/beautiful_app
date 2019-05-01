import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText
} from 'reactstrap';

import axios from 'axios';
import Utils from '../utils'

let u = new Utils();
class Login extends Component {
  constructor(props){
    super(props);
      this.state = {
          'password': '',
          'username': ''
      }
    this.setLogin = this.setLogin.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  setLogin(e) {
  this.setState({'username': e.target.value})
  }

  setPassword(e){
    this.setState({'password': e.target.value})
  }



  formSubmit(e){
    e.preventDefault();
    axios.post('/api/v1/accounts/login/', {
      "login": this.state.username,
      "password": this.state.password
    }, {headers: {'X-CSRFToken':u.getCookie('csrftoken')}}).then(function (res) {
        console.log(res);
        window.location = '/front/gallery'
        //console.log(getCookie('csrftoken'))
    }).catch(function (err) {
        console.log(err)
    })

  }

  render(){
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form className="form" onSubmit={ (e) => this.formSubmit(e)}>
          <Col>
            <FormGroup>
              <Label>Login</Label>
              <Input
                type="text"
                name="login"
                id="loginLogin"
                onChange={ (e) => this.setLogin(e)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                onChange={ (e) => this.setPassword(e)}
              />
            </FormGroup>
          </Col>
          <Button className="btn btn-primary btn-large centerButton" type="submit">Login</Button>
        </Form>
      </Container>
    )
  }
}

export default Login