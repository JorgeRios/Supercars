import React, {Component} from 'react';
import {connect} from 'react-redux';
import { clickButton, makeLogin, handleInput } from '../actions';
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

const probando = ()=> (
  <div>sii</div>
)
class Home extends Component {

  render() {
    const {token, dispatch} = this.props;
    console.log("token"+ token)
    console.log(token === "")
    return <div><br/><br/><br/><br/>
      Este es el Home
      <button onClick={(e) => dispatch(clickButton())}>Probando</button>
      <br/>
      { token === "" ?
        <LoginForm style ={formStyle}  onChange={(e)=> dispatch(handleInput(e))} onClick={() => dispatch(makeLogin())} />
	: <div>estas logeado</div>
      }
      </div>
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token
  }
}
export default connect(mapStateToProps)(Home);
