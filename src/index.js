import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import Index from './routes/index';
import './index.css';
import store from './store';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
  <Router>
  	<Index />
  </Router>
  </Provider>,
  document.getElementById('root')
);
