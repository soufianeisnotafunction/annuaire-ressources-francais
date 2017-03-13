import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import React, { Component } from 'react';
<<<<<<< HEAD
import Footer from './Footer/footer.js';
=======
import Cards from './Components/Cards.jsx';
import Login from './Components/admin/Login';

>>>>>>> 00d693cce8f23be29fa6f12a06641a36ed257aa5


class App extends Component {
  render() {
    return (

      <div className="App">
<<<<<<< HEAD
        <button type="button" className="btn btn-info">Info</button>
        <Footer></Footer>
=======
        <Header />
        <Menu />
        <Cards />
>>>>>>> 00d693cce8f23be29fa6f12a06641a36ed257aa5
      </div>


    );
  }
}

export default App;
