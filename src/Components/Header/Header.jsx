import React, { Component } from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="head">
        <div className="navTop">
          <ul>
            <li>Bonjour</li>
            <li>Hello</li>
            <li>Buenos días</li>
            <li>Nǐ hăo</li>
            <li>добър ден</li>
            <li><img src="http://img4.hostingpics.net/pics/150374flagImg.png"/></li>
          </ul>
        </div>
        <div className="header">
          <p>French Station</p>
          <input className="search" type="text" class="form-control" placeholder="Rechercher une ressource..."></input>

        </div>
      </div>
    );
  }
}

export default Header;
