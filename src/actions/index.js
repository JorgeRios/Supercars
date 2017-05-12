import { TEST_BUTTON, LOGIN_SUCCESS, MAKE_LOGIN, 
	USUARIO_TEXT, PASSWORD_TEXT, BRING_CARS, 
	GET_ROWS, LOG_OUT, LOG_OUT_SUCCESS, 
	CAR_DETAIL, CAR_SUCCESS, SELECT_CAR } from '../constants/constants.js';

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


export const logout = (token)=> {
  console.log("si llego a primer action logut");
  return {
    type: LOG_OUT,
    token
  }
}

export const logOutSuccess = ()=> {
  return {
    type: LOG_OUT_SUCCESS,
    token: ""
  }
}

export const carDetail = (car)=> {
  log("entro en car detail "+ car);
  return {
    type: CAR_DETAIL,
    car: car
  }
}

export const carSuccess = (detail)=> {
  return {
    type: CAR_SUCCESS,
    detail,
  }
}

export const selectCar = (car)=> {
  console.log("entro en select_car "+ car);
  return {
    type: SELECT_CAR,
    car,
  } 
}
