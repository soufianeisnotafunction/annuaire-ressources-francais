import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {
  render() {
    return (
      <div className="login col-lg-4 d-flex justify-content-center flex-wrap">
        <div className="email">
            <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
        </div>
        <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
        </div>
     </div>
    );
  }
}
