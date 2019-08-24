import React, { Component } from "react";
import LabelBottom from "./LabelBottom";

class Label extends Component {

  render() {
    const {
      handleRiserFormChange,
      handleRiserFormSubmit,
      showForm,
      riserLabel
    } = this.props;
    return (
      <div className="label">
        <div className="label__half label__half--top">
          <h1 className="label__text label__text--top">P</h1>
        </div>
        <LabelBottom 
          handleRiserFormChange={handleRiserFormChange}
          handleRiserFormSubmit={handleRiserFormSubmit}
          showForm={showForm}
          riserLabel={riserLabel}
        />
      </div>
    );
  }
}

export default Label;