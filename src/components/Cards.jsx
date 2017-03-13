import React, { Component } from 'react';
import './cards.css';
import img from './img/visu.jpg';



export default class Cards extends Component {
  render() {
    return (
        <div className="container">
            <div className="panel-group  flex-column justify-content-between col-md-9" id="accordion">
              <div className="panel panel-default">
                <div className="panel-heading justify-content-between ">
                    <div className="img-title d-flex justify-content-between">
                        <div className="img-principal">
                            <img src={img} className="img img-thumbnail img-responsive" alt="Logo" />
                        </div>
                        <div className="title flex-wrap text-center  ">
                            <h4 className="panel-title ">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Titre 1</a>
                            </h4>
                            <div className='items d-flex d-flex align-items-center'>
                                <div className=" row sub-title justify-content-between  ">
                                  <h5 >Niveau</h5>
                                  <h5>Age</h5>
                                  <h5>Format</h5>
                                  <h5>Langue</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="collapse1" className="panel-collapse collapse in">
                  <div className="panel-body d-flex justify-content-center flex-wrap justify-content-center ">
                        <div className="three-img d-flex justify-content-around align-items-center ">
                            <img src={img} className=" grid justify-content-between img-responsive" alt="Logo" />
                            <img src={img} className=" grid justify-content-between img-responsive" alt="Logo" />
                            <img src={img} className=" grid justify-content-between img-responsive" alt="Logo" />
                        </div>
                        <p className="text-left descriptif ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                         dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident,
                         sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading justify-content-between ">
                    <div className="img-title d-flex justify-content-between">
                        <div className="img-principal">
                            <img src={img} className="img img-thumbnail img-responsive" alt="Logo" />
                        </div>
                        <div className="title flex-wrap text-center  ">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Titre 2</a>
                            </h4>
                            <div className='items d-flex align-items-center'>
                                <div className=" row sub-title justify-content-between  ">
                                  <h5 >Niveau</h5>
                                  <h5>Age</h5>
                                  <h5>Format</h5>
                                  <h5>Langue</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="collapse2" className="panel-collapse collapse in">
                  <div className="panel-body d-flex justify-content-center flex-wrap justify-content-center">
                        <div className="three-img d-flex justify-content-around align-items-center">
                            <img src={img} className=" grid justify-content-between img-responsive" alt="Logo" />
                            <img src={img} className=" grid justify-content-between img-responsive" alt="Logo" />
                            <img src={img} className=" grid justify-content-between img-responsive" alt="Logo" />
                        </div>
                        <p className="text-left descriptif ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                         dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident,
                         sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading justify-content-between ">
                    <div className="img-title d-flex justify-content-between">
                        <div className="img-principal">
                            <img src={img} className="img img-thumbnail img-responsive" alt="Logo" />
                        </div>
                        <div className="title flex-wrap text-center  ">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Titre 3</a>
                            </h4>
                            <div className='items d-flex align-items-center'>
                                <div className=" row sub-title justify-content-between  ">
                                  <h5 >Niveau</h5>
                                  <h5>Age</h5>
                                  <h5>Format</h5>
                                  <h5>Langue</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="collapse3" className="panel-collapse collapse in">
                  <div className="panel-body d-flex justify-content-center flex-wrap justify-content-center">
                        <div className="three-img d-flex justify-content-around align-items-center">
                            <img src={img} className=" grid justify-content-between img-responsive" alt="Logo" />
                            <img src={img} className=" grid justify-content-between img-responsive" alt="Logo" />
                            <img src={img} className=" grid justify-content-between img-responsive" alt="Logo" />
                        </div>
                        <p className="text-left descriptif ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                         dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident,
                         sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                  </div>
                </div>
              </div>
        </div>
  </div>
    );
  }
}
