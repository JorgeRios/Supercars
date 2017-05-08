import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from '../reducers';
import {initialState} from '../reducers';
import loginSaga from '../sagas/index'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

sagaMiddleware.run(loginSaga);
export default store;
