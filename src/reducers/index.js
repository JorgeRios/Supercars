const log = (msg)=> console.log(msg);
import { LOGIN_SUCCESS, USUARIO_TEXT, 
	PASSWORD_TEXT, GET_ROWS, 
	LOG_OUT_SUCCESS, CAR_SUCCESS, SELECT_CAR } from '../constants/constants.js';

const initialState = {
  token: '',
  usuario: '',
  password: '',
  cars: [],
  detail: [],
  car: ''
};

export default (state = initialState, action)=> {
  switch(action.type) {
    case LOGIN_SUCCESS:
      log("en reducer success_login");
      return {
        ...state,
        token: action.token
      }
    case USUARIO_TEXT:
    console.log("en usuario text");
    return {
      ...state,
      usuario: action.val
    }
    case PASSWORD_TEXT:
    console.log("en password text");
    return {
      ...state,
      password: action.val
    }
    case GET_ROWS:
    console.log("quiero get_rows  "+action.rows.data)
    return {
      ...state,
      cars: action.rows.data,
      calis: "desde reducer"
    }
    case LOG_OUT_SUCCESS:
    return {
      ...state,
      token: ''  
    }
    case SELECT_CAR:
    return {
      ...state,
      car: action.car
    }
    case CAR_SUCCESS:
    console.log("viendo este en reducer "+ action.detail)
    return {
      ...state,
      detail: action.detail,
    }
    default:
     return state
  }
}
