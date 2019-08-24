import React, { Component } from "react";

import Floor from "./Floor";

class Riser extends Component {

  render() {
    const {
      initialFloor,
      onChange,
      onSubmit,
      showForm,
      currentRiser,
      handleFloorFormSubmit,
      handleFloorFormChange,
      currentFloor,
      editFloor,
      selectHotSource,
      selectColdSource
    } = this.props;

    let riser;

    let emptyLoadValues = {
      cold: 0,
      hot: 0,
      total: 0
    }

    if(currentRiser.floors.length === 0) {
      riser = (
        <Floor 
          onChange={onChange}
          onSubmit={onSubmit}
          initialFloor={initialFloor}
          showForm={showForm}
          currentRiser={currentRiser}
          handleFloorFormSubmit={handleFloorFormSubmit}
          handleFloorFormChange={handleFloorFormChange}
          floorFixtures={currentRiser.floors}
          currentFloor={currentFloor}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
          cumalativeLoadValues={emptyLoadValues}
          gpms={emptyLoadValues}
          sizes={emptyLoadValues}
        />
      );
    } else {
      riser = (
        currentRiser.floors.map(floor => 
          <Floor 
            currentRiser={currentRiser}
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