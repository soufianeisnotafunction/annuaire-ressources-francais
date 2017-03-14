import React, { Component } from 'react';
import './footer.css';
<link rel="stylesheet" href="https://opensource.keycdn.com/fontawesome/4.7.0/font-awesome.min.css" integrity="sha384-dNpIIXE8U05kAbPhy3G1cz+yZmTzA6CY8Vg/u2L9xRnHjJiAK76m2BIEaSEV+/aU" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

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
              <li className="list2"><i class="fa fa-twitter" aria-hidden="true"></i></li>
              <li className="list2"></li>
              <li className="list2"></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
