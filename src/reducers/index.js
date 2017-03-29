const log = (msg)=> console.log(msg);
import {SUCCESS_LOGIN} from '../constants/constants.js';

const initialState = {
  token: ''
};

export default (state = initialState, action)=> {
  switch(action.type) {
  case SUCCESS_LOGIN:
    log("en reducer success_login");
    return {
      ...state,
      token: action.token
    }
  }
}
