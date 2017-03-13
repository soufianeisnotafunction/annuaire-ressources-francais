import React, { Component } from 'react';
import Cards from './components/Cards.jsx';
import Login from './components/Login.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cards />
        <Login />
      </div>
    );
  }
}

export default App;
