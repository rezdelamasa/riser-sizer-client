import React, { Component } from 'react';
import ToolbarButtons from "./ToolbarButtons";

import "./OverviewToolbar.css";

class OverviewToolbar extends Component {

  render() {
    const {
      onClick,
    } = this.props;
    return (
      <div className="overview__toolbar">
        <h1 className="toolbar__heading">Risers</h1>
        <ToolbarButtons 
          onClick={onClick}
        />
      </div>
    );
  }
}

export default OverviewToolbar;