import { TEST_BUTTON, LOGIN_SUCCESS, MAKE_LOGIN, 
	USUARIO_TEXT, PASSWORD_TEXT, BRING_CARS, 
	GET_ROWS } from '../constants/constants.js';

const log = (msg) => console.log(msg);


export const clickButton = () => {
  log("entrando en accion clickButton");
  return {
    type: TEST_BUTTON
  }
}

export const makeLogin = () => {
  console.log("entro en action makeLogin");
  return {
    type: MAKE_LOGIN
  }
}


export const loginSuccess = (token) =>{
  console.log("en login succes "+ token);
  return {
    type: LOGIN_SUCCESS,
    token: token
  }
}

export const handleInput = (what) => {
  let input = what.target.id;
  let val = what.target.value;
  console.log("sin entro en actions");
  return {
    type: input === "usuario" ? USUARIO_TEXT : PASSWORD_TEXT,
    val
  }
  
}

export const successButton = (token) => {
  log("viendo successbutton en actions temrina el ciclo");
  log(token);
  return {
    type: LOGIN_SUCCESS,
    token
  }
}

export const bringCars = (tipo) => {
  return {
    type: BRING_CARS,
    tipo
  }
}


export const getRows = (rows)=> {
  return {
    type: GET_ROWS,
    rows
  }
}
