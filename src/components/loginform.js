import React, { Component } from 'react';
import { Button, Jumbotron, Input } from 'reactstrap';
import { makeLogin } from '../actions';


const check = (val)=> {
  makeLogin
}

const form = (props)=> (
  <Jumbotron  style={props.style}>
  <Input type="text" placeholder="usuario" id="usuario" onChange={(e) => props.onChange(e)}/>
  <br/>
  <Input type="password" id="password" placeholder="password" onChange={(e) => props.onChange(e)}/>
  <br/>
  <Button tag="submit" color="success" size="large" onClick={(e) => props.onClick()}>Login </Button>
 </Jumbotron>
)
export default form

