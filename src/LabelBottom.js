import React, { Component } from 'react';
import LabelForm from "./LabelForm";
import LabelBottomText from "./LabelBottomText";

class LabelBottom extends Component {

  constructor(props) {
    super(props);

    this.state = {
      label: '',
      showForm: true,
    };
  }

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
      <div className="label__half label__half--bottom">
        {text}
        {form}
      </div>
    );
  }
}

export default LabelBottom;