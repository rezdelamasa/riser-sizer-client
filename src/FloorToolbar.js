import React, { Component } from "react";

import FloorToolbarButtons from "./FloorToolbarButtons";
import ToolbarInfo from "./ToolbarInfo";

class FloorToolbar extends Component {

  render() {
    const {
      editFloor,
      label,
      floorFixtures,
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
          floorFixtures={floorFixtures}
        />
      </div>
    );
  }
}

export default FloorToolbar;