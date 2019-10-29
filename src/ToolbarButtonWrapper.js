import React, { Component } from "react";

import Button from "./Button";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { TiPrinter } from "react-icons/ti"
import { FaRegCheckSquare } from "react-icons/fa";

import "./ToolbarButtonWrapper.css";

class ToolbarButtonWrapper extends Component {

  handleAddFloorAbove = (e) => {
    this.props.addFloorAbove(e);
  }

  handleAddFloorBelow = (e) => {
    this.props.addFloorBelow(e);
  }

  handlePrintClick = (e) => {
    this.props.handlePrint(e);
  }

  handleEnableMultipleEdit = (e) => {
    this.props.enableMultipleEdit(e);
  }

  render() {
    const {
      addFloorAbove,
      addFloorBelow,
      handlePrint,
      enableMultipleEdit,
      multipleEditEnabled
    } = this.props;

    let multipleEditButtonClass = "";
    if(multipleEditEnabled) {
      multipleEditButtonClass = "toolbar__button toolbar__button--edit"
    } else {
      multipleEditButtonClass = "toolbar__button"
    }

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
       
        <Button
          onClick={this.handleEnableMultipleEdit}
          className={multipleEditButtonClass}
        >
          <FaRegCheckSquare></FaRegCheckSquare>
        </Button>
      </div>
    );
  }
}

export default ToolbarButtonWrapper;


 // <Button
 //          onClick={this.handlePrintClick}
 //          className="toolbar__button toolbar__button--add"
 //        >
 //          <TiPrinter></TiPrinter>
 //        </Button>