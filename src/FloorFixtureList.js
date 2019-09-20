import React, { Component } from "react";
import FloorFixture from "./FloorFixture";

import "./FloorFixtureList.css";

class FloorFixtureList extends Component {

  render() {
    const {
      floorFixtures,
      handleFixtureDelete
    } = this.props;

    return (
      <ul className="floor-fixtures">
        {
          floorFixtures.map(fixture =>
            <FloorFixture 
              fixture={fixture}
              handleFixtureDelete={handleFixtureDelete}
            />
          )
        }
      </ul>
    );
  }
}

export default FloorFixtureList;