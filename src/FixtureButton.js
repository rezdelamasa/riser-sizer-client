import React, { Component } from 'react';

class FixtureButton extends Component {

  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    this.props.onSelectFixture(e, this.props.fixture);
  }

  render() {
    const { 
      fixture, 
      onSelectFixture 
    } = this.props;

    return (
      <button 
        onClick={this.handleClick} 
        type="button"
        className="fixture-button"
      >
        <h1 className="fixture-button__label">{fixture.name}</h1>
        <p className="fixture-button__info">{fixture.occupancy}</p>
        <p className="fixture-button__type">{fixture.fixtureType}</p>
      </button>
    );
  }
}

export default FixtureButton;