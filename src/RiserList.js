import React, { Component } from 'react';
import RiserItem from "./RiserItem";

class RiserList extends Component {

  render() {
    const {
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
      leftScroll,
      editingAreaRef
    } = this.props;
    console.log(risers);
  
    return (
      <ul className="riser-list" ref={editingAreaRef}>
        {risers.map(riser => 
          <RiserItem 
            handleRiserFormChange={handleRiserFormChange}
            handleRiserFormSubmit={handleRiserFormSubmit}
            showForm={showForm}
            riserLabel={riser.label}
            editRiser={editRiser}
            riser={riser}
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
        )}
      </ul>
    );
  }
}

export default RiserList;