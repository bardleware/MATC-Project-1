import React, { Component } from 'react';
import Link from 'react-router';



class NavBar extends Component {

    render() {


        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="navBarBox">
                        <div>
                            <Link to="/" title="Home">
                                <div className="d-shadow"></div>
                            </Link>
                        </div>
                        <div id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/projects">
                                        <span className="fa fa-code navIcon"></span>
                                        <span className="navLabel">Projects</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/resume">
                                        <span className="fa fa-id-card-o navIcon"></span>
                                        <span className="navLabel">Resume</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        <span className="fa fa-envelope-o navIcon"></span>
                                        <span className="navLabel">Contact Me</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="children">
                    {this.props.children}

                </div>
            </div>
        );
    }
}

export default NavBar;