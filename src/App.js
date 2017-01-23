import React, { Component } from 'react';
//import react-bootstrap
import './style/App.css';
import './style/theme-bootstrap.css';

import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';

import NavBar from './Components/NavBar'

class App extends Component {
    
    render() {
        return (
            <div className="App">
                <NavBar />
                <Home />
                <Projects projects="this.state.projects"/>
                <Resume />
                <Contact />
            </div>
        );
    }
}

export default App;
