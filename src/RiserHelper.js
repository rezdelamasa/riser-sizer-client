import React, { Component } from "react";

import Button from "./Button";

import "./RiserHelper.css";

class RiserHelper extends Component {

  render() {
    const {
      riser,
      highestColdRange,
      highestHotRange,
      topColdFloor,
      topHotFloor,
      bottomHotFloor,
      bottomColdFloor,
      totalFloorRange,
      highestFloor,
      lowestFloor,
      risers,
      editRiser,
      riserLabel
    } = this.props;

    let riserTopColdFloor, 
        riserBottomColdFloor, 
        riserTopHotFloor, 
        riserBottomHotFloor,
        riserColdSize,
        riserHotSize,
        riserColdSourceFloor,
        riserHotSourceFloor;

    if(riser.coldFloors) {
      if(riser.coldFloors.below.length > 0) {
        riserBottomColdFloor = riser.coldFloors.below[0].label;
      } else if(riser.coldFloors.above.length > 0) {
        riserBottomColdFloor = riser.coldFloors.above[0].label;
      }

      if(riser.coldFloors.above.length > 0) {
        riserTopColdFloor = riser.coldFloors.above[riser.coldFloors.above.length - 1].label;
      } else if(riser.coldFloors.below.length > 0) {
        riserTopColdFloor = riser.coldFloors.below[riser.coldFloors.below.length - 1].label;
      }
    } else {
      riserBottomColdFloor = "N/A";
      riserTopColdFloor = "N/A";
    }

    if(riser.hotFloors) {
      if(riser.hotFloors.below.length > 0) {
        riserBottomHotFloor = riser.hotFloors.below[0].label;
      } else if(riser.hotFloors.above.length > 0) {
        riserBottomHotFloor = riser.hotFloors.above[0].label;
      }

      if(riser.hotFloors.above.length > 0) {
        riserTopHotFloor = riser.hotFloors.above[riser.hotFloors.above.length - 1].label;
      } else if(riser.hotFloors.below.length > 0) {
        riserTopHotFloor = riser.hotFloors.below[riser.hotFloors.below.length - 1].label;
      }
    } else {
      riserBottomHotFloor = "N/A";
      riserTopHotFloor = "N/A";
    }

    if(riser.totalSizes) {
      riserColdSize = riser.totalSizes.cold;
      riserHotSize = riser.totalSizes.hot;
    }

    if(!riser.coldSourceFloor || riser.coldSourceFloor == undefined) {
      riserColdSourceFloor = "N/A";
    }

    if(!riser.hotSourceFloor || riser.hotSourceFloor == undefined) {
      riserHotSourceFloor = "N/A";
    }

    return (
      <div className="riser-helper">
        <div className="riser-text__wrapper">
          <h1 className="riser__subheading riser__subheading--cold">Cold Floors</h1>
          <p className="riser__text">{riserBottomColdFloor + " - " + riserTopColdFloor}</p>
        </div>
        <div className="riser-text__wrapper">
          <h1 className="riser__subheading riser__subheading--cold">Cold Source Floor</h1>
          <p className="riser__text">{ riserColdSourceFloor }</p>
        </div>
        <div className="riser-text__wrapper">
          <h1 className="riser__subheading riser__subheading--hot">Hot Floors</h1>
          <p className="riser__text">{riserBottomHotFloor + " - " + riserTopHotFloor}</p>
        </div>
        <div className="riser-text__wrapper">
          <h1 className="riser__subheading riser__subheading--hot">Hot Source Floor</h1>
          <p className="riser__text">{ riserHotSourceFloor }</p>
        </div>
        <Button
          className={'button--edit'}
          onClick={(e, id) => {editRiser(e, {riserLabel})}}
        >
          Edit
          <p className="button__arrow">></p>
        </Button>
      </div>
    );
  }
}

export default RiserHelper;