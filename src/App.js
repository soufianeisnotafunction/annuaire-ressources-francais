import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import React, { Component } from 'react';
import Cards from './Components/Cards.jsx';
import Login from './Components/admin/Login';
// import { Link} from 'react-router';



class App extends Component {
  constructor(){
    super();
    this.state = { data:[]}

  }
  componentDidMount(){
    fetch('http://localhost:8080/api/ress')
            .then(result=> {
                this.setState({data:[result.json()]});
            });
    }
  render() {
console.log(this.state.data);
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
