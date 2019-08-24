import React, { Component } from "react";

import Toolbar from "./Toolbar";
import RiserWrapper from "./RiserWrapper";

class EditingArea extends Component {

  render() {
    const {
      initialFloor,
      onChange,
      onSubmit,
      showForm,
      handleRiserFormChange,
      label, 
      onBackClick,
      currentRiser,
      handleFloorFormSubmit,
      handleFloorFormChange,
      addFloorAbove,
      addFloorBelow,
      currentFloor,
      editFloor,
      selectHotSource,
      selectColdSource
    } = this.props;
    return (
      <div className="editing-area">
        <Toolbar 
          onBackClick={onBackClick}
          label={label}
          addFloorAbove={addFloorAbove}
          addFloorBelow={addFloorBelow}
        />
        <RiserWrapper 
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

export default EditingArea;