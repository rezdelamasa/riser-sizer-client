import React, { Component } from "react";

import Button from "./Button";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";

import "./ToolbarButtonWrapper.css";

class ToolbarButtonWrapper extends Component {

  handleAddFloorAbove = (e) => {
    this.props.addFloorAbove(e);
  }

  handleAddFloorBelow = (e) => {
    this.props.addFloorBelow(e);
  }

  render() {
    const {
      addFloorAbove,
      addFloorBelow,
    } = this.props;

    return (
      <div className="toolbar__button-wrapper">
        <Button
          onClick={this.handleAddFloorAbove}
          className="toolbar__button toolbar__button--add"
        >
          <IoIosAdd /><IoIosArrowRoundUp />
        </Button>
        <Button
          onClick={this.handleAddFloorBelow}
          className="toolbar__button toolbar__button--add"
        >
          <IoIosAdd /><IoIosArrowRoundDown />
        </Button>
      </div>
    );
  }
}

export default ToolbarButtonWrapper;