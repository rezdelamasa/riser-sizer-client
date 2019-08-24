import React, { Component } from 'react';
import RiserToolbar from "./RiserToolbar";
import RiserHelper from "./RiserHelper";

class RiserItem extends Component {

  handleClick = (e) => {
    this.props.editRiser(e, this.props.riserLabel);
  }

  render() {
    const {
      handleRiserFormChange,
      handleRiserFormSubmit,
      showForm,
      riserLabel,
      editRiser,
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
    return (
      <li className="riser-item">
        <RiserToolbar 
          handleRiserFormChange={handleRiserFormChange}
          handleRiserFormSubmit={handleRiserFormSubmit}
          showForm={showForm}
          riserLabel={riser.label}
          editRiser={editRiser}
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
        />
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
        />
      </li>
    );
  }
}

export default RiserItem;