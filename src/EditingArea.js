import React, { Component } from "react";

import Toolbar from "./Toolbar";
import RiserWrapper from "./RiserWrapper";
import "./EditingArea.css";

class EditingArea extends Component {

  constructor(props) {
    super(props);
  }

  handlePrint() {
    console.log("PRINT");
    window.print();
  }

  

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
      handleFixtureDelete,
      selectFloor,
      multipleEditEnabled,
      enableMultipleEdit
    } = this.props;
    return (
      <div className="editing-area">
        <Toolbar 
          onBackClick={onBackClick}
          label={currentRiser.label}
          addFloorAbove={addFloorAbove}
          addFloorBelow={addFloorBelow}
          handlePrint={this.handlePrint}
          enableMultipleEdit={enableMultipleEdit}
          multipleEditEnabled={multipleEditEnabled}
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
          multipleEditEnabled={multipleEditEnabled}
          selectFloor={selectFloor}
        />
      </div>
    );
  }
}

export default EditingArea;