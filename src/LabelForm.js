import React, { Component } from 'react';

import "./LabelForm.css";

class LabelForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: ""
    }
  }

  render() {
    const {
      handleRiserLabelSubmit,
      handleChange,
      formInput,
      handleRiserLabelChange,
      riserIndex
    } = this.props;
    return (
      
    );
  }
}

export default LabelForm;