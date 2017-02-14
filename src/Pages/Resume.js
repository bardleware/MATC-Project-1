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
        const employment = [
            {
                iconStyles:{
                    bgColor: "orange",
                    border: "white"
                },
                Company: "Vivint Solar",
                Title: "PV Designer",
                Time: "4 Months",
                Dates: "November 2016 - Present",
                Duties: [
                    "Designed Photo-Voltaic systems for residential up to 100% power offset",
                    "Created and developed workflow used in training new hires"
                ]
            },
            {
                iconStyles:{
                    bgColor: "blue",
                    color: "white"
                },
                Company: "1-800-Contacts",
                Title: "Inbound Customer Service Agent",
                Time: "7 Months",
                Dates: "April 2016 - November 2016",
                Duties: [
                    "Built an basic email generator that improved the efficiency of sending customer requested emails",
                    "Passionately addressed each customer, owning the experience and catering a truly singular customer service experience",
                    "Averaged 75% of Quality Standards, meeting or exceeding expectations",
                    "Cultivated and enriched customer relationships, owning the relationship between 1-800-Contacts and the customer"
                ]
            },
            {
                iconStyles:{
                    bgColor: "blue",
                    color: "Yellow"
                },
                Company: "Best Buy",
                Title: "Computer Solution Expert",
                Time: "6 Months",
                Dates: "October 2015 - February 2016",
                Duties: [
                    "Built an basic email generator that improved the efficiency of sending customer requested emails",
                    "Passionately addressed each customer, owning the experience and catering a truly singular customer service experience"
                ]
            }
        ];



        const fcc = [ //free code camp
            "JavaScript",
            "HTML5",
            "CSS3",
            "Bootstrap",
            "JQuery"

        ];
        const matc = [
            {
                skill: "Git",
                status: true
            },
            {
                skill: "AngularJS In Progress",
                status: false
            },
            {
                skill: "Comming Soon: FireBase",
                status: false
            },

        ]


        function dutyList(arr) {

            let duties = arr.map(function (str, i) {
                return(
                    <li key={i}>{str}</li>
                );
            });

            return duties;
        }
        function iconStyler(arr) {
            return({
                backgroundColor : arr.bgColor,
                color : arr.color

            })
        }



        let jobList = employment.map(function(obj, i){
           return(
               <div key={i} className="jobBox">
                   <div className="companyInfo">
                       <div className="companyHeader">
                           <div style={iconStyler(obj.iconStyles)} className="companyIcon">
                           </div>
                           <div className="companyName">{obj.Company}</div>
                       </div>
                       <div className="infoBox">
                           <div className="jobTitle">{obj.Title}</div>
                           <div className="time datesWorked">{obj.Dates}</div>
                       </div>
                   </div>

                   <div className="jobDuties">
                       <ul>
                           {dutyList(obj.Duties)}
                       </ul>
                   </div>
               </div>
           )
        });

        function matcStyle(status) {
            let finish = status;
            if (!finish) {
                return {"font-style": "italic"};
            }
            else {
                return {"font-style": "normal"};
            }
        }

        let matcsklList = matc.map(function (obj, i) {
            return (
                <li key={i} style={matcStyle(obj.status)}>{obj.skill}</li>
            )
        })
        let fccsklList = fcc.map(function (arr, i) {

            return (
                <li key={i}>{arr}</li>
            )
        });

        function ratingStyle(obj) {
            let val = obj.rating;
            let place = obj.ratingKind;

            if (place !== "Pluralsight") {
                return {color: '#ffffff'}
            }

            if (val <= 100) {
                return {color: '#ffc61a'};
            }
            else if (val <= 200) {
                return {color: '#00cc00'};
            }
            else {
                return {color: '#1ac6ff'};
            }
        }

        let sklList = skills.map(function (obj) {
            return (
                <div key={obj.key} className={obj.styleClass}>
                    <div className="p-1">
                        <span className={obj.logoStyle}></span>
                    </div>
                    <span className="p-1">{obj.skillName}</span>
                    <span className="p-1">{obj.ratingKind} Score</span>
                    <p className="rating p-1" style={ratingStyle(obj)}>{obj.rating}</p>

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

                <div id="employment">
                    <h2>Employment</h2>
                    <hr/>
                    <div className="jobList">
                        {jobList}
                    </div>
                </div>

                <div id="education">
                    <h2>Education</h2>
                    <hr/>
                    <div id="schoolBoxes">

                        <div className="schoolBox">
                            <div className="linkBox">
                                <a className="eduLink"
                                   href="https://mlatc.edu/programs/web-programming-development/" target="_blank">
                                    <div className="container-edu">
                                        <img src="https://mlatc.edu/wp-content/uploads/MATC-Logo-Header.png"
                                             className="img-responsive" id="matcpic" alt="MATC logo"></img>
                                    </div>
                                </a>
                            </div>
                            <div className="degBox">
                                <p>Web Programming and Development</p>
                            </div>
                            <div className="timeBox">
                                <span><em>Finishing January 2018</em></span>
                            </div>
                            <div className="eduSkill">
                                <div className="skill">Skills:
                                    <ul>
                                        {matcsklList}
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="schoolBox">
                            <div className="linkBox">
                                <a className="eduLink" href="https://www.freecodecamp.com/" target="_blank">
                                    <div className="container-edu">
                                        <img
                                            src="https://softwareengineeringdaily.com/wp-content/uploads/2017/01/freecodecamp.jpeg"
                                            className="img-responsive" id="fcc" alt="MATC logo"></img>
                                    </div>
                                </a>
                            </div>

                            <div className="degBox">
                                <p>Full Stack Web Developer</p>
                            </div>
                            <div className="timeBox">
                                <span><em>In Progress</em></span>
                            </div>
                            <div className="eduSkill">
                                <div className="skill">Skills:
                                    <ul>
                                        {fccsklList}
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div id="skills">
                    <h2>Skills</h2>
                    <hr/>
                    <div className="columnFlexObj">
                        <div className="centerFlexObj">
                            <h3>Programming & Development</h3>
                        </div>
                        <div className="skillList">
                            {sklList}
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Resume;


//<div id="projects"> </div>