import React, { Component } from 'react';
import RiserItem from "./RiserItem";

import "./RiserList.css";

class RiserList extends Component {

  constructor(props) {
    super(props);
    this.riserListRef = React.createRef();

    this.handleWheel = this.handleWheel.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleWheel);
  }

  handleWheel(e) {
    const item = this.riserListRef.current;
    if(item) {
      if(e.deltaY > 0) {
        item.scrollLeft += 20;
      } else {
        item.scrollLeft -= 20;
      }
    }
  }

  render() {
    const {
      risers,
      handleRiserLabelSubmit,
      showForm,
      handleEditRiser,
      highestColdRange,
      highestHotRange,
      topColdFloor,
      topHotFloor,
      bottomHotFloor,
      bottomColdFloor,
      totalFloorRange,
      highestFloor,
      lowestFloor,
      leftScroll,
      editingAreaRef,
      handleRiserLabelChange,
      showLabelForm,
      handleRiserDelete
    } = this.props;

    let list;

    if(risers.length == 0) {
      list = <p className="riser-list--empty">Empty</p>
    } else {
      list = risers.map((riser, index) => 
          <RiserItem
            riserIndex={index}
            handleRiserLabelSubmit={handleRiserLabelSubmit}
            handleRiserLabelChange={handleRiserLabelChange}
            showLabelForm={showLabelForm}
            showForm={showForm}
            riserLabel={riser.label}
            handleEditRiser={handleEditRiser}
            riser={riser}
            risers={risers}
            highestColdRange={highestColdRange}
            highestHotRange={highestHotRange}
            topColdFloor={topColdFloor}
            topHotFloor={topHotFloor}
            bottomHotFloor={bottomHotFloor}
            bottomColdFloor={bottomColdFloor}
            totalFloorRange={totalFloorRange}
            highestFloor={highestFloor}
            lowestFloor={lowestFloor}
            handleRiserDelete={handleRiserDelete}
          />
        )
    }
  
    return (
      <ul className="riser-list" ref={this.riserListRef} onWheel={this.handleWheel}>
        {list}
      </ul>
    );
  }
}

export default RiserList;