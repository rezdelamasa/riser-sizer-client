import React, { Component } from "react";

class ToolbarInfo extends Component {

  render() {
    const {
      loadValues
    } = this.props;

    return (
      <div className="toolbar__info">
        <p className="toolbar__info__text toolbar__info__text--cold">{loadValues.cold}</p>
        <p className="toolbar__info__text toolbar__info__text--hot">{loadValues.hot}</p>
      </div>
    );
  }
}

export default ToolbarInfo;