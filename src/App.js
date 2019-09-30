import React, { Component, Fragment } from "react";
import './App.css';
import { API, Storage } from "aws-amplify";
import { fixtures } from './fixtures.js';
import { demandsList } from './demands.js';
import gpmsList from './gpms.js';
import sizesList from './sizes.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { FiPause } from "react-icons/fi";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import { Auth } from "aws-amplify";

import Overview from "./Overview";
import Editor from "./Editor";
import Button from "./Button";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      user: {
        subscription: '',
        projects: [],
      },
    };

    this.update                 = this.update.bind(this);
    this.onCreate               = this.onCreate.bind(this);
    this.onSelectFixture        = this.onSelectFixture.bind(this);
    this.handleRiserFormSubmit  = this.handleRiserFormSubmit.bind(this);
    this.handleRiserFormChange  = this.handleRiserFormChange.bind(this);
    this.handleFloorFormChange  = this.handleFloorFormChange.bind(this);
    this.handleFloorFormSubmit  = this.handleFloorFormSubmit.bind(this);
    this.editRiser              = this.editRiser.bind(this);
    this.onBackClick            = this.onBackClick.bind(this);
    this.addFloorAbove          = this.addFloorAbove.bind(this);
    this.addFloorBelow          = this.addFloorBelow.bind(this);
    this.editFloor              = this.editFloor.bind(this);
    this.selectHotSource        = this.selectHotSource.bind(this);
    this.selectColdSource       = this.selectColdSource.bind(this);
    this.calculateColdSizes     = this.calculateColdSizes.bind(this);
    this.calculateHotSizes      = this.calculateHotSizes.bind(this);
    this.getHighestColdRange    = this.getHighestColdRange.bind(this);
    this.getHighestHotRange     = this.getHighestHotRange.bind(this);
    this.getTopColdFloor        = this.getTopColdFloor.bind(this);
    this.getTopHotFloor         = this.getTopHotFloor.bind(this);
    this.getBottomColdFloor     = this.getBottomColdFloor.bind(this);
    this.getBottomHotFloor      = this.getBottomHotFloor.bind(this);
    this.getTotalFloorRange     = this.getTotalFloorRange.bind(this);
    this.handleLogout           = this.handleLogout.bind(this);
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      // userObject = await Auth.currentUserInfo();
      // email = userObject.attributes.email.substring(0, userObject.attributes.email.indexOf('@'));
      this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
      console.log(e);
    }

    this.setState(
      { 
        isAuthenticating: false,
      }
    );
  }

  // getUser() {
  //   return API.get("riser-sizer-user-properties", `/riser-sizer-user-properties/${this.props.match.params.id}`);
  // }

  // createUser(user) {
  //   return API.post("riser-sizer-user-properties", "/riser-sizer-user-properties", {
  //     body: user
  //   });
  // }

  // saveUser(user) {
  //   return API.put("riser-sizer-user-properties", `/riser-sizer-user-properties/${this.props.match.params.id}`, {
  //     body: user
  //   });
  // }

  userHasAuthenticated = (authenticated) => {
    this.setState({ 
      isAuthenticated: authenticated,
    });
  };

  handleLogout = async event => {
    await Auth.signOut();

    this.userHasAuthenticated(false);

    this.props.history.push("/");
  }



  handleFloorFormChange(e) {
    console.log(e.target.value);

    const { floorInitInput } = { ...this.state };
    let input = e.target.value;

    this.setState({
      floorInitInput: input
    }, function() {
      console.log(this.state);
    });
  }

  handleFloorFormSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);

    const { currentRiser } = { ...this.state };
    let currentRiserObject = currentRiser;

    let floorObject = {
      label: '',
      fixtures: [],
      loadValues: {
        cold: 0,
        hot: 0,
        total: 0
      },
      cumalativeLoadValues: {
        cold: 0,
        hot: 0,
        total: 0
      },
      gpms: {
        cold: 0,
        hot: 0,
        total: 0
      },
      sizes: {
        cold: '0',
        hot: '0',
        total: '0'
      }
    }

    floorObject.label = this.state.floorInitInput;
    console.log(floorObject);

    currentRiserObject.floors.push(floorObject);

    this.setState({
      currentRiser: currentRiserObject,
      currentFloor: this.state.currentRiser.floors[0]
    }, function() {
      console.log(this.state);
    });
  }

  handleRiserFormChange(e) {
    console.log(e.target.value);

    this.setState({
      riserLabelInput: e.target.value
    });

  }

  handleRiserFormSubmit(e) {
    e.preventDefault();
    // when the user submits the init form, 

    let { risers } = { ...this.state };
    let risersArray = risers;

    let riserObject = {
      label: this.state.riserLabelInput,
      floors: [],
      sourceFloor: '',
      coldSourceFloor: ''
    };

    risersArray[risersArray.length - 1] = riserObject;

    this.setState({
      showForm: false,
      riserLabelInput: '',
      risers: risersArray
    });
  }

  getTotalFloorRange() {
    
    // initialize lowest floor var
    let lowestFloor = 0; 

    // initialize highest floor var
    let highestFloor = 0;

    // initialize totalFloorRange
    let totalFloorRange = 0;

    // declare dummy variables
    let { risers } = { ...this.state };
    
    // loop through riser then loop through each floor of the risers
    risers.forEach(function(riser) {
      riser.floors.forEach(function(floor) {
        // if the label is lower than the lowestFloor then declare it as such
        if(Number(floor.label) < lowestFloor) {
          lowestFloor = Number(floor.label);
        }
        
        // similarly, if the label is greater than the highestFloor then also declare it as such
        if(Number(floor.label) > highestFloor) {
          highestFloor = Number(floor.label);
        }
      });
    });
    
    // after looping and getting both variables, get the difference and set it as the totalFloorRange

    totalFloorRange = highestFloor - lowestFloor;
    totalFloorRange += 1;

    console.log(totalFloorRange);

    this.setState({
      totalFloorRange,
      highestFloor,
      lowestFloor
    });

  }

  getHighestColdRange() {
    let highestColdRange = 0;

    let { risers } = { ...this.state };

    risers.forEach(function(riser) {
      if(riser.coldFloors) {
        if(riser.coldFloors.below.length + riser.coldFloors.above.length > highestColdRange) {
          highestColdRange = riser.coldFloors.below.length + riser.coldFloors.above.length; 
        }
      }
    });

    this.setState({
      highestColdRange
    });

    console.log(highestColdRange);
  }

  getHighestHotRange() {
    let highestHotRange = 0;

    let { risers } = { ...this.state };

    risers.forEach(function(riser) {
      if(riser.hotFloors) {
        if(riser.hotFloors.below.length + riser.hotFloors.above.length > highestHotRange) {
          highestHotRange = riser.hotFloors.below.length + riser.hotFloors.above.length; 
        }
      }
    });

    this.setState({
      highestHotRange
    });

    console.log(highestHotRange);
  }

  getTopColdFloor() {
    let topColdFloor = 0;

    let { risers } = { ...this.state };

    risers.forEach(function(riser) {
      if(riser.coldFloors) {
        if(riser.coldFloors.above.length > 0) {
          if(Number(riser.coldFloors.above[riser.coldFloors.above.length - 1].label) > topColdFloor) {
            topColdFloor = riser.coldFloors.above[riser.coldFloors.above.length - 1].label;
          }
        } else if(riser.coldFloors.below.length > 0) {
          topColdFloor = riser.coldFloors.below[0].label;
        }
      }
    });

    topColdFloor = topColdFloor + "";

    this.setState({
      topColdFloor
    });

    console.log(topColdFloor);
  }

  getTopHotFloor() {
    let topHotFloor = 0;

    let { risers } = { ...this.state };

    risers.forEach(function(riser) {
      if(riser.hotFloors) {
        if(riser.hotFloors.above.length > 0) {
          if(Number(riser.hotFloors.above[riser.hotFloors.above.length - 1].label) > topHotFloor) {
            topHotFloor = riser.hotFloors.above[riser.hotFloors.above.length - 1].label;
          }
        } else if(riser.hotFloors.below.length > 0) {
          topHotFloor = riser.hotFloors.below[0].label;
        }
      }
    });

    topHotFloor = topHotFloor + "";

    this.setState({
      topHotFloor
    });

    console.log(topHotFloor);
  }

  getBottomColdFloor() {
    let bottomColdFloor = 0;

    let { risers } = { ...this.state };

    risers.forEach(function(riser) {
      if(riser.coldFloors) {
        if(riser.coldFloors.below.length > 0) {
          let label = Number(riser.coldFloors.below[0].label);
          if(label < bottomColdFloor) {
            console.log(label);
            bottomColdFloor = label + "";
            console.log(bottomColdFloor);
          }
        } else if(riser.coldFloors.above.length > 0 && riser.coldFloors.below.length == 0) {
          if(Number(riser.coldFloors.above[0].label) < bottomColdFloor) {
            bottomColdFloor = riser.coldFloors.above[0].label;
            console.log(bottomColdFloor);
          }
        }
      }
    });

    console.log(bottomColdFloor);

    bottomColdFloor = bottomColdFloor + "";

    this.setState({
      bottomColdFloor
    });

    console.log(bottomColdFloor);
  }

  getBottomHotFloor() {
    let bottomHotFloor = 0;

    let { risers } = { ...this.state };

    risers.forEach(function(riser) {
      if(riser.hotFloors) {
        if(riser.hotFloors.below.length > 0) {
          if(Number(riser.hotFloors.below[0].label) < bottomHotFloor) {
            bottomHotFloor = riser.hotFloors.below[0].label;
          }
        } else if(riser.hotFloors.above.length > 0 && riser.hotFloors.below.length == 0) {
          if(Number(riser.hotFloors.above[0].label) < bottomHotFloor) {
            bottomHotFloor = riser.hotFloors.above[0].label;
            console.log(bottomHotFloor);
          }
        }
      }
    });

    bottomHotFloor = bottomHotFloor + "";

    this.setState({
      bottomHotFloor
    });

    console.log(bottomHotFloor);
  }

  calculateColdSizes(currentRiserObject) {
    let coldSourceIndex = currentRiserObject.floors.findIndex(floor => floor.label === currentRiserObject.coldSourceFloor);
    
    coldSourceIndex = coldSourceIndex + 1;

    console.log(coldSourceIndex);

    const floorsAboveColdSource = currentRiserObject.floors.slice(coldSourceIndex);
    const floorsBelowColdSource = currentRiserObject.floors.slice(0, coldSourceIndex);

    let cumalativeLoadValuesBelowArray = [];
    let cumalativeLoadValuesAboveArray = [];

    let count = 0;
    let maxRunsAboveCold = floorsAboveColdSource.length;
    console.log(floorsAboveColdSource);
    let maxRunsBelowCold = floorsBelowColdSource.length;
    console.log(floorsBelowColdSource);

    let cumalativeLoadValuesBelowObject = {
      cold: 0,
      hot: 0,
      total: 0
    }

    let cumalativeLoadValuesAboveObject = {
      cold: 0,
      hot: 0,
      total: 0
    }

    let totalColdFU = 0;

    let cumalativeColdLoadValues = [];

    let cumalativeBelowColdLoadValues = [];

    for(var i = maxRunsAboveCold - 1; i >= 0; i--) {
      totalColdFU += floorsAboveColdSource[i].loadValues.cold;
      cumalativeColdLoadValues.push(totalColdFU);
    }

    cumalativeColdLoadValues.reverse();

    totalColdFU = 0;

    for(var i = 0; i < maxRunsBelowCold; i++) {
      totalColdFU += floorsBelowColdSource[i].loadValues.cold;
      cumalativeBelowColdLoadValues.push(totalColdFU);
    }
      
    cumalativeColdLoadValues = cumalativeBelowColdLoadValues.concat(cumalativeColdLoadValues);

    currentRiserObject.totalLoadValues = {
      cold: 0,
      hot: 0
    };

    currentRiserObject.totalGPMs = {
      cold: 0,
      hot: 0
    };

    currentRiserObject.totalSizes = {
      cold: "",
      hot: ""
    };

    for(var i = 0; i < currentRiserObject.floors.length; i++) {
      currentRiserObject.floors[i].cumalativeLoadValues.cold = cumalativeColdLoadValues[i];

      totalColdFU += currentRiserObject.floors[i].loadValues.cold;

      console.log(totalColdFU);

      currentRiserObject.totalLoadValues.cold += currentRiserObject.floors[i].loadValues.cold;

      console.log(currentRiserObject.totalLoadValues);

      for(var j = 0; j < demandsList.length; j++) {

        if(currentRiserObject.floors[i].cumalativeLoadValues.cold < gpmsList[j]) {
          currentRiserObject.floors[i].gpms.cold = demandsList[j - 1];
          currentRiserObject.floors[i].sizes.cold = sizesList[j - 1];
          break;
        } else {
          currentRiserObject.floors[i].gpms.cold = "0";
          currentRiserObject.floors[i].sizes.cold = "0";
        }
      }

      if(currentRiserObject.floors[i].sizes.cold == undefined) {
        currentRiserObject.floors[i].sizes.cold = '0';
      } 
    }

    for(var i = 0; i < demandsList.length; i++) {

      if(currentRiserObject.totalLoadValues.cold < gpmsList[i]) {
        currentRiserObject.totalGPMs.cold = demandsList[i - 1];
        currentRiserObject.totalSizes.cold = sizesList[i - 1];
        break;
      } else {
        currentRiserObject.totalGPMs.cold = 0;
        currentRiserObject.totalSizes.cold = "0";
      }
    }

    let coldFloors = {
      below: [],
      above: [],
    };

    floorsBelowColdSource.forEach(function(floor) {
      if(floor.sizes.cold != "" && floor.sizes.cold != "0" && floor.sizes.cold != undefined) {
        coldFloors.below.push(floor);
      }
    });

    floorsAboveColdSource.forEach(function(floor) {
      if(floor.sizes.cold != "" && floor.sizes.cold != "0" && floor.sizes.cold != undefined) {
        coldFloors.above.push(floor);
      }
    });

    currentRiserObject.coldFloors = coldFloors;

    return currentRiserObject;
  }

  calculateHotSizes(currentRiserObject) {
    let hotSourceIndex = currentRiserObject.floors.findIndex(floor => floor.label === currentRiserObject.hotSourceFloor);
    
    hotSourceIndex = hotSourceIndex + 1;

    console.log(hotSourceIndex);

    const floorsAboveHotSource = currentRiserObject.floors.slice(hotSourceIndex);
    const floorsBelowHotSource = currentRiserObject.floors.slice(0, hotSourceIndex);

    let cumalativeLoadValuesBelowArray = [];
    let cumalativeLoadValuesAboveArray = [];

    let count = 0;
    let maxRunsAboveHot = floorsAboveHotSource.length;
    console.log(floorsAboveHotSource);
    let maxRunsBelowHot = floorsBelowHotSource.length;
    console.log(floorsBelowHotSource);

    let cumalativeLoadValuesBelowObject = {
      cold: 0,
      hot: 0,
      total: 0
    }

    let cumalativeLoadValuesAboveObject = {
      cold: 0,
      hot: 0,
      total: 0
    }

    let totalHotFU = 0;

    let cumalativeHotLoadValues = [];

    let cumalativeBelowHotLoadValues = [];

    for(var i = maxRunsAboveHot - 1; i >= 0; i--) {
      totalHotFU += floorsAboveHotSource[i].loadValues.hot;
      cumalativeHotLoadValues.push(totalHotFU);
    }

    cumalativeHotLoadValues.reverse();

    totalHotFU = 0;

    for(var i = 0; i < maxRunsBelowHot; i++) {
      totalHotFU += floorsBelowHotSource[i].loadValues.hot;
      cumalativeBelowHotLoadValues.push(totalHotFU);
    }
      
    cumalativeHotLoadValues = cumalativeBelowHotLoadValues.concat(cumalativeHotLoadValues);

    currentRiserObject.totalLoadValues = {
      cold: 0,
      hot: 0
    };

    currentRiserObject.totalGPMs = {
      cold: 0,
      hot: 0
    };

    currentRiserObject.totalSizes = {
      cold: "",
      hot: ""
    };

    for(var i = 0; i < currentRiserObject.floors.length; i++) {
      currentRiserObject.floors[i].cumalativeLoadValues.hot = cumalativeHotLoadValues[i];

      totalHotFU += currentRiserObject.floors[i].loadValues.hot;

      console.log(totalHotFU);

      currentRiserObject.totalLoadValues.hot += currentRiserObject.floors[i].loadValues.hot;

      console.log(currentRiserObject.totalLoadValues);

      for(var j = 0; j < demandsList.length; j++) {

        if(currentRiserObject.floors[i].cumalativeLoadValues.hot < gpmsList[j]) {
          currentRiserObject.floors[i].gpms.hot = demandsList[j - 1];
          currentRiserObject.floors[i].sizes.hot = sizesList[j - 1];
          break;
        } else {
          currentRiserObject.floors[i].gpms.hot = "0";
          currentRiserObject.floors[i].sizes.hot = "0";
        }
      }

      if(currentRiserObject.floors[i].sizes.hot == undefined) {
        currentRiserObject.floors[i].sizes.hot = '0';
      } 
    }

    for(var i = 0; i < demandsList.length; i++) {

      if(currentRiserObject.totalLoadValues.hot < gpmsList[i]) {
        currentRiserObject.totalGPMs.hot = demandsList[i - 1];
        currentRiserObject.totalSizes.hot = sizesList[i - 1];
        break;
      } else {
        currentRiserObject.totalGPMs.hot = 0;
        currentRiserObject.totalSizes.hot = "0";
      }
    }

    let hotFloors = {
      below: [],
      above: [],
    };

    floorsBelowHotSource.forEach(function(floor) {
      if(floor.sizes.hot != "" && floor.sizes.hot != "0" && floor.sizes.hot != undefined) {
        hotFloors.below.push(floor);
      }
    });

    floorsAboveHotSource.forEach(function(floor) {
      if(floor.sizes.hot != "" && floor.sizes.hot != "0" && floor.sizes.hot != undefined) {
        hotFloors.above.push(floor);
      }
    });

    currentRiserObject.hotFloors = hotFloors;

    return currentRiserObject;
  }

  update() {
    const { risers } = { ...this.state };
    let riserArray = risers;

    riserArray.map(riser => this.calculateHotSizes(riser));
    riserArray.map(riser => this.calculateColdSizes(riser));
    this.getTotalFloorRange();

    this.setState({
      risers: riserArray
    });

    console.log(riserArray);
  }

  onSelectFixture(fixture) {
    const { currentFloor, currentRiser, risers } = { ...this.state };
    let floorObject = currentFloor;

    floorObject.fixtures.push(fixture);

    floorObject.loadValues.cold += fixture.loadValues.cold;
    floorObject.loadValues.hot += fixture.loadValues.hot;
    floorObject.loadValues.total += fixture.loadValues.total;

    console.log(floorObject);

    let currentRiserObject = currentRiser;

    // for hot pipe sizes

    if(currentRiserObject.hotSourceFloor) {
      currentRiserObject = this.calculateHotSizes(currentRiserObject);
    }

    // for cold pipe sizes

    if(currentRiserObject.coldSourceFloor) {
      currentRiserObject = this.calculateColdSizes(currentRiserObject);
    }

    this.setState({
      currentFloor: floorObject,
      currentRiser: currentRiserObject
    });

  }

  onCreate() {
    console.log("created a new riser");
    /*
      when the user clicks to create a new riser,
        add a new empty riser object to state.risers
    */

    let { risers } = { ...this.state };
    let risersArray = risers;

    if(risersArray.length == 0 || risersArray[risersArray.length - 1].label != '') {
      let riserObject = {
        label: '',
        floors: [],
        sourceFloor: ''
      };

      risersArray.push(riserObject);

      this.setState({
        // visible: 'Editor',
        risers: risersArray,
      });
      console.log(this.state);

      this.getHighestColdRange();
      this.getHighestHotRange();
      this.getTopColdFloor();
      this.getBottomColdFloor();
      this.getTopHotFloor();
      this.getBottomHotFloor();
    }
  }

  editRiser(e, id) {   
    // console.log(e.target);
    console.log(id.riserLabel); 

    // when user clicks the button to edit a riser, get the riser's label and use it to access the data's corresponding data then set the state with that as the current riser
    const { risers } = { ...this.state };
    const { currentRiser } = { ...this.state };

    let riserObject = currentRiser;

    riserObject = risers.filter(function(riser) {
      return riser.label === id.riserLabel;
    });

    riserObject = riserObject[0];

    console.log(riserObject);
    this.setState({
      currentRiser: riserObject,
      visible: 'Editor'
    }, function() {
      console.log(this.state);
    });
  }

  onBackClick(e) {
    console.log(e);
    
    this.update();
    this.getHighestColdRange();
    this.getHighestHotRange();
    this.getTopColdFloor();
    this.getBottomColdFloor();
    this.getTopHotFloor();
    this.getBottomHotFloor();

    const emptyObject = {};

    this.setState({
      visible: 'Overview',
      currentRiser: emptyObject
    });

    console.log(this.state);
  }

  addFloorAbove(e) {
    if(this.state.currentRiser.floors.length > 0) {
      console.log(this.state.currentRiser);
      const { currentRiser, currentFloor } = { ...this.state };

      let currentRiserObject = currentRiser;
      const lastFloor = currentRiserObject.floors[currentRiserObject.floors.length - 1];

      let newFloorObject = {
        label: (Number(lastFloor.label) + 1) + '',
        fixtures: [],
        loadValues: {
         cold: 0,
          hot: 0,
          total: 0
        },
        cumalativeLoadValues: {
          cold: 0,
          hot: 0,
          total: 0
        },
        gpms: {
          cold: 0,
          hot: 0,
          total: 0
        },
        sizes: {
          cold: '0',
          hot: '0',
          total: '0'
        }
      }

      console.log(newFloorObject);

      let currentFloorObject = currentFloor;
      currentFloorObject = newFloorObject;
      console.log(currentFloorObject);

      currentRiserObject.floors.push(newFloorObject);
      console.log(currentRiserObject);
      this.setState({
        currentRiser: currentRiserObject,
        currentFloor: currentFloorObject
      });

      this.getHighestColdRange();
      this.getHighestHotRange();
      this.getTopColdFloor();
      this.getBottomColdFloor();
      this.getTopHotFloor();
      this.getBottomHotFloor();
    }
  }

  addFloorBelow(e) {
    if(this.state.currentRiser.floors.length > 0) {
      console.log(this.state.currentRiser);
      const { currentRiser, currentFloor } = { ...this.state };

      let currentRiserObject = currentRiser;
      const lastFloor = currentRiserObject.floors[currentRiserObject.floors.length - 1];
      
      let newFloorObject = {
        label: (Number(currentRiser.floors[0].label) - 1) + '',
        fixtures: [],
        loadValues: {
         cold: 0,
          hot: 0,
          total: 0
        },
        cumalativeLoadValues: {
          cold: 0,
          hot: 0,
          total: 0
        },
        gpms: {
          cold: 0,
          hot: 0,
          total: 0
        },
        sizes: {
          cold: '0',
          hot: '0',
          total: '0'
        }
      }

      console.log(newFloorObject);
      let currentFloorObject = currentFloor;
      currentFloorObject = newFloorObject;
      console.log(currentFloorObject);

      currentRiserObject.floors.unshift(newFloorObject);
      console.log(currentRiserObject);
      this.setState({
        currentRiser: currentRiserObject,
        currentFloor: currentFloorObject
      }, function() {
        console.log(this.state);
      });

      this.getHighestColdRange();
      this.getHighestHotRange();
      this.getTopColdFloor();
      this.getBottomColdFloor();
      this.getTopHotFloor();
      this.getBottomHotFloor();
    }
  }

  editFloor(e, label) {
    console.log(label);
    const { currentRiser } = { ...this.state };
    let currentRiserObject = currentRiser;
    console.log(currentRiserObject);
    var match = currentRiserObject.floors.findIndex(floor => floor.label == label.label);

    this.setState({
      currentFloor: currentRiserObject.floors[match]
    })
    console.log(this.state.currentFloor);
  }

  selectSource(e, label) {
    const { currentRiser } = { ...this.state};
    let currentRiserObject = currentRiser;
    currentRiserObject.sourceFloor = label.label;

    console.log(currentRiserObject);

    this.setState({
      currentRiser: currentRiserObject
    })

    console.log(this.state);
  }

  selectColdSource(e, label) {
    const { currentRiser } = { ...this.state};
    let currentRiserObject = currentRiser;
    currentRiserObject.coldSourceFloor = label.label;

    console.log(currentRiserObject);
    console.log(e.target);

    this.setState({
      currentRiser: currentRiserObject
    })

    this.update();

    console.log(this.state);
  }

  selectHotSource(e, label) {
    const { currentRiser } = { ...this.state};
    let currentRiserObject = currentRiser;
    currentRiserObject.hotSourceFloor = label.label;

    console.log(currentRiserObject);
    console.log(e.target);

    this.setState({
      currentRiser: currentRiserObject
    })

    this.update();

    console.log(this.state);
  }

  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      user: this.state.user,
      handleLogout: this.handleLogout,
    }; 

    return (
      !this.state.isAuthenticating &&
      <div className="App">
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);