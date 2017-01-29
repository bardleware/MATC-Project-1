import React, { Component } from 'react';

import { Router, Route, browserHistory } from 'react-router';



import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';

import NavBar from './Components/NavBar'

class App extends Component {

    render() {
        return (
            <Router history={browserHistory}>
                <Route component={NavBar}>
                    <Route path="/" component={Home} />
                    <Route path="projects" component={Projects} />
                    <Route path="resume" component={Resume} />
                    <Route path="contact" component={Contact} />
                </Route>
            </Router>
        );
    }
}

export default App;
