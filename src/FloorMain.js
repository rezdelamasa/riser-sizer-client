import React, { Component } from "react";

import FloorFixtureList from "./FloorFixtureList";
import FloorToolbar from "./FloorToolbar";

import "./FloorMain.css";

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
      selectColdSource,
      loadValues,
      handleFixtureDelete
    } = this.props;

    return (
      <div className="floor__main">
        <FloorFixtureList
          floorFixtures={floorFixtures}
          handleFixtureDelete={handleFixtureDelete}
        />
        <FloorToolbar 
          editFloor={editFloor}
          label={label}
          floorFixtures={floorFixtures}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
          loadValues={loadValues}
        />
      </div>
    );
  }
}

export default FloorMain;