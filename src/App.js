import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import React, { Component } from 'react';
import Cards from './components/Cards.jsx';
import Login from './components/admin/Login';
import Footer from './Footer/footer.js';


class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
        <Menu />
        <Cards />
        <Footer></Footer>
      </div>


    );
  }
}

export default App;
