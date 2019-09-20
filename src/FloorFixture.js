import React, { Component } from "react";

import { MdLockOutline } from "react-icons/md";
import { MdLockOpen } from "react-icons/md";
import { GiDesk } from "react-icons/gi";
import { MdHotel } from "react-icons/md";
import { MdRestaurant } from "react-icons/md";

import "./FloorFixture.css";

class FloorFixture extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hovering: false
    }

    this.handleDeleteEnter = this.handleDeleteEnter.bind(this);
    this.handleDeleteLeave = this.handleDeleteLeave.bind(this);

  }

  handleDeleteEnter() {
    this.setState({
      hovering: true
    })
  }

  handleDeleteLeave(e) {
    console.log(e);
    this.setState({
      hovering: false
    })
  }

  handleDelete = (e) => {
    this.props.handleFixtureDelete(e);
  }

  render() {
    const { 
      fixture, 
      onSelectFixture,
    } = this.props;
    
    let fixtureNameElement;
    let fixtureInfoElement;
    let fixtureClass;

    if(this.state.hovering == true) {
      fixtureClass = "fixture fixture--delete";
    } else {
      fixtureClass = "fixture";
    }

    if(fixture.shorthand.name) {
      fixtureNameElement = <h1 className="fixture__label">{fixture.shorthand.name}</h1>
    } else {
      fixtureNameElement = <h1 className="fixture__label">{fixture.name}</h1>
    }

    if(fixture.occupancy == "Private") {
      fixtureInfoElement = (<p className="fixture__info"><MdLockOutline /></p>);
    } else if(fixture.occupancy == "Public") {
      fixtureInfoElement = (<p className="fixture__info"><MdLockOpen /></p>);
    } else if(fixture.occupancy == "Offices, etc.") {
      fixtureInfoElement = (<p className="fixture__info"><GiDesk /></p>);
    } else if(fixture.occupancy == "Hotel, restaurant") {
      fixtureInfoElement = (<p className="fixture__info"><MdRestaurant /></p>);
    } else {
      fixtureInfoElement = (<p className="fixture__info">{fixture.occupancy}</p>);
    }

    return (
      <div className={fixtureClass}>
        {fixtureNameElement}
        {fixtureInfoElement}
        <p className="fixture__type">{fixture.fixtureType}</p>
        <button 
          className="fixture__delete"
          onMouseEnter={this.handleDeleteEnter}
          onMouseLeave={this.handleDeleteLeave}
          onClick={this.handleDelete}
        >
          x
        </button>
      </div>
    );
  }
}

export default FloorFixture;