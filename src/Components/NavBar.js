import React, { Component } from 'react';



class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed });
        console.log(collapsed);
    }


    render() {

        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : "";

        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/" title="Home"><div className="d-shadow">
                            <span className="lastinitial">S</span>
                            </div></a>
                        </div>
                        <div className={"navbar-collapse " + navClass} id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><a href="/">Home</a></li>
                                <li><a href="/projects">Projects</a></li>
                                <li><a href="/resume">Resume</a></li>
                                <li><a href="/contact">Contact Me</a></li>
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