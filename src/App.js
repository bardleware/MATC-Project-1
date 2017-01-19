import React, { Component } from 'react';
//import react-bootstrap
import './App.css';
import './theme-bootstrap.css';

import Home from './Pages/Home';
import NavBar from './Components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Home />

      </div>
    );
  }
}

export default App;
