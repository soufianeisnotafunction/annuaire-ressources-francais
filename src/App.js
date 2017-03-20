import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import React, { Component } from 'react';
import Footer from './Footer/footer.js';
import Cards from './components/Cards.jsx';

import Login from './components/admin/Login';
import Form from './components/Form/Form';
import Plateform from './components/Plateform/Plateform';






class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
    }

  }
  componentDidMount(){

    fetch(`${window.location.origin}/api/ress`)
    .then((res) =>{
      return res.json();
    })
    .then((json) =>{
      this.setState({
        data:json
      });
    });
  }

  renderCards(){
    return this.state.data.map((el, i) => {
      return(
       <Cards key={i} id={i} img={el.img} titre={el.titre} niveau={el.niveau} age={el.age} format={el.format} langue={el.langue} description={el.description} thumbnails1={el.thumbnails1} thumbnails2={el.thumbnails2} thumbnails3={el.thumbnails3}  />
      )
    })
  }
  render() {
let cards = this.renderCards();
    return (

      <div className="App">
        <Header />
        <Menu />
        {cards}
        <Footer />
      </div>


    );
  }
}

export default App;
