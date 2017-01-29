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
                <div className="home-header">
                    <img className="profile-pic" src="http://devansprojects.net/img/profile-pic.jpg" alt="Picture of Devan"></img>
                    <h3>Hello, my name is Devan.</h3>
                </div>
                <div className="aboutMe">
                    <p >I am a full stack web developer currently attending a Web developer course at MATC in Lehi, UT where I am fine tuning and learing more about web development.</p>

                    <p >I have been working on learning how to code and program in my free time with plans to return to college to earn a degree in Software Development form Western Governor's University, or a degree in Coputer Science from Utah Valley University.</p>

                </div>



            </div>


        );
    }
}

export default Home;
