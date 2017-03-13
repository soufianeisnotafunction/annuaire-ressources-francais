import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import React, { Component } from 'react';
import Cards from './Components/Cards.jsx';
import Login from './Components/admin/Login';



class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
        <Menu />
        <Cards />
      </div>


    );
  }
}

export default App;
