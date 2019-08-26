import React, { Component } from 'react';
import Label from "./Label";
import RiserInfo from "./RiserInfo";
import Button from "./Button";

import "./RiserToolbar.css";

class RiserToolbar extends Component {
  render() {
    const {
      handleRiserFormChange,
      handleRiserFormSubmit,
      showForm,
      riserLabel,
      editRiser,
      riser
    } = this.props;

    return (
      <div className="riser__toolbar">
        <Label 
          handleRiserFormChange={handleRiserFormChange}
          handleRiserFormSubmit={handleRiserFormSubmit}
          showForm={showForm}
          riserLabel={riserLabel}
        />
      </div>
    );
  }
}

export default RiserToolbar;