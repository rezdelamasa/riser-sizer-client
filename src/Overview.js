import React, { Component } from 'react';
import OverviewToolbar from "./OverviewToolbar";
import Button from "./Button";
import RisersContainer from "./RisersContainer";

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
      handleRiserFormChange,
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
      lowestFloor
    } = this.props;

    return (
      <div className="Overview">
        <OverviewToolbar 
          onClick={onClick}
        />
        <Button 
          onClick={this.handleScrollRight}
          className="scroll-button scroll-button--right"
        >
          <FaChevronRight></FaChevronRight>
        </Button>
        <Button 
          onClick={this.handleScrollLeft}
          className="scroll-button scroll-button--left"
        >
          <FaChevronLeft></FaChevronLeft>
        </Button>
        <RisersContainer 
          risers={risers}
          handleRiserFormChange={handleRiserFormChange}
          handleRiserFormSubmit={handleRiserFormSubmit}
          showForm={showForm}
          className={'button--edit'}
          editRiser={editRiser}
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
        />
      </div>
    );
  }
}

export default Overview;