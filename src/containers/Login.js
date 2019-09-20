import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { Auth } from "aws-amplify";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await Auth.signIn(this.state.email, this.state.password);
      this.props.userHasAuthenticated(true, this.state.email);
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }



  render() {
    return (
      <div className="Login">
        <img className="Login__bg" src="https://res.cloudinary.com/rezdelamasa/image/upload/v1568779719/riser-sizer-bg.svg" alt=""/>
        <div className="Login__header">
          <a href="/">Riser Sizer</a>
        </div>
        <div className="Login__content">
          <form onSubmit={this.handleSubmit}>
            <h1 className="form__heading">Log In</h1>
            <FormGroup controlId="email">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
              />
            </FormGroup>
            <FormGroup controlId="password">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                placeholder="Password"
              />
            </FormGroup>
            <LoaderButton
              disabled={!this.validateForm()}
              type="submit"
              isLoading={this.state.isLoading}
              text="Login"
              loadingText="Logging in…"
            />
          </form>
        </div>
      </div>
    );
  }
}
