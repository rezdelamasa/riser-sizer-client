import React, { Component } from 'react';

import FixtureButton from "./FixtureButton";
import "./SidebarItem.css";

class SidebarItem extends Component {

  render() {
    const { 
      fixture,
      onSelectFixture
    } = this.props;
    return (
      <li className="Sidebar__item">
        <FixtureButton 
          fixture={fixture}
          onSelectFixture={onSelectFixture}
        />
      </li>
    );
  }
}

export default SidebarItem;