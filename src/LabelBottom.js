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
    
    return (
      <div className="label__half label__half--bottom">
        {text}
        {form}
      </div>
    );
  }
}

export default LabelBottom;