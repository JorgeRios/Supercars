import {takeEvery, call, put, select} from 'redux-saga/effects';
import {TEST_BUTTON} from '../constants/constants.js';
import {successButton} from '../actions';



const log = (msg)=> {console.log(msg)};

const tryTest = function* () {
  log("entro en el trytest");
  let val = yield fetch("http://10.0.1.199:5000/prueba");
  let res = val.json();
  log("viendo el resultado");
  log(res.results); 
  yield(successButton(res.results));
}

const loginSaga = function* () {
  log("arranca la saga");
  yield takeEvery(TEST_BUTTON, tryTest);
}


export default loginSaga;
