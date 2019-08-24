import React, { Component } from 'react';
import Button from "./Button";
import { FiPlus } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";

class ToolbarButtons extends Component {

  render() {
    const {
      onClick,
    } = this.props;
    return (
      <div className="overview__toolbar__buttons">
        <Button onClick={onClick}
          className="overview__toolbar__button overview__toolbar__button--create"
        >
          <FiPlus />
        </Button>
        <Button
          className="overview__toolbar__button overview__toolbar__button--group"
        >
          <FiBarChart2 /><FiPlus />
        </Button>
        <Button
          className="overview__toolbar__button overview__toolbar__button--source"
        >
          <FiLogIn />
        </Button>
      </div>
    );
  }
}

export default ToolbarButtons;