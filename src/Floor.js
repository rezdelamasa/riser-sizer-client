import React, { Component } from "react";

import FloorTotalInfo from "./FloorTotalInfo";
import FloorMain from "./FloorMain";

import "./Floor.css";

class Floor extends Component {

  render() {
    const {
      initialFloor,
      onChange,
      onSubmit,
      showForm,
      currentRiser,
      handleFloorLabelSubmit,
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
      sizes,
      handleFloorLabelChange,
      loadValues,
      handleFixtureDelete,
      multipleEditEnabled,
      selectFloor
    } = this.props;

    let floorClass = "";

    if(currentRiser.currentFloor && label == currentRiser.currentFloor.label) {
      floorClass = "floor floor--active";
    } else {
      floorClass = "floor";
    }
    
    if(multipleEditEnabled && currentRiser.multipleFloorArray.length > 0) {
      currentRiser.multipleFloorArray.forEach(function(floor) {
        if(floor.label == label) {
          floorClass = "floor floor--selected";
        }
      });
    } 


    // if(currentFloor.label === label) {
    //   floorClass += " floor--active";
    // } 

    // if(currentRiser.sourceFloor === label) {
    //   floorClass += " floor--source";
    // }

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
      <li className={floorClass}>
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
          handleFloorLabelSubmit={handleFloorLabelSubmit}
          handleFloorFormChange={handleFloorFormChange}
          handleFloorLabelChange={handleFloorLabelChange}
          handleFixtureDelete={handleFixtureDelete}
        />
        <FloorMain 
          editFloor={editFloor}
          label={label}
          floorFixtures={floorFixtures}
          currentRiser={currentRiser}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
          floorFixtures={floorFixtures}
          loadValues={loadValues}
          handleFixtureDelete={handleFixtureDelete}
          multipleEditEnabled={multipleEditEnabled}
          selectFloor={selectFloor}
        />
      </li>
    );
  }
} 

export default Floor;