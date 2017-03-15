import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import React, { Component } from 'react';
import Cards from './components/Cards.jsx';
import Login from './components/admin/Login';
import Footer from './Footer/footer.js';
import Cards from './components/Cards.jsx';
import Login from './Components/admin/Login';
// import { Link} from 'react-router';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {data:[]}

  }
  componentDidMount(){
    // `${window.location.pathname}/api/res`
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
