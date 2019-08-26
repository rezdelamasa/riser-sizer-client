import React, { Component } from 'react';
import RiserItem from "./RiserItem";

import "./RiserList.css";

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

    let list;

    if(risers.length == 0) {
      list = <p className="riser-list--empty">Empty</p>
    } else {
      list = risers.map(riser => 
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
        )
    }
  
    return (
      <ul className="riser-list" ref={editingAreaRef}>
        {list}
      </ul>
    );
  }
}

export default RiserList;