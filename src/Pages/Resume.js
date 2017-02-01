/* eslint-disable */import React, { Component } from 'react';
import VCard from '../Components/VCard';

class Resume extends Component {
    render() {
       const skills = [
                   {
                       "Label": "JavaScript",
                       "value": 210
                   },
                   {
                       "label": "HTML5",
                       "value": 184
                   }

       ];
        /*const employment = [];
        const education =[];
        */
        return (
            <div className="resume">
            <div className="resumeHeader">
                <h1 id="rTitle">Devan Sisson</h1>
                <VCard />
            </div>
                

                <div id="mission">
                    <h2>My Mission</h2>
                    <hr />
                    <p>Optimistic, detail oriented, creative problem solver seeking opportunities to obtain employment that will enable him to make a difference in the lives of the people he serves, allow him to have adequately challenging employment while finishing his education and provide for his family.</p>
                </div>
                <div id="skills">
                        <h2>Skills</h2>
                        <hr/>

                </div>

                <div id="employment">

                </div>

                <div id="education">

                    <h2>Education</h2>
                    <hr/>
                    <div>
                        <h3>Free Code Camp</h3>
                        <p>Full Stack Web Developer</p>
                        <span><em>Finishing September 2017</em></span>
                        <div className="skillList">
                            <div className="skill">JavaScript:
                                <ul>
                                    <li>nodeJS</li>
                                    <li>ReactJS</li>
                                    <li>JQuery</li>
                                    <li>Basic JavaScript</li>
                                </ul>
                            </div>
                            <div className="skill">CSS:
                                <ul>
                                    <li>Selectors</li>
                                    <li>Theming</li>
                                    <li>Bootstrap</li>
                                    <li>Basic Media Queries</li>
                                </ul>
                            </div>
                            <div className="skill">HTML5:
                            <ul>
                                <li>div layout</li>
                                <li>DOM Manipulation</li>
                            </ul>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Resume;


 //<div id="projects"> </div>