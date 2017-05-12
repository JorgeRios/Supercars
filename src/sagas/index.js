import {takeEvery, call, put, select} from 'redux-saga/effects';
import { TEST_BUTTON, MAKE_LOGIN, LOGIN_SUCCESS, BRING_CARS, LOG_OUT, CAR_DETAIL, CAR_SUCCESS } from '../constants/constants.js';
import { successButton, loginSuccess, getRows, logOutSuccess, carSuccess } from '../actions';



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

const logOut = function* (props){
  console.log("saga LOG_OUT", props);
  let method = {method: 'DELETE', body: JSON.stringify({usuario: props.token.usuario, id:props.token.id})};
  let request = "http://127.0.0.1:5555/api/token";
  let p = yield fetch(request, method);
  let r = yield p.json();
  console.log("terminando el fetch en logut")
  yield put(logOutSuccess())
  
}

const getCar = function* (props) {
  let request = `http://127.0.0.1:5555/api/car?id=${props.car}`;
  let state = yield select();
  let filter  = yield state.cars.filter((item)=>{if(item.id === props.car){return true}});
  let [car] = filter;
  let p = yield fetch(request);
  let result = yield p.json();
  console.log("viendo antes de dar a reducer "+result.features[0]);
  yield put(carSuccess(result.features[0]))
  //yield put({type: CAR_SUCCESS, result, "car": car});

}

const loginSaga = function* () {
  log("arranca la saga");
  yield takeEvery(MAKE_LOGIN, login);
  yield takeEvery(BRING_CARS, getCars);
  yield takeEvery(LOG_OUT, logOut);
  yield takeEvery(CAR_DETAIL, getCar);
}


export default loginSaga;
