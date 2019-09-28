import React, { Component } from "react";

import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FaRegCheckSquare } from "react-icons/fa";
import "./FloorToolbarButtons.css";

class FloorToolbarButtons extends Component {

  handleEditFloor = (e) => {
    this.props.editFloor(e, this.props.label);
  }

  handleSelectHotSource = (e) => {
    this.props.selectHotSource(e, this.props.label);
  }

  handleSelectColdSource = (e) => {
    this.props.selectColdSource(e, this.props.label);
  }

  handleSelectFloor = (e) => {
    this.props.selectFloor(e, this.props.label);
  }

  render() {
    const { 
      editFloor,
      label,
      selectHotSource,
      selectColdSource,
      multipleEditEnabled,
      selectFloor
    } = this.props;

    

    return (
      <div className="floor__toolbar__buttons">
        {this.props.multipleEditEnabled &&
          <Button 
            onClick={this.handleSelectFloor}
            className="floor__toolbar__button floor__toolbar__button--select"
          >
            <FaRegCheckSquare></FaRegCheckSquare>
          </Button>
        }
        <Button 
          onClick={this.handleEditFloor}
          className="floor__toolbar__button floor__toolbar__button--edit"
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button 
          onClick={this.handleSelectHotSource}
          className="floor__toolbar__button floor__toolbar__button--hot"
        >
          H
        </Button>
        <Button 
          onClick={this.handleSelectColdSource}
          className="floor__toolbar__button floor__toolbar__button--cold"
        >
          C
        </Button>
      </div>
    );
  }
}

export default FloorToolbarButtons;