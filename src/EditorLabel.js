import React, { Component } from "react";

class EditorLabel extends Component {

  render() {
    const {
      label
    } = this.props;
    return (
      <div className="label">
        <div className="label__half label__half--top">
          <h1 className="label__text label__text--top">P</h1>
        </div>
        <div className="label__half label__half--bottom">
          <h1 className="label__text label__text--bottom">{label}</h1>
        </div>
      </div>
    );
  }
}

export default EditorLabel;