import React, { Component } from 'react';
import Label from "./Label";
import RiserInfo from "./RiserInfo";
import Button from "./Button";

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
        <RiserInfo 
          riser={riser}
        />
        <Button
          className={'button--edit'}
          onClick={(e, id) => {editRiser(e, {riserLabel})}}
        >
          Edit
        </Button>
      </div>
    );
  }
}

export default RiserToolbar;