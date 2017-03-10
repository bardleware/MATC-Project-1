import React, { Component } from 'react';


class Projects extends Component {
    render() {
        const projects = [
            {
                "id": 1.1,
                "name": "Brain Checklist v1",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "codeLink": "#",
                "tryMeIcon":"fa fa-code",
                "seeCodeIcon":"fa fa-code-fork",
                "projectLink": "http://devansprojects.net/projects/brain-checker-v1/AmenTest.html",
                "about": "The Brain Checklist was initially created as a project in Java. Seeing the benefits of having a web based version of this checklist, I began adapting the code for use on the web. As you will soon see the css is broken and I have not made time to fix it as the question array changed and as I have learned more about JavaScript."
            },
            {
                "id": 1.2,
                "name": "Brain Checklist v2.1",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "codeLink": "#",
                "tryMeIcon":"fa fa-code",
                "seeCodeIcon":"fa fa-code-fork",
                "projectLink": "http://devansprojects.net/projects/brain-checker-v2/brainchecker.html",
                "about": "This Iteration of the Brain Checklist was created after I learned more about JavaScript and obtained the correct questions from the company I am working with to develop this app. The CSS has been updated and I have utilized the Bootstrap design framework to make the styling nicer to look at. This version does not have 100% functionality and would still require some additional JavaScript to be considered completely finished. While the app does have some way to go, I feel it provides a good example of my educational development in learning front end web development."
            },
            {
                "id": 1.3,
                "name": "Brain Checklist v3",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "codeLink": "#",
                "tryMeIcon":"fa fa-code",
                "seeCodeIcon":"fa fa-code-fork",
                "projectLink": "#",
                "about": "This iteration of the Brain Checklist takes all that I have learned about JavaScript to create an optimized version of what I have already created. This version will re-enforce the concepts of objects, closure scope, and mobile compatiblity as this will primarily be used on mobile devices. The links are currently broken as I am still updating the code"
            },
            {
                "id": 2,
                "name": "Email Generator",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "codeLink": "#",
                "tryMeIcon":"fa fa-code",
                "seeCodeIcon":"fa fa-code-fork",
                "projectLink": "http://devansprojects.net/projects/email-generator/app.html",
                "about": "I created this email generator as a simple tool to help me send emails to customers when I worked at 1800Contacts. I was not able to finish it completely, but it is an initial mock up of what I wanted to accomplish. This app re-enforced the concepts of DOM manipulation, String concatenation, and reusable code. "
            },
            {
                "id": 3,
                "name": "Random Quote Generator v1",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "codeLink": "#",
                "tryMeIcon":"fa fa-code",
                "seeCodeIcon":"fa fa-code-fork",
                "projectLink": "http://devansprojects.net/projects/quoter/app.html",
                "about": "This Quote Generator was part of the curriculum of Free Code Camp. It utilizes JQuery and accessing an api which returns a JSONP document which is then utilized to display the data. I also make use of a Twitter API to allow the user to send a quote through a page redirection. I did follow a tutorial to complete this project. However, in future updates, a CSS randomizer will be added so that when a user \"gets\" a new quote the color theme would update as well."
            },
            {
                "id": 4,
                "name": "FCC - Tribute Page",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "codeLink": "http://codepen.io/bardleware/pen/begyLg",
                "tryMeIcon":"fa fa-codepen",
                "seeCodeIcon":"fa fa-codepen",
                "projectLink": "http://codepen.io/bardleware/pen/begyLg",
                "about": "This is codepen was created as one of my first projects from Free Code Camp. The project introduced me to user stories, HTML div's and CSS styling with Bootstrap"
            },
            {
                "id": 5,
                "name": "Map Randomizer",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "codeLink": "#",
                "tryMeIcon":"fa fa-code",
                "seeCodeIcon":"fa fa-code-fork",
                "projectLink": "http://devansprojects.net/projects/map-randomizer/pindrop.html",
                "about": "This project was used in my studies at MATC in preparation for a golf scorecard app we will be making as part of the curriculum. This project demonstrates the concepts of using math.random() to randomly place map pins on a map or image that is provided."
            },
            {
                "id": 6,
                "name": "Wage Calculator",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "codeLink": "#",
                "tryMeIcon":"fa fa-code",
                "seeCodeIcon":"fa fa-code-fork",
                "projectLink": "http://devansprojects.net/projects/wage-calculator/wageCalculator.html",
                "about": "I created this Wage calculator as a fun little app to help me budget. This app taught me about the JavaScript number\"NaN\" and how to format money."
            }
        ]

        var projList = projects.map(function (obj) {
            return(
                <div key={obj.id} className="projectBlock">
                    <div className="projTitle">
                        <p className="projName">{obj.name}</p>
                    </div>
                    <div className="btn-block-container">
                        <a className="btn btn-flex btn-success" href={obj.projectLink} target="_blank"><span className={obj.tryMeIcon}></span> Try me</a>
                        <a className="btn btn-flex btn-default" href={obj.codeLink} target="_blank"><span className={obj.seeCodeIcon}></span> See the code</a>
                    </div>
                <p className="aboutSpace">{obj.about}</p>
            </div>
            )
        })


        return (

            < div >
                <div className="jumbotron">
                    <div className="container text-center">
                        <h1>Projects</h1>
                        <p>A Sampling of my best projects</p>
                    </div>
                </div>
                <div className="projectsContainer">
                    {projList}
                </div>
            </div >

        );
    }
}
//<img src={obj.thumb} className="img-responsive thumb" alt="placeHolder"></img>
export default Projects;
