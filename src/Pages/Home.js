/* eslint-disable */
import React, { Component } from 'react';
//import logo from '';
import Skills from '../Components/About-Me/Skills';
import '../style/home.css';

class Home extends Component {
    
    //<Skills skills={skills}/>
    render() {
        return (
            <div>
                <img className="profile-pic" src="http://devansprojects.net/img/profile-pic.jpg" alt="Picture of Devan"></img>
                <h3>Hello!</h3>
                <p className="aboutMe">I am a full stack web developer currently attending a Web developer course at MATC in Lehi, UT where I am fine tuning and learing more about web development.</p>

                <p className="aboutMe">I have been working on learning how to code and program in my free time with plans to return to college to earn a degree in Computer Science from Utah Valley Unversity in Orem, UT.</p>

                <p></p>
            </div>


        );
    }
}

export default Home;
