import React, { Component } from "react";

import FloorTotalInfo from "./FloorTotalInfo";
import FloorMain from "./FloorMain";

class Floor extends Component {

  render() {
    const {
      initialFloor,
      onChange,
      onSubmit,
      showForm,
      currentRiser,
      handleFloorFormSubmit,
      handleFloorFormChange,
      label,
      floorFixtures,
      key,
      currentFloor,
      editFloor,
      selectHotSource,
      selectColdSource,
      cumalativeLoadValues,
      gpms,
      sizes
    } = this.props;

    let floorClass = '';

    if(currentFloor.label === label) {
      floorClass += " floor--active";
    } 

    if(currentRiser.sourceFloor === label) {
      floorClass += " floor--source";
    }

    if(currentRiser.coldSourceFloor && currentRiser.coldSourceFloor === label) {
      floorClass += " floor--cold-source";
    }

    if(currentRiser.hotSourceFloor && currentRiser.hotSourceFloor === label) {
      floorClass += " floor--hot-source";
    }

    if(sizes.cold && sizes.cold != "0") {
      floorClass += " floor--cold";
    }

    if(sizes.hot && sizes.hot != "0") {
      floorClass += " floor--hot";
    }

    return (
      <li className={"floor " + floorClass}>
        <FloorTotalInfo 
          floorFixtures={floorFixtures}
          label={label}
          currentRiser={currentRiser}
          cumalativeLoadValues={cumalativeLoadValues}
          gpms={gpms}
          sizes={sizes}
          onChange={onChange}
          onSubmit={onSubmit}
          initialFloor={initialFloor}
          handleFloorFormSubmit={handleFloorFormSubmit}
          handleFloorFormChange={handleFloorFormChange}
        />
        <FloorMain 
          editFloor={editFloor}
          label={label}
          floorFixtures={floorFixtures}
          currentRiser={currentRiser}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
        />
      </li>
    );
  }
} 

export default Floor;