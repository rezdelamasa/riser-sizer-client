import React, { Component } from 'react';
import Button from "./Button";
import RisersContainer from "./RisersContainer";
import "./Overview.css";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

class Overview extends Component {

  constructor(props) {
    super(props);
    this.handleScrollRight = this.handleScrollRight.bind(this);
    this.handleScrollLeft = this.handleScrollLeft.bind(this);

    this.state = {
      leftScroll: 0
    };

    let references = [];

    this.editingAreaElement = React.createRef();
    this.toolbarElement = React.createRef();
  }

  handleScrollRight() {

    let leftScroll = this.state.leftScroll;
    
    console.log(this.editingAreaElement);

    // this.toolbarElement.scrollLeft += 600;
    this.editingAreaElement.scrollLeft += 600;

    console.log(this.editingAreaElement.scrollLeft);
    console.log(this.toolbarElement.scrollLeft);

  }

  handleScrollLeft() {

    let leftScroll = this.state.leftScroll;
    
    console.log(this.editingAreaElement);

    // this.toolbarElement.scrollLeft -= 600;
    this.editingAreaElement.scrollLeft -= 600;

  }

  render() {
    const {
      onClick,
      risers,
      handleRiserFormSubmit,
      showForm,
      editRiser,
      highestColdRange,
      highestHotRange,
      topColdFloor,
      topHotFloor,
      bottomHotFloor,
      bottomColdFloor,
      totalFloorRange,
      highestFloor,
      lowestFloor,
      projectName,
      handleEditRiser,
      handleRiserLabelSubmit,
      handleRiserLabelChange,
      showLabelForm,
      handleRiserDelete
    } = this.props;

    return (
      <div className="Overview">
        <RisersContainer 
          risers={risers}
          handleRiserLabelSubmit={handleRiserLabelSubmit}
          handleRiserLabelChange={handleRiserLabelChange}
          showLabelForm={showLabelForm}
          showForm={showForm}
          className={'button--edit'}
          handleEditRiser={handleEditRiser}
          highestColdRange={highestColdRange}
          highestHotRange={highestHotRange}
          topColdFloor={topColdFloor}
          topHotFloor={topHotFloor}
          bottomHotFloor={bottomHotFloor}
          bottomColdFloor={bottomColdFloor}
          totalFloorRange={totalFloorRange}
          highestFloor={highestFloor}
          lowestFloor={lowestFloor}
          editingAreaRef={el => this.editingAreaElement = el}
          handleRiserDelete={handleRiserDelete}
        />
      </div>
    );
  }
}

export default Overview;