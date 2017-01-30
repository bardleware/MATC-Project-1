import React, { Component } from 'react';

class VCard extends Component {
  render() {
    return (
      <div>
        <a href="mailto:devanslink@gmail.com?Subject=Hello">
        <div className="emailBack contactIco">
              <span className="contactlink"><i className="fa fa-at"></i></span>
            </div>
        </a>
        
          <a href="https://github.com/bardleware">
            <div className="githubBack contactIco">
              <span className="contactlink"><i className="fa fa-github contactlink"></i></span>
            </div>
          </a>
      </div>
    );
  }
}

export default VCard;