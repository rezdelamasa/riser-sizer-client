import React, { Component } from "react";

import Button from "./Button";
import EditorLabel from "./EditorLabel";
import ToolbarButtonWrapper from "./ToolbarButtonWrapper";
import { IoIosArrowRoundBack } from "react-icons/io";

class Toolbar extends Component {

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
          onClick={onBackClick}
          className="toolbar__button toolbar__button--back"
        >
          <IoIosArrowRoundBack />
        </Button>
        <EditorLabel 
          label={label}
        />
        <ToolbarButtonWrapper 
          addFloorBelow={addFloorBelow}
          addFloorAbove={addFloorAbove}
        />
      </div>
    );
  }
}

export default Toolbar;