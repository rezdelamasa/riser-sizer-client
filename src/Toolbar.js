import React, { Component } from "react";

import Button from "./Button";
import EditorLabel from "./EditorLabel";
import ToolbarButtonWrapper from "./ToolbarButtonWrapper";
import { IoIosArrowRoundBack } from "react-icons/io";

import "./Toolbar.css";

class Toolbar extends Component { 

  handleClick = (e) => {
    this.props.onBackClick(e);
  }

  render() {
    const {
      onBackClick,
      label,
      addFloorAbove,
      addFloorBelow,
    } = this.props; 


    return (
      <div className="toolbar">
        <Button
          onClick={this.handleClick}
          className="toolbar__button toolbar__button--back"
        >
          <IoIosArrowRoundBack />
        </Button>
        <p className="toolbar__label">P {label}</p>
        <ToolbarButtonWrapper 
          addFloorBelow={addFloorBelow}
          addFloorAbove={addFloorAbove}
        />
      </div>
    );
  }
}

export default Toolbar;