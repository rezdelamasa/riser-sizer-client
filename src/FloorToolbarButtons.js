import React, { Component } from "react";

import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

class FloorToolbarButtons extends Component {

  render() {
    const { 
      editFloor,
      label,
      selectHotSource,
      selectColdSource
    } = this.props;
    return (
      <div className="floor__toolbar__buttons">
        <Button 
          onClick={(e, id) => editFloor(e, {label})}
          className="floor__toolbar__button floor__toolbar__button--edit"
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button 
          onClick={(e, id) => selectHotSource(e, {label})}
          className="floor__toolbar__button floor__toolbar__button--hot"
        >
          H
        </Button>
        <Button 
          onClick={(e, id) => selectColdSource(e, {label})}
          className="floor__toolbar__button floor__toolbar__button--cold"
        >
          C
        </Button>
      </div>
    );
  }
}

export default FloorToolbarButtons;