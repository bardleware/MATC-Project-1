import React, { Component } from 'react';

import '../style/index.css';

class Contact extends Component {
    constructor() {
        super();
        this.state = { value: "Send me feedback, jokes, etc. (this is not a working form. It is still under construction.)" }
    }


    render() {
        return (
            <div className="form">
                <form className="form-horizontal">
                    <fieldset>
                        <legend>Contact Me</legend>
                            <div>
                                <label className="control-label" htmlFor="">Name</label>
                            </div>
                            <div>
                                <input type="text" className="form-control" id="inputName" placeholder="Name"></input>
                            </div>

                            <div>
                                <label className="control-label" htmlFor="">Email</label>
                            </div>
                            <div>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email"></input>
                            </div>

                            <div>
                                <label className="control-label" htmlFor="">Message</label>
                            </div>
                            <div>
                                <textarea className="form-control" rows="3" id="textArea" placeholder={this.state.value} />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-success btn-block button-spacing">Send</button>
                            </div>
                    </fieldset>
                </form>
            </div>

        );
    }
}

export default Contact;
