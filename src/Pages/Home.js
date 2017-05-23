/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router';
import Skills from '../Components/About-Me/Skills';
import '../style/home.css';

class Home extends Component {

  render() {
    return (
      <div>
        <div className="home-header">
          <img className="profile-pic" src="https://s3-us-west-2.amazonaws.com/bardleware1/profile-square.png" alt="Picture of Devan"></img>
        <div className="navRow">
          <Link to="/projects">
            <div className="navButton">
              <div className="fa fa-code"></div>
              <div className="homeNavLabel">Projects</div>
            </div>
          </Link>
          <Link to="/resume">
            <div className="navButton">
              <div className="fa fa-id-card-o"></div>
              <div className="homeNavLabel">Resume</div>
            </div>
          </Link>
          <Link to="/contact">
            <div className="navButton">
              <div className="fa fa-envelope-o"></div>
              <div className="homeNavLabel">Contact Me</div>
            </div>
          </Link>
        </div>
          <h3>Hello, my name is Devan.</h3>
        </div>
        <div className="paraContainer">
          <div className="paraText">
            <p>I am a full stack web developer currently attending a Web developer course at MATC in Lehi, UT where I am fine tuning and learning more about web development.</p>

            <p>I have been working on learning how to code and program in my free time with plans to return to college to earn a degree in Software Development from Western Governor's University.</p>
          </div>
        </div>




      </div>


    );
  }
}

export default Home;
