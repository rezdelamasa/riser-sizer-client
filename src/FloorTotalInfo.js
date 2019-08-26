import React, { Component } from "react";

import FloorForm from "./FloorForm";
import "./FloorTotalInfo.css";

class FloorTotalInfo extends Component {

  render() {
    const {
      floorFixtures,
      label,
      currentRiser,
      cumalativeLoadValues,
      gpms,
      sizes,
      onChange,
      onSubmit,
      initialFloor,
      handleFloorFormSubmit,
      handleFloorFormChange
    } = this.props;

    let form;
    let floorLabel;
    if(currentRiser.floors.length === 0) {
      form = (
        <FloorForm 
          onChange={onChange}
          onSubmit={onSubmit}
          initialFloor={initialFloor}
          handleFloorFormSubmit={handleFloorFormSubmit}
          handleFloorFormChange={handleFloorFormChange}
        />
      );  
      floorLabel = null;
    } else {
      form = null;
    }

    let floorSizes = {
      cold: 0
    }

    // <div className="floor__total-info__column floor__total-info__column--gpms">
            // <p className="floor__total-info__values">
              // {gpms.cold}
            // </p>
            // <p className="floor__total-info__values">
              // {gpms.hot}
            // </p>
            // <p className="floor__total-info__values">
              // {gpms.total}
            // </p>
          // </div>
          // <div className="floor__total-info__column floor__total-info__column--loads">
            // <p className="floor__total-info__values">
              // {cumalativeLoadValues.cold.toFixed(1)}
            // </p>
            // <p className="floor__total-info__values">
              // {cumalativeLoadValues.hot.toFixed(1)}
            // </p>
            // <p className="floor__total-info__values">
              // {cumalativeLoadValues.total.toFixed(1)}
            // </p>
          // </div>

    return (
      <div className="floor__total-info"> 
        <div className="floor__total-info__helper">
          <div className="floor__total-info__column floor__total-info__column--labels">
            <p className="floor__total-info__values">
              C:
            </p>
            <p className="floor__total-info__values">
              H:
            </p>
          </div>
          <div className="floor__total-info__column floor__total-info__column--sizes">
            <p className="floor__total-info__values">
              {sizes.cold}
            </p>
            <p className="floor__total-info__values">
              {sizes.hot}
            </p>
          </div>
          
        </div>
        { form }
        <h1 className="floor__label">{label}</h1>
      </div>
    );
  }
} 

export default FloorTotalInfo;