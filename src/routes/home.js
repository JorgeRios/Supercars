import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { clickButton, makeLogin, handleInput, logout } from '../actions';
import { withGoogleMap } from "react-google-maps";
import LoginForm from '../components/loginform';

const log = (msg) => console.log(msg);

const prueba = (e)=> {
  console.log("en action prueba de routa");
  console.log(e.target.value);
}

const formStyle = {
  width: '50%',
  align: 'center',
  margin: '5%'
}

const Yeah = styled.section`
padding: 20px;
background: #FFFF50;
border-radius: 5px;
width:50%;
&:hover {
  box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
}
`;


const probando = ()=> (
  <div>sii</div>
)

const Wacha = ()=> {
  let a=1;
  let b=2;
  let c =a+b;
  return (
  <div>este es wacha {c}</div>
  )
}
class Home extends Component {

  render() {
    const {token, dispatch} = this.props;
    console.log("token"+ token)
    console.log(token === "")
    return <div><br/><br/><br/><br/>
      <br/>
      { token === "" ?
        <LoginForm style ={formStyle}  onChange={(e)=> dispatch(handleInput(e))} onClick={() => dispatch(makeLogin())} />
	: <button onClick={()=> dispatch(logout(token))}>Log out</button>
      }
      </div>
  }
  componentDidMount() {
    const {token, dispatch} = this.props;
    console.log("en didtmount viendo el token", token);
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token
  }
}
export default connect(mapStateToProps)(Home);
