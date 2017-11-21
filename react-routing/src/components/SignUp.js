import React from "react";
import {Link} from "react-router-dom";

import constants from "./constants";

export default class SignUpView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConf: "",
            displayName: "",
            passwordConfValid: true
        };
    }

    handleSubmit(evt) {
        evt.preventDefault();
        if(this.state.password !== this.state.passwordConf) {
            this.setState({passwordConfValid: false});
        } else {
            this.setState({passwordConfValid: true});
        }

        console.log(this.state.passwordConfValid);
        console.log("Creating user: %s, %s, %s, %s", this.state.email, this.state.password, this.state.passwordConf, this.state.displayName);
    }

    render() {
        return (
            <div className="container">
                <h1>Sign Up</h1>

                <form onSubmit={(evt) => this.handleSubmit(evt)}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" className="form-control" value={this.state.email} onInput={evt => this.setState({email: evt.target.value})} placeholder="Enter your email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" className="form-control" value={this.state.password} onInput={evt => this.setState({password: evt.target.value})} placeholder="Enter your password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordConf">Confirm Password:</label>
                        <input type="password" id="passwordConf" className={!this.state.passwordConfValid? "form-control is-invalid" : "form-control"} vlaue={this.state.passwordConf} onInput={evt => this.setState({passwordConf: evt.target.value})} placeholder="Confirm your password" />
                        <div className="invalid-feedback">Passwords do not match</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="displayName">Display Name:</label>
                        <input type="text" id="displayName" className="form-control" value={this.state.displayName} onInput={evt => this.setState({displayName: evt.target.value})} placeholder="Enter a display name" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                </form>

                <p>Already have an account? <Link to={constants.routes.signin}>Sign In</Link></p>
            </div>
        );
    }
}