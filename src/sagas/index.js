import {takeEvery, call, put, select} from 'redux-saga/effects';
import {TEST_BUTTON} from '../constants/constants.js';
import {successButton} from '../actions';



const log = (msg)=> {console.log(msg)};

const tryTest = function* () {
  log("entro en el trytest");
  let val = yield fetch("http://127.0.0.1:5000/prueba");
  let res = yield val.json();
  log("viendo el resultado");
  log(res); 
  yield(successButton(res.results));
}

const loginSaga = function* () {
  log("arranca la saga");
  yield takeEvery(TEST_BUTTON, tryTest);
}


export default loginSaga;
