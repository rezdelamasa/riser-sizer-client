import React, { Component } from "react";
import LabelBottomText from "./LabelBottomText";

import "./Label.css";

class Label extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    this.props.handleRiserLabelSubmit(e, this.props.riserIndex);
  }
  
  render() {
    const {
      handleRiserLabelSubmit,
      showForm,
      riserLabel,
      handleRiserLabelChange,
      riserIndex,
      showLabelForm,
      riser
    } = this.props;

    return (
      <div className="label">
        {riser.isEditingLabel
          ? <form className="label__form" onSubmit={this.handleSubmit}>
              <input 
                className="label__input" 
                type="number" 
                onChange={handleRiserLabelChange}
                placeholder="Label"
              />
            </form>
          : <LabelBottomText 
              riserLabel={riser.label}
            />
        }
      </div>
    );
  }
}

export default Label;