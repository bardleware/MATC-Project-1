import React, { Component } from 'react';

class VCard extends Component {
  render() {
    return (
      <div className="links">
        <a href="mailto:devanslink@gmail.com?Subject=Hello">
        <div className="emailBack iconLink">
              <span className="contactlink"><i className="fa fa-at"></i></span>
            </div>
        </a>
        
          <a href="https://github.com/bardleware" target="_blank">
            <div className="githubBack iconLink">
              <span className="contactlink"><i className="fa fa-github contactlink"></i></span>
            </div>
          </a>
          <a href="http://devansprojects.net/fileserv/resume.pdf" target="_blank">
              <div className="resumeBack iconLink">
                  <span className="resumeLink"><i className="fa fa-file-pdf-o"></i></span>
              </div>
          </a>
      </div>
    );
  }
}

export default VCard;