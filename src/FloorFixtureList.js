import React, { Component } from "react";
import FloorFixture from "./FloorFixture";

import "./FloorFixtureList.css";

class FloorFixtureList extends Component {

  render() {
    const {
      floorFixtures
    } = this.props;
    return (
      <ul className="floor-fixtures">
        {floorFixtures.map(fixture =>
          <FloorFixture 
            fixture={fixture}
          />
        )}
      </ul>
    );
  }
}

export default FloorFixtureList;