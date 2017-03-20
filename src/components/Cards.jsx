import React, { Component } from 'react';
import './cards.css';
import img from './img/visu.jpg';



export default class Cards extends Component {

  render() {
      const {img, titre, niveau, age, format, langue, description, thumbnails1 , thumbnails2, thumbnails3  , key , id } = this.props;
    return (
        <div className="containerCards">
            <div className="panel-group  flex-column justify-content-between col-md-9" id={`accordion${id}`}>
              <div className="panel panel-default">
                <div className="panel-heading justify-content-between ">
                    <div className="img-title d-flex justify-content-between">
                        <div className="img-principal">
                            <img src={img} className="img img-thumbnail img-responsive" alt="Logo" />
                        </div>
                        <div className="title flex-wrap text-center  ">
                            <h4 className="panel-title ">
                              <p>{titre} <a data-toggle="collapse" data-parent={`#accordion${id}`} href={`#collapse${id}`}><img className="arrow" src="https://www.smartbracket.io/images/down%20arrow.png"/></a></p>
                            </h4>
                            <div className='items d-flex d-flex align-items-center'>
                                <div className=" row sub-title justify-content-between  ">
                                  <h5 >{niveau}</h5>
                                  <h5>{age}</h5>
                                  <h5>{format}</h5>
                                  <h5>{langue}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={`collapse${id}`} className="panel-collapse collapse in">
                  <div className="panel-body d-flex justify-content-center flex-wrap justify-content-center ">
                        <div className="three-img d-flex justify-content-around align-items-center ">
                            <img src={thumbnails1} className=" grid justify-content-between img-responsive" alt="Logo" />
                            <img src={thumbnails2} className=" grid justify-content-between img-responsive" alt="Logo" />
                            <img src={thumbnails3} className=" grid justify-content-between img-responsive" alt="Logo" />
                        </div>
                        <p className="text-left descriptif ">{description}</p>
                  </div>
                </div>
              </div>

        </div>
  </div>
    );
  }
}
