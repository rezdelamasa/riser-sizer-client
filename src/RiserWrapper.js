import React, { Component } from "react";

import Riser from "./Riser"; 
import "./RiserWrapper.css";

class RiserWrapper extends Component {

  render() {
    const {
      initialFloor,
      onChange,
      onSubmit,
      showForm,
      currentRiser,
      handleFloorLabelSubmit,
      handleFloorFormChange,
      currentFloor,
      editFloor,
      selectHotSource,
      selectColdSource,
      handleFloorLabelChange,
      handleFixtureDelete,
      enableMultipleEdit,
      selectFloor,
      multipleEditEnabled
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
          handleFloorLabelSubmit={handleFloorLabelSubmit}
          handleFloorFormChange={handleFloorFormChange}
          editFloor={editFloor}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
          handleFloorLabelChange={handleFloorLabelChange}
          handleFixtureDelete={handleFixtureDelete}
          enableMultipleEdit={enableMultipleEdit}
          selectFloor={selectFloor}
          multipleEditEnabled={multipleEditEnabled}
        />
      </div>
    );
  }
}

export default RiserWrapper;