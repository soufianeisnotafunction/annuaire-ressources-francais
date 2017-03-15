import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import React, { Component } from 'react';
import Cards from './components/Cards.jsx';
<<<<<<< HEAD
import Login from './components/admin/Login.jsx';
import Footer from './Footer/footer.js';
import Card from './components/Cards.jsx';
import Login from './components/admin/Login.jsx';
=======
import Login from './components/admin/Login';
>>>>>>> 85b98e96873db270835de98b9079134d54b6e899
// import { Link} from 'react-router';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {data:[]}

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
       <Cards img={el.img} titre={el.titre} niveau={el.niveau} age={el.age} format={el.format} langue={el.langue} description={el.description} thumbnails={el.thumbnails} />
      )
    })
  }
  render() {
// console.log(this.state.data);
console.log(this.state.data[0]);
let cards = this.renderCards();
    return (

      <div className="App">
        <Header />
        <Menu />
        <Cards />
        <Footer />
      </div>


    );
  }
}

export default App;
