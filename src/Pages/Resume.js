/* eslint-disable */
import React, {Component} from 'react';
import VCard from '../Components/VCard';

class Resume extends Component {
    render() {
        const skills = [
            {
                "styleClass": "skillContainer",
                "key": 1,
                "logoStyle": "sklLogo devicon-javascript-plain colored",
                "skillName": "JavaScript",
                "ratingKind": "Pluralsight",
                "rating": 210
            },
            {
                "styleClass": "skillContainer",
                "key": 2,
                "logoStyle": "sklLogo devicon-html5-plain colored",
                "skillName": "HTML5",
                "ratingKind": "Pluralsight",
                "rating": 184
            },
            {
                "styleClass": "skillContainer",
                "key": 3,
                "logoStyle": "sklLogo devicon-css3-plain colored",
                "skillName": "CSS3",
                "ratingKind": "Pluralsight",
                "rating": 86
            },
            {
                "styleClass": "skillContainer",
                "key": 4,
                "logoStyle": "sklLogo devicon-angularjs-plain colored",
                "skillName": "AngularJS",
                "ratingKind": "Pluralsight",
                "rating": 150
            }

        ];
        /*const employment = [];
         const education =[];
         */
        function ratingStyle(obj){
            let val = obj.rating;
            let place = obj.ratingKind;

            if (place !== "Pluralsight"){
                return {color: '#ffffff'}
            }

            if (val <= 100 ){
                return {color:'#ffc61a'};
            }
            else if (val <= 200 ){
                return {color:'#00cc00'};
            }
            else{
                return {color:'#1ac6ff'};
            }
        }
        let sklList = skills.map(function (obj) {
            return(
                <div key={obj.key}className={obj.styleClass}>
                    <div className="p-1">
                        <span className={obj.logoStyle}></span>
                    </div>
                    <span className="p-1">{obj.skillName}</span>
                    <span className="p-1">{obj.ratingKind} Score</span>
                    <p className="rating p-1" style={ratingStyle(obj)}>{obj.rating}</p>
                    <div className="p-1 codeBubble">
                        <span className="fa fa-code codeLink"></span>
                    </div>
                </div>
            )
        });
        return (
            <div className="resume">
                <div className="resumeHeader">
                    <h1 id="rTitle">Devan Sisson</h1>
                    <VCard />
                </div>


                <div id="mission">
                    <h2>My Mission</h2>
                    <hr />
                    <p>Optimistic, detail oriented, creative problem solver seeking opportunities to obtain employment
                        that will enable him to make a difference in the lives of the people he serves, allow him to
                        have adequately challenging employment while finishing his education and provide for his
                        family.</p>
                </div>
                <div id="skills">
                    <h2>Skills</h2>
                    <hr/>
                    <div className="skillList">
                        {sklList}
                    </div>
                </div>

                <div id="employment">

                </div>

                <div id="education">

                    <h2>Education</h2>
                    <hr/>
                    <div>
                        <a className="eduLink" href="https://www.freecodecamp.com/" target="_blank">
                            <div className="container-edu">
                                <div className="fccBack iconLink">
                                    <span className="fccLink fa fa-free-code-camp"></span>
                                </div>
                                <div>
                                    <h3 className="fcc">Free Code Camp</h3>
                                </div>
                            </div>
                        </a>

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