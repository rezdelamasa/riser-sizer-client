import React, { Component } from 'react'
import RiserToolbar from "./RiserToolbar";
import RiserInfo from "./RiserInfo";

import "./RiserItem.css";

class RiserItem extends Component {

  render() {
    const {
      handleRiserLabelSubmit,
      showForm,
      riserLabel,
      handleEditRiser,
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
      handleRiserLabelChange,
      riserIndex,
      showLabelForm,
      handleRiserDelete
    } = this.props;
    return (
      <li className="riser-item">
        <RiserToolbar 
          handleRiserLabelSubmit={handleRiserLabelSubmit}
          handleRiserLabelChange={handleRiserLabelChange}
          showLabelForm={showLabelForm}
          showForm={showForm}
          riserLabel={riser.label}
          handleEditRiser={handleEditRiser}
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
          riserIndex={riserIndex}
        />
        <RiserInfo
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
          handleEditRiser={handleEditRiser}
          riserLabel={riserLabel}
          handleRiserDelete={handleRiserDelete}
        />
      </li>
    );
  }
}

export default RiserItem;