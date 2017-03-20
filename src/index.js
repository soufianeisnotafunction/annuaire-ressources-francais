import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';
import Login from './components/admin/Login.jsx';
import Form from './components/Form/Form.jsx';
import Plateform from './components/Plateform/Plateform.jsx';
import DeleteList from './components/delete/DeleteList';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={Login}/>
    <Route path="/form" component={Form}/>
    <Route path="/plateform" component={Plateform}/>
    <Route path="/delete" component={DeleteList}/>
  </Router>
), document.getElementById('root'))
