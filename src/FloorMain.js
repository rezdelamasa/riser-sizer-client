import React, { Component } from "react";

import FloorFixtureList from "./FloorFixtureList";
import FloorToolbar from "./FloorToolbar";

class FloorMain extends Component {

  render() {
    const {
      showForm,
      currentRiser,
      label,
      floorFixtures,
      key,
      currentFloor,
      editFloor,
      selectHotSource,
      selectColdSource
    } = this.props;

    return (
      <div className="floor__main">
        <FloorFixtureList
          floorFixtures={floorFixtures}
        />
        <FloorToolbar 
          editFloor={editFloor}
          label={label}
          floorFixtures={floorFixtures}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
        />
      </div>
    );
  }
}

export default FloorMain;