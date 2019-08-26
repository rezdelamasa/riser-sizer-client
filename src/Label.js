import React, { Component } from "react";
import LabelForm from "./LabelForm";
import LabelBottomText from "./LabelBottomText";

import "./Label.css";

class Label extends Component {

  render() {
    const {
      handleRiserFormChange,
      handleRiserFormSubmit,
      showForm,
      riserLabel
    } = this.props;

    let form;
    let text;
    if(riserLabel === '') {
      form = (
        <LabelForm 
          handleRiserFormSubmit={handleRiserFormSubmit}
          handleRiserFormChange={handleRiserFormChange}
        />
      );
      text = null;
    } else {
      form = null;
      text = (
        <LabelBottomText 
          riserLabel={riserLabel} 
        />
      );
    }

    return (
      <div className="label">
        {text}
        {form}
      </div>
    );
  }
}

export default Label;