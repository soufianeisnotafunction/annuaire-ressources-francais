import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';
import Login from './components/admin/Login.jsx';
import Form from './components/Form/Form.jsx';
import Plateform from './components/Plateform/Plateform.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/Login" component={Login}/>
    <Route path="/Form" component={Form}/>
    <Route path="/Plateform" component={Plateform}/>
  </Router>
), document.getElementById('root'))
