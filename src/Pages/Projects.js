import React, { Component } from 'react';


class Projects extends Component {
    render() {
        const projects = [
            {
                "id": 1,
                "name": "Brain Checklist",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                "id": 2,
                "name": "Brain Checklist",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                "id": 3,
                "name": "Brain Checklist",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                "id": 4,
                "name": "Brain Checklist",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                "id": 5,
                "name": "Brain Checklist",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                "id": 6,
                "name": "Brain Checklist",
                "thumb": "https://placehold.it/150x80?text=IMAGE",
                "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
        ]

        var projList = projects.map(function (obj) {
            return(
                <div className="col-md-4 col-sm-6">
                <p>{obj.name}</p>
                <img src={obj.thumb} className="img-responsive thumb" alt="placeHolder"></img>
                <p>{obj.about}</p>
            </div>
            )
        })


        return (

            < div >
                <div className="jumbotron">
                    <div className="container text-center">
                        <h1>My Portfolio</h1>
                        <p>Some text that represents "Me"...</p>
                    </div>
                </div>
                <div>
                    {projList}
                </div>
            </div >

        );
    }
}

export default Projects;
