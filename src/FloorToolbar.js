import React, { Component } from "react";

import FloorToolbarButtons from "./FloorToolbarButtons";
import ToolbarInfo from "./ToolbarInfo";
import "./FloorToolbar.css";

class FloorToolbar extends Component {

  render() {
    const {
      editFloor,
      label,
      loadValues,
      selectHotSource,
      selectColdSource,
      multipleEditEnabled,
      selectFloor
    } = this.props;
    return (
      <div className="floor__toolbar">
        <FloorToolbarButtons 
          editFloor={editFloor}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
          label={label}
          multipleEditEnabled={multipleEditEnabled}
          selectFloor={selectFloor}
        />
        <ToolbarInfo 
          loadValues={loadValues}
        />
      </div>
    );
  }
}

export default FloorToolbar;