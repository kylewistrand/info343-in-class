import React, { Component } from 'react';

import firebase from "firebase/app";
import Working from "./working";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: undefined,
      email: "test16@test.com",
      password: "password",
      displayName: "tester16"
    }
  }

  componentDidMount() {
    this.authUnsub = firebase.auth().onAuthStateChanged(user => {
      this.setState({currentUser: user});
    });
  }

  componentWillUnmount() {
    this.authUnsub();
  }

  handleSignUp() {
    this.setState({working: true});
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        return user.updateProfile({
          displayName: this.state.displayName
        });
      })
      .catch(err => this.setState({errorMessage: err.message}))
      .then(() => this.setState({working: false}));
  }

  handleSignIn() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.setState({errorMessage: undefined}))
      .catch(err => this.setState({errorMessage: err.message}))
      .then(() => this.setState({working: false}));
  }

  handleSignOut() {
    this.setState({working: true});
    firebase.auth().signOut()
      .catch(err => this.setState({errorMessage: err.message}))
      .then(() => this.setState({working: false}));;
  }

  render() {
    return (
      <div className="container">
        {this.state.errorMessage ?
          <div className="alert alert-danger">
            {this.state.errorMessage}
          </div>
          : undefined}
        <div>
          {this.state.working? <Working /> : undefined}
          {this.state.currentUser && !this.state.working? "User is authenticated! Hello, " + this.state.currentUser.displayName : "User not authenticated!"}
        </div>
        <p>
          <button onClick={() => this.handleSignUp()} disabled={this.state.working} className="btn btn-success">Sign Up!</button>
        </p>
        <p>
          <button onClick={() => this.handleSignIn()} disabled={this.state.working} className="btn btn-primary">Sign In</button>
        </p>
        <p>
          <button onClick={() => this.handleSignOut()} disabled={this.state.working} className="btn btn-danger">Sign Out</button>
        </p>
      </div>
    );
  }
}

export default App;
