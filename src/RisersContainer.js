import React, { Component } from 'react';
import RiserList from "./RiserList";
import "./RisersContainer.css";

class RisersContainer extends Component {

  render() {
    const {
      onClick,
      risers,
      handleRiserLabelSubmit,
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
      editingAreaRef,
      handleEditRiser,
      handleRiserLabelChange,
      showLabelForm,
      handleRiserDelete
    } = this.props;

    return (
      <div className="risers-container" ref={editingAreaRef}>
        <RiserList 
          handleRiserLabelSubmit={handleRiserLabelSubmit}
          handleRiserLabelChange={handleRiserLabelChange}
          showLabelForm={showLabelForm}
          showForm={showForm}
          handleEditRiser={handleEditRiser}
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
          handleRiserDelete={handleRiserDelete}
        />
      </div>
    );
  }
}

export default RisersContainer;