import React, { Component } from "react";

import Toolbar from "./Toolbar";
import RiserWrapper from "./RiserWrapper";
import "./EditingArea.css";

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
      handleFloorLabelSubmit,
      handleFloorFormChange,
      addFloorAbove,
      addFloorBelow,
      currentFloor,
      editFloor,
      selectHotSource,
      selectColdSource,
      handleFloorLabelChange,
      handleFixtureDelete
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
          handleFloorLabelSubmit={handleFloorLabelSubmit}
          handleFloorFormChange={handleFloorFormChange}
          editFloor={editFloor}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
          handleFloorLabelChange={handleFloorLabelChange}
          handleFixtureDelete={handleFixtureDelete}
        />
      </div>
    );
  }
}

export default EditingArea;