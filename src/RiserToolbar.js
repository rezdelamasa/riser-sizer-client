import React, { Component } from 'react';
import Label from "./Label";
import RiserInfo from "./RiserInfo";
import Button from "./Button";

import "./RiserToolbar.css";

class RiserToolbar extends Component {
  render() {
    const {
      handleRiserLabelSubmit,
      showForm,
      riserLabel,
      editRiser,
      riser,
      handleRiserLabelChange,
      riserIndex,
      showLabelForm,
    } = this.props;

    return (
      <div className="riser__toolbar">
        <Label 
          handleRiserLabelSubmit={handleRiserLabelSubmit}
          handleRiserLabelChange={handleRiserLabelChange}
          showLabelForm={showLabelForm}
          showForm={showForm}
          riserLabel={riserLabel}
          riserIndex={riserIndex}
          riser={riser}
        />
      </div>
    );
  }
}

export default RiserToolbar;