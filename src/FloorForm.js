import React, { Component } from "react";

class FloorForm extends Component {

  render() {
    const {
      handleFloorFormSubmit,
      handleFloorFormChange
    } = this.props;
    return (
      <form className="floor__form" onSubmit={handleFloorFormSubmit}>
        <input 
          className="floor__input" 
          type="number" 
          onChange={handleFloorFormChange} 
          placeholder="Floor Label"
        />
      </form>
    );
  }
}

export default FloorForm;