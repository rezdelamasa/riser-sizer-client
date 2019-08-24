import React, { Component } from 'react';
import RiserList from "./RiserList";

class RisersContainer extends Component {

  render() {
    const {
      onClick,
      risers,
      handleRiserFormChange,
      handleRiserFormSubmit,
      showForm,
      editRiser,
      highestColdRange,
      highestHotRange,
      topColdFloor,
      topHotFloor,
      bottomHotFloor,
      bottomColdFloor,
      totalFloorRange,
      highestFloor,
      lowestFloor,
      handleScrollRight,
      editingAreaRef
    } = this.props;

    return (
      <div className="risers-container" ref={editingAreaRef}>
        <RiserList 
          handleRiserFormChange={handleRiserFormChange}
          handleRiserFormSubmit={handleRiserFormSubmit}
          showForm={showForm}
          editRiser={editRiser}
          risers={risers}
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
      </div>
    );
  }
}

export default RisersContainer;