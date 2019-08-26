import React, { Component } from "react";

import RiserHelper from "./RiserHelper";
import Button from "./Button";

import "./RiserInfo.css";

class RiserInfo extends Component {

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
    return (
      <div className="riser-item__info">
        <RiserHelper 
          riser={riser}
          highestColdRange={highestColdRange}
          highestHotRange={highestHotRange}
          topColdFloor={topColdFloor}
          topHotFloor={topHotFloor}
          bottomHotFloor={bottomHotFloor}
          bottomColdFloor={bottomColdFloor}
          totalFloorRange={totalFloorRange}
          highestFloor={highestFloor}
          lowestFloor={lowestFloor}
          risers={risers}
          editRiser={editRiser}
          riserLabel={riserLabel}
        />
      </div>
    );
  }
}

export default RiserInfo;