import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';
import Login from './components/admin/Login.jsx';
import Dashboard from './components/admin/Dashboard.jsx'
import Form from './components/Form/Form.jsx';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/Login" component={Login}/>
    <Route path="/Form" component={Form}/>
  </Router>
), document.getElementById('root'))
