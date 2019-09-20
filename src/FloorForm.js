import React, { Component } from "react";

import "./FloorForm.css";

class FloorForm extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    this.props.handleFloorLabelSubmit(e, this.props);
  }

  handleChange = (e) => {
    this.props.handleFloorLabelChange(e);
  }

  render() {
    const {
      handleFloorLabelSubmit,
      handleFloorFormChange,
      handleFloorLabelChange
    } = this.props;
    return (
      <form className="floor__form" onSubmit={this.handleSubmit}>
        <input 
          className="floor__input" 
          type="number" 
          onChange={this.handleChange} 
          placeholder="Floor Label"
        />
      </form>
    );
  }
}

export default FloorForm;