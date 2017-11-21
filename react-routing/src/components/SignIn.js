import React from "react";
import {Link} from "react-router-dom";

import constants from "./constants";

export default class SignInView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit(evt) {
        evt.preventDefault();
        console.log("Signing in user with credentials %s, %s", this.state.email, this.state.password)
    }

    render() {
        return (
            <div className="container">
                <h1>Sign In</h1>

                <form onSubmit={(evt) => this.handleSubmit(evt)}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={this.state.email} onInput={evt => this.setState({email: evt.target.value})} className="form-control" placeholder="Enter your email address"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={this.state.password} onInput={evt => this.setState({password: evt.target.value})} className="form-control" placeholder="Enter your password"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </div>
                </form>

                <p>Don't yet have an account? <Link to={constants.routes.signup}>Sign Up!</Link></p>
            </div>
        );
    }
}