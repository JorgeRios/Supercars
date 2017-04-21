import {takeEvery, call, put, select} from 'redux-saga/effects';
import { TEST_BUTTON, MAKE_LOGIN, LOGIN_SUCCESS, BRING_CARS } from '../constants/constants.js';
import { successButton, loginSuccess, getRows } from '../actions';



const log = (msg)=> {console.log(msg)};

const tryTest = function* (data = "") {
  log("entro en el trytest");
  //let val = yield fetch("http://127.0.0.1:5000/prueba");
  let val = yield fetch("http://127.0.0.1:5555/api/helloworld");
  let res = yield val.json();
  log("viendo el resultado");
  log(res); 
  yield(successButton(res.results));
}

const login = function* () {
  let state  = yield select();
  
  log("entro en login");
  let request = { method: 'POST', 
	  body: JSON.stringify({ usuario: state.usuario, password: state.password })
  };
  let val = yield fetch("http://127.0.0.1:5555/api/token", request);
  let rjson = yield val.json();
  console.log("viendo rjson "+ Object.keys(rjson));
  console.log(rjson.usuario.token)

  yield put(loginSuccess(rjson.usuario));
}

const getCars = function* (action) {
  let method = {method: 'GET'};
  let request = "http://127.0.0.1:5555/api/cars/"+action.tipo;
  console.log(request);
  let p = yield fetch(request, method);
  let result = yield p.json();
  console.log("tipo es"+ typeof(result.data));
  yield put(getRows(result));
}

const loginSaga = function* () {
  log("arranca la saga");
  yield takeEvery(MAKE_LOGIN, login);
  yield takeEvery(BRING_CARS, getCars);
}


export default loginSaga;
