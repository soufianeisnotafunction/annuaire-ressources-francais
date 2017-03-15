import React, { Component } from 'react';
import './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div className="contMenu">
        <div className="menu">

          <div className="Sort">

            <ul id="menu">
              <li><a className="title" href="#">NIVEAU</a>
              <ul>
                {/* <img className="imglvl" src="http://img4.hostingpics.net/pics/245609lvlImg.png"></img> */}
                <img className="imgMenu1" src="http://img4.hostingpics.net/pics/666393levlImg.jpg"></img>
                <li><a href="#" className="backLi"><p>Débutant</p></a></li>
                <li><a href="#" className="backLi"><p>Intermédiaire</p></a></li>
                <li><a href="#" className="backLi"><p>Avancé</p></a></li>
              </ul>
            </li>
            <li><a className="title" href="#">AGE</a>
            <ul>
              <img className="imgMenu1" src="http://img4.hostingpics.net/pics/567954ageImg.jpg"></img>
              <li><a href="#" className="backLi"><p>12-15</p></a></li>
              <li><a href="#" className="backLi"><p>16-18</p></a></li>
              <li><a href="#" className="backLi"><p>18+</p></a></li>
            </ul>
          </li>
          <li><a className="title" href="#">FORMAT</a>
          <ul>
            <img className="imgMenu2" src="http://img4.hostingpics.net/pics/952715platImg.jpg"></img>
            <li><a href="#" className="backLi"><p>Web</p></a></li>
            <li><a href="#" className="backLi"><p>App</p></a></li>
          </ul>
        </li>
          <li><a href="#">LANGUE</a>
          <ul>
            <img className="imgMenu2" src="http://img4.hostingpics.net/pics/838179langImg.jpg"></img>
            <li><a href="#" className="backLi"><p>Francais</p></a></li>
            <li><a href="#" className="backLi"><p>Anglais</p></a></li>
          </ul>
        </li>
      </ul>

    </div>

        </div>
      </div>
    );
  }
}

export default Menu;
