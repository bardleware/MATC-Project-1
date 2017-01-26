import React, { Component } from 'react';

import '../style/index.css';

class Contact extends Component {
    constructor() {
        super();
        this.state = { value: "Send me feedback, jokes, etc." }
    }
    render() {
        return (
            <div className="form">
                <form className="form-horizontal">
                    <fieldset>
                        <legend>Contact Me</legend>
                        <div className="form-group">
                            <label className="col-lg-2 control-label">Name</label>
                            <div className="col-lg-10">
                                <input type="text" className="form-control" id="inputEmail" placeholder="Name"></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-2 control-label">Email</label>
                            <div className="col-lg-10">
                                <input type="text" className="form-control" id="inputEmail" placeholder="Email"></input>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-lg-2 control-label">Message</label>
                            <div className="col-lg-10">
                                <textarea className="form-control" rows="3" id="textArea" placeholder={this.state.value} />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-lg-10 col-lg-offset-2">
                                <button type="submit" className="btn btn-success btn-block">Send</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>

        );
    }
}

export default Contact;
