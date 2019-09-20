import React, { Component } from 'react';

import SidebarItem from "./SidebarItem";
import {fixtures} from "./fixtures.js";
import "./Sidebar.css";

class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fixtures,
    };
  }

  render() {
    const {
      onSelectFixture
    } = this.props;
    return (
      <ul className="Sidebar">
        {this.state.fixtures.map(item => 
          <SidebarItem 
            key={fixtures.indexOf(item)}
            fixture={item}
            onSelectFixture={onSelectFixture}
          />
        )}
      </ul>
    );
  }
}

export default Sidebar;