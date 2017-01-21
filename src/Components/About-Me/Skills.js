import React, { Component } from 'react';

class Skills extends Component {
    render() {

        return(
            <ul className="skill-list">
              {this.props.skills.map(function(skl){
                return <li className="skillz skill-box">{skl}</li>
              })}
            </ul>
        );
    }
}

export default Skills;