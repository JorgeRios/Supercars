const log = (msg)=> console.log(msg);
import { LOGIN_SUCCESS, USUARIO_TEXT, PASSWORD_TEXT, GET_ROWS } from '../constants/constants.js';

const initialState = {
  token: '',
  usuario: '',
  password: '',
  cars: []
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
    console.log(action.rows.data)
    return {
      ...state,
      cars: action.rows.data
    }
    default:
     return state
  }
 
}
