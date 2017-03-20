import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="container" id="footer">
        <div className="row" id="footerMain">
          <div className="col-xs-6 col-sm-4" id="footer1">
            <ul className="footer11">
              <h4><b>FRENCH STATION</b></h4>
              <li className="list0">Any other questions?</li>
              <li className="list"><a href="">+33 763528946</a></li>
              <li className="list0">2017 French</li>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-4" id="footer2">
            <ul className="footer21">
              <li className="list2"><a href="">Contact</a></li>
              <li className="list2"><a href="">About</a></li>
              <li className="list2"><a href="">Help</a></li>
              <li className="list2"><a href="">Copyright</a></li>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-4" id="footer3">
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
