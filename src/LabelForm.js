import React, { Component } from 'react';

import "./LabelForm.css";

class LabelForm extends Component {

  render() {
    const {
      handleRiserFormSubmit,
      handleRiserFormChange
    } = this.props;
    return (
      <form className="label__form" onSubmit={handleRiserFormSubmit()}>
        <input 
          className="label__input" 
          type="number" 
          onChange={handleRiserFormChange()}
          placeholder="Label"
        />
      </form>
    );
  }
}

export default LabelForm;