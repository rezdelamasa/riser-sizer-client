import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, PageHeader } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { API } from "aws-amplify";
import config from "../config";
import "./NewProject.css";
import { FaCheck } from "react-icons/fa";
import uuid from "uuid";

export default class NewProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: null,
      name: "",
      risers: [],
      address: "",
      description: "",
      buildingRiserCount: 0,
      buildingFloorCount: 0,
      buildingHotSourceFloor: "",
      buildingColdSourceFloor: "",
      buildingFirstFloor: ""
    };
  }

  validateForm() {
    return this.state.name.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    console.log(this.state);
    console.log(event.target.value);
  }

  handleEnableClick = event => {
    event.preventDefault();
    let flag = this.state[event.target.id];
    flag = !flag;
    console.log(flag);

    this.setState({
      [event.target.id]: flag
    })

    console.log(this.state);
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    let stateRiserObject = this.state.risers;

    if(!this.state.buildingRiserCount == 0) {
      for(let i = 0; i < this.state.buildingRiserCount; i++) {
      let initRiserObject = {
        floors: [],
        label: "",
        coldSourceFloor: "",
        hotSourceFloor: "",
        multipleFloorArray: []
      }
      initRiserObject.label = i + 1;
      initRiserObject.label += "";
      if(this.state.buildingColdSourceFloor != "") {
        initRiserObject.coldSourceFloor = this.state.buildingColdSourceFloor
      }
      if(this.state.buildingHotSourceFloor != "") {
        initRiserObject.hotSourceFloor = this.state.buildingHotSourceFloor
      }
      if(this.state.buildingFloorCount != 0) {
        initRiserObject.buildingFloorCount = this.state.buildingFloorCount
      }
      if(this.state.buildingFirstFloor != "") {
        initRiserObject.buildingFirstFloor = this.state.buildingFirstFloor
      }
      console.log(initRiserObject);
      if(initRiserObject.buildingFirstFloor && initRiserObject.buildingFloorCount) {
        for(let i = Number(initRiserObject.buildingFirstFloor); i < (Number(initRiserObject.buildingFirstFloor) + Number(this.state.buildingFloorCount)); i++) {
          let initFloorObject = {
            label: "",
            fixtures: [],
            loadValues: {
              cold: 0,
              hot: 0
            },
            sizes: {
              cold: 0,
              hot: 0
            },
            totalLoadValues: {
              cold: 0,
              hot: 0
            }
          }
          initFloorObject.label = i;
          initFloorObject.label += "";
          console.log(initFloorObject);
          initRiserObject.floors.push(initFloorObject);
        }
      }
      console.log(initRiserObject);
      stateRiserObject.push(initRiserObject);
    }
    }

    console.log(stateRiserObject);

    this.setState({
      risers: stateRiserObject
    })

    console.log(this.state);

    let projectObject = {};
    projectObject.name = this.state.name;
    projectObject.address = this.state.address;
    projectObject.description = this.state.description;
    projectObject.risers = this.state.risers;
    projectObject.isLoading = false;
    projectObject.id = uuid.v1();
    projectObject.createdAt = Date.now();
    console.log(projectObject.id);

    try {
      let dbUser = await this.user();
      console.log(dbUser);
      dbUser.content.user.projects.push(projectObject);
      console.log(dbUser);
      await this.createProject({
        content: {
          user: dbUser.content.user
        }
      });
      console.log(this.state.name);
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  user() {
    return API.get("riser-sizer", "/riser-sizer-user-properties");
  }

  createProject(user) {
    return API.put("riser-sizer", "/riser-sizer-user-properties", {
      body: user
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
          <div className="building-settings">
            <div className="building-settings__content">
              <div className="building-settings__item">
                <FormGroup controlId="buildingRiserCount">
                  <ControlLabel>Riser Count</ControlLabel>
                  <p className="building-settings__description">Create the specified nubmer of empty risers, ready to edit.</p>
                  <FormControl
                    onChange={this.handleChange}
                    value={this.state.buildingRiserCount}
                    type="number"
                    placeholder="How many risers?"
                  />
                </FormGroup>
              </div>
              <div className="building-settings__group">
                <div className="building-settings__item">
                  <FormGroup controlId="buildingFloorCount"> 
                    <ControlLabel>Floor Count</ControlLabel>
                    <p className="building-settings__description">Every riser will have the specified number of floors.</p>
                    <FormControl
                      onChange={this.handleChange}
                      value={this.state.buildingFloorCount}
                      type="number"
                      placeholder="How many floors?"
                    />
                  </FormGroup>
                </div>
                <div className="building-settings__item">
                  <FormGroup controlId="buildingFirstFloor"> 
                    <ControlLabel>First Floor</ControlLabel>
                    <p className="building-settings__description">Indicate the floor where the risers begin, from the bottom.</p>
                    <FormControl
                      onChange={this.handleChange}
                      value={this.state.buildingFirstFloor}
                      type="number"
                      placeholder="First floor"
                    />
                  </FormGroup>
                </div>
              </div>
              <div className="building-settings__group">
                <div className="building-settings__item">
                  <FormGroup controlId="buildingColdSourceFloor">
                    <ControlLabel>Cold Source Floor</ControlLabel>
                    <p className="building-settings__description">Specify a cold water source floor that all risers will follow.</p>
                    <FormControl
                      onChange={this.handleChange}
                      value={this.state.buildingColdSourceFloor}
                      type="number"
                      placeholder="Cold Source Floor"
                    />
                  </FormGroup>
                </div>
                <div className="building-settings__item">
                  <FormGroup controlId="buildingHotSourceFloor">
                    <ControlLabel>Hot Source Floor</ControlLabel>
                    <p className="building-settings__description">Specify a cold water source floor that all risers will follow.</p>
                    <FormControl
                      onChange={this.handleChange}
                      value={this.state.buildingHotSourceFloor}
                      type="number"
                      placeholder="Hot Source Floor"
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>
          <div className="NewProject__buttons">
            <a href="/" className="NewProject__cancel">Cancel</a>
            <LoaderButton
              className="NewProject__create"
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
