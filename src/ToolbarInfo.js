import React, { Component } from "react";

class ToolbarInfo extends Component {

  render() {
    const {
      floorFixtures
    } = this.props;

    let totalColdFU = 0;
    let totalHotFU = 0;
    let totalBothFU = 0;

    floorFixtures.forEach(function(f) {
      totalColdFU += f.loadValues.cold;
      totalHotFU += f.loadValues.hot;
      totalBothFU += f.loadValues.total;
    });

    return (
      <div className="toolbar__info">
        <p className="toolbar__info__text toolbar__info__text--cold">{totalColdFU.toFixed(1)}</p>
        <p className="toolbar__info__text toolbar__info__text--hot">{totalHotFU.toFixed(1)}</p>
      </div>
    );
  }
}

export default ToolbarInfo;