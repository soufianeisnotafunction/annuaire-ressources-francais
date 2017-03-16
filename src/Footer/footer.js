import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (

      <div className="footer">
        <div className="footerMain">
          <div className="footer1">
            <ul className="footer11">
              <h4><b>FRENCH STATION</b></h4>
              <li className="list0">Any other questions?</li>
              <li className="list">+33 763528946</li>
              <li className="list0">2017 French</li>
            </ul>
          </div>
          <div className="footer2">
            <ul className="footer21">
              <li className="list2">Contact</li>
              <li className="list2">About</li>
              <li className="list2">Help</li>
              <li className="list2">Copyright</li>
            </ul>
          </div>
          <div className="footer3">
            <ul className="footer31">
              <li className="list3"><img className="imgFoot" src="http://www.clga.ca/sites/default/files/icons/twitter%20button.png" alt="Twitter"/></li>
              <li className="list3"><img className="imgFoot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/120px-Facebook_icon.svg.png" alt="Facebook"/></li>
              <li className="list3"><img className="imgFoot" src="https://www.lehigh.edu/google/google_search.png" alt="Google"/></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
