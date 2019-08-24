import React, { Component } from "react";

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
      risers
    } = this.props;

    let riserTopColdFloor, 
        riserBottomColdFloor, 
        riserTopHotFloor, 
        riserBottomHotFloor,
        riserColdSize,
        riserHotSize;

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
    }

    if(riser.totalSizes) {
      riserColdSize = riser.totalSizes.cold;
      riserHotSize = riser.totalSizes.hot;
    }

    return (
      <div className="riser-helper">
        <p>Cold Floors: {riserBottomColdFloor + "-" + riserTopColdFloor}</p>
        <p>Hot Floors: {riserBottomHotFloor + "-" + riserTopHotFloor}</p>
        <p>Cold Source Floor: { riser.coldSourceFloor }</p>
        <p>Hot Source Floor: { riser.hotSourceFloor }</p>
      </div>
    );
  }
}

export default RiserHelper;