import React, { Component } from "react";

import Riser from "./Riser";

class RiserWrapper extends Component {

  render() {
    const {
      initialFloor,
      onChange,
      onSubmit,
      showForm,
      currentRiser,
      handleFloorFormSubmit,
      handleFloorFormChange,
      currentFloor,
      editFloor,
      selectHotSource,
      selectColdSource
    } = this.props;

    return (
      <div className="riser-wrapper">
        <Riser 
          onChange={onChange}
          onSubmit={onSubmit}
          initialFloor={initialFloor}
          showForm={showForm}
          currentRiser={currentRiser}
          currentFloor={currentFloor}
          handleFloorFormSubmit={handleFloorFormSubmit}
          handleFloorFormChange={handleFloorFormChange}
          editFloor={editFloor}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
        />
      </div>
    );
  }
}

export default RiserWrapper;