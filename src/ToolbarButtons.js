import React, { Component } from 'react';
import Button from "./Button";
import { FiPlus } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";

import "./ToolbarButtons.css";

class ToolbarButtons extends Component {

  render() {
    const {
      onClick,
    } = this.props;
    return (
      <div className="overview__toolbar__buttons">
        
      </div>
    );
  }
}

export default ToolbarButtons;