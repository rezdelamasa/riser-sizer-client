import React, { Component } from 'react';
import EditingArea from "./EditingArea";
import Sidebar from "./Sidebar";

class Editor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      initialFloor: '',
      floors: [],
      showForm: true
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
          handleFloorFormSubmit={handleFloorFormSubmit}
          handleFloorFormChange={handleFloorFormChange}
          addFloorAbove={addFloorAbove}
          addFloorBelow={addFloorBelow}
          currentFloor={currentFloor}
          editFloor={editFloor}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
        />
        <Sidebar 
          onSelectFixture={onSelectFixture}
        />
      </div>
    );
  }
}

export default Editor;