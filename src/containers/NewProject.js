import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, PageHeader } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { API } from "aws-amplify";
import config from "../config";
import "./NewProject.css";

export default class NewProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: null,
      name: "",
      risers: [],
      address: "",
      description: ""
    };
  }

  validateForm() {
    return this.state.name.length > 0;
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
      await this.createProject({
        content: {
          name: this.state.name,
          risers: [],
          address: this.state.address,
          description: this.state.description
        }
      });
      console.log(this.state.name);
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  createProject(project) {
    return API.post("riser-sizer", "/riser-sizer", {
      body: project
    });
  }



  render() {
    return (
      <div className="NewProject">
        <form onSubmit={this.handleSubmit}>
          <h1>New Project Details</h1>
          <FormGroup controlId="name"> 
            <ControlLabel>Project Name</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.name}
              type="text"
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup controlId="address"> 
            <ControlLabel>Address (Optional)</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.address}
              type="text"
              placeholder="Address"
            />
          </FormGroup>
          <FormGroup controlId="description"> 
            <ControlLabel>Description (Optional)</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.description}
              type="text"
              placeholder="Description"
            />
          </FormGroup>
          <div className="NewProject__buttons">
            <a href="/" className="NewProject__cancel">Cancel</a>
            <LoaderButton
              className="NewProject__create"
              block
              bsStyle="primary"
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              isLoading={this.state.isLoading}
              text="Create"
              loadingText="Creating…"
            />
          </div>
        </form>
      </div>
    );
  }
}
