import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Index from './routes/index';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(
  <Router>
  	<Index />
  </Router>,
  document.getElementById('root')
);
