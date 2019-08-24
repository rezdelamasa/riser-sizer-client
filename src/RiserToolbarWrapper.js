import React, { Component } from 'react';
import RiserToolbar from "./RiserToolbar";

class RiserToolbarWrapper extends Component {

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
      leftScroll,
      toolbarRef
    } = this.props;


    return (
      <div className="riser__toolbar-wrapper" ref={toolbarRef}>
        {risers.map(riser => 
          <RiserToolbar 
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
      </div>
    );
  }
}

export default RiserToolbarWrapper;