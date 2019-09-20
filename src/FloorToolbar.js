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
      selectColdSource
    } = this.props;
    return (
      <div className="floor__toolbar">
        <FloorToolbarButtons 
          editFloor={editFloor}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
          label={label}
        />
        <ToolbarInfo 
          loadValues={loadValues}
        />
      </div>
    );
  }
}

export default FloorToolbar;