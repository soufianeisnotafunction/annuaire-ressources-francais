import React, { Component } from 'react';
import './footer.css';
import FontAwesome from 'react-fontawesome'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerMain">
          <div className="footer1">
            <ul className="footer1.1">
              <li className="list"><FontAwesome name='contact' />Contact</li>
              <li className="list">About</li>
              <li className="list">Help</li>
            </ul>
          </div>
          <div className="footer2">
            <ul className="footer2.1">
              <li className="list2">Contact</li>
              <li className="list2">About</li>
              <li className="list2">Help</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
