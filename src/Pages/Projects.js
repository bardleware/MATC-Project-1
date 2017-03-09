import React, { Component } from 'react';


class Projects extends Component {
    render() {
        const projects = [
            {
                "id": 1,
                "name": "Brain Checklist v0.2.1",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "codeLink": "#",
                "tryMeIcon":"fa fa-code",
                "seeCodeIcon":"fa fa-code-fork",
                "projectLink": "#",
                "about": "The Brain Checklist was initially created as a project in Java. \n\nSeeing the benefits of having a web based version of this checklist, I began adapting the code for use on the web. This version does not have 100% functionality and would still require some additional JavaScript to be considered completely finished. \n\nWhile the app does have some way to go, I feel it provides a good example of my educational development in learning front end web development."
            },
            {
                "id": 2,
                "name": "Brain Checklist \"Under Construction\"",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "codeLink": "#",
                "tryMeIcon":"fa fa-code",
                "seeCodeIcon":"fa fa-code-fork",
                "projectLink": "#",
                "about": "This iteration of the Brain Checklist takes all that I have learned about JavaScript to create an optimized version of what I have already created. This version will re-enforce the concepts of objects, closure scope, and mobile compatiblity as this will primarily be used on mobile devices."
            },
            {
                "id": 3,
                "name": "Email Generator",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "codeLink": "#",
                "tryMeIcon":"fa fa-code",
                "seeCodeIcon":"fa fa-code-fork",
                "projectLink": "#",
                "about": "I created this email generator as a simple tool to help me send emails to customers when I worked at 1800Contacts. I was not able to finish it completely, but it is an initial mock up of what I wanted to accomplish. This app re-enforced the concepts of DOM manipulation, String concatenation, and reusable code. "
            },
            {
                "id": 4,
                "name": "Random Quote Generator v0.1.0",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "codeLink": "#",
                "tryMeIcon":"fa fa-code",
                "seeCodeIcon":"fa fa-code-fork",
                "projectLink": "#",
                "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                "id": 5,
                "name": "FCC - Tribute Page",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "codeLink": "#",
                "tryMeIcon":"fa fa-codepen",
                "seeCodeIcon":"fa fa-codepen",
                "projectLink": "#",
                "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]

        var projList = projects.map(function (obj) {
            return(
                <div key={obj.id} className="projectBlock">
                <p>{obj.name}</p>
                <img src={obj.thumb} className="img-responsive thumb" alt="placeHolder"></img>
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

export default Projects;
