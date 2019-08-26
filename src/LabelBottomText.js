import React, { Component } from "react";

class LabelBottomText extends Component {

  render() {
    const {
      riserLabel
    } = this.props;
    return (
      <h1 className="label__text label__text--bottom">
        Riser {riserLabel}
      </h1>
    );
  }
}

export default LabelBottomText;