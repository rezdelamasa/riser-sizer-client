import React, { Component } from "react";

import Floor from "./Floor";
import "./Riser.css";

class Riser extends Component {

  render() {
    const {
      initialFloor,
      onChange,
      onSubmit,
      showForm,
      currentRiser,
      handleFloorLabelSubmit,
      handleFloorFormChange,
      currentFloor,
      editFloor,
      selectHotSource,
      selectColdSource,
      handleFloorLabelChange,
      handleFixtureDelete,
      enableMultipleEdit,
      selectFloor,
      multipleEditEnabled
    } = this.props;

    let riser;

    let emptyLoadValues = {
      cold: 0,
      hot: 0,
      total: 0
    }

    let emptyArray = [];

    if(currentRiser.floors.length === 0) {
      riser = (
        <Floor 
          onChange={onChange}
          onSubmit={onSubmit}
          initialFloor={initialFloor}
          showForm={showForm}
          currentRiser={currentRiser}
          handleFloorLabelSubmit={handleFloorLabelSubmit}
          handleFloorFormChange={handleFloorFormChange}
          currentFloor={currentFloor}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
          cumalativeLoadValues={emptyLoadValues}
          gpms={emptyLoadValues}
          sizes={emptyLoadValues}
          handleFloorLabelChange={handleFloorLabelChange}
          floorFixtures={emptyArray}
          handleFixtureDelete={handleFixtureDelete}
          enableMultipleEdit={enableMultipleEdit}
          selectFloor={selectFloor}
          multipleEditEnabled={multipleEditEnabled}
        />
      );
    } else {
      riser = (
        currentRiser.floors.map(floor => 
          <Floor 
            currentRiser={currentRiser}
            loadValues={floor.loadValues}
            label={floor.label}
            floorFixtures={floor.fixtures}
            cumalativeLoadValues={floor.cumalativeLoadValues}
            gpms={floor.gpms}
            sizes={floor.sizes}
            key={floor.label}
            currentFloor={currentFloor}
            editFloor={editFloor}
            selectHotSource={selectHotSource}
            selectColdSource={selectColdSource}
            handleFloorLabelChange={handleFloorLabelChange}
            handleFloorLabelSubmit={handleFloorLabelSubmit}
            handleFixtureDelete={handleFixtureDelete}
            enableMultipleEdit={enableMultipleEdit}
            selectFloor={selectFloor}
            multipleEditEnabled={multipleEditEnabled}
          />
        )
      );
    }
    return (
      <ul className="riser">
        {riser}
      </ul>
    );
  }
}

export default Riser;