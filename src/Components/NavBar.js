import React, { Component } from 'react';



class NavBar extends Component {

    render() {


        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="navBarBox">
                        <div>
                            <a href="/" title="Home">
                                <div className="d-shadow">
                            </div></a>
                        </div>
                        <div id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li>
                                    <a href="/projects">
                                        <span className="fa fa-code navIcon"></span>
                                        <span className="navLabel">Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/resume">
                                        <span className="fa fa-id-card-o navIcon"></span>
                                        <span className="navLabel">Resume</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact">
                                        <span className="fa fa-envelope-o navIcon"></span>
                                        <span className="navLabel">Contact Me</span>
                                    </a>
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