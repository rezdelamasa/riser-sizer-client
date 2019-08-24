import React, { Component } from "react";

import { MdLockOutline } from "react-icons/md";
import { MdLockOpen } from "react-icons/md";
import { GiDesk } from "react-icons/gi";
import { MdHotel } from "react-icons/md";
import { MdRestaurant } from "react-icons/md";

class FloorFixture extends Component {

  render() {
    const { 
      fixture, 
      onSelectFixture 
    } = this.props;
    
    let fixtureNameElement;
    let fixtureInfoElement;

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
      fixtureInfoElement = (<p className="fixture__info"><MdHotel /> | <MdRestaurant /></p>);
    } else {
      fixtureInfoElement = (<p className="fixture__info">{fixture.occupancy}</p>);
    }

    return (
      <div className="fixture">
        {fixtureNameElement}
        {fixtureInfoElement}
        <p className="fixture__type">{fixture.fixtureType}</p>
      </div>
    );
  }
}

export default FloorFixture;