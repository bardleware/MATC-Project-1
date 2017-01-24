import React, { Component } from 'react';

class VCard extends Component {
  render() {
    return (
      <div>
        <p> <a href="mailto:devanslink@gmail.com?Subject=Hello">devanslink@gmail.com</a> </p>
        <a href="https://github.com/bardleware">Me on Github</a>
      </div>
    );
  }
}

export default VCard;