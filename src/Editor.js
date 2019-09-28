import React, { Component } from 'react';
import EditingArea from "./EditingArea";
import Sidebar from "./Sidebar";
import "./Editor.css";

class Editor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      initialFloor: '',
      floors: [],
      showForm: true,
    }
  }

  render() {
    const {
      onSelectFixture,
      onChange,
      onSubmit,
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
      <div className="editor">
        <EditingArea 
          onChange={onChange}
          onSubmit={onSubmit}
          initialFloor={this.state.initialFloor}
          showForm={this.state.showForm}
          handleRiserFormChange={handleRiserFormChange}
          label={label}
          onBackClick={onBackClick}
          currentRiser={currentRiser}
          handleFloorLabelSubmit={handleFloorLabelSubmit}
          handleFloorFormChange={handleFloorFormChange}
          addFloorAbove={addFloorAbove}
          addFloorBelow={addFloorBelow}
          currentFloor={currentFloor}
          editFloor={editFloor}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
          handleFloorLabelChange={handleFloorLabelChange}
          handleFixtureDelete={handleFixtureDelete}
          selectFloor={selectFloor}
          multipleEditEnabled={multipleEditEnabled}
          enableMultipleEdit={enableMultipleEdit}
        />
        <Sidebar 
          onSelectFixture={onSelectFixture}
        />
      </div>
    );
  }
}

export default Editor;