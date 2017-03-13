import React, { Component } from 'react';
import Footer from './Footer/footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <button type="button" className="btn btn-info">Info</button>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
