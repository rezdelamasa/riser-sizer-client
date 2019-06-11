import React, { Component } from 'react';
import './App.css';
import { fixtures } from './fixtures.js';
import { demandsList } from './demands.js';
import { gpmsList } from './gpms.js';
import { sizesList } from './sizes.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faWater } from '@fortawesome/free-solid-svg-icons'
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import { MdLockOpen } from "react-icons/md";
import { GiDesk } from "react-icons/gi";
import { MdHotel } from "react-icons/md";
import { MdRestaurant } from "react-icons/md";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      risers: [
        {
          label: '1',
          floors: [
            {
              label: "0",
              cumalativeLoadValues: {
                cold: 45.9,
                hot: 25.5,
                total: 0
              },
              gpms: {
                cold: 26.3,
                hot: 19.6,
                total: 0,
              },
              sizes: {
                cold: '3/4"',
                hot: '3/4"',
                total: '0',
              },
              loadValues: {
                cold: 10.8,
                hot: 6,
                total: 14.4,
              },
              fixtures: [
                {
                  fixtureType: "Flush Tank",
                  loadValues: {
                    cold: 2.7,
                    hot: 1.5,
                    total: 3.6,
                  },
                  name: "Bathroom Group",
                  occupancy: "Private",
                  shorthand: {
                    fixtureType: "FT",
                    name: "BTG",
                    occupancy: "Pr.",
                  },
                },
                {
                  fixtureType: "Flush Tank",
                  loadValues: {
                    cold: 2.7,
                    hot: 1.5,
                    total: 3.6,
                  },
                  name: "Bathroom Group",
                  occupancy: "Private",
                  shorthand: {
                    fixtureType: "FT",
                    name: "BTG",
                    occupancy: "Pr.",
                  },
                },
                {
                  fixtureType: "Flush Tank",
                  loadValues: {
                    cold: 2.7,
                    hot: 1.5,
                    total: 3.6,
                  },
                  name: "Bathroom Group",
                  occupancy: "Private",
                  shorthand: {
                    fixtureType: "FT",
                    name: "BTG",
                    occupancy: "Pr.",
                  },
                },
                {
                  fixtureType: "Flush Tank",
                  loadValues: {
                    cold: 2.7,
                    hot: 1.5,
                    total: 3.6,
                  },
                  name: "Bathroom Group",
                  occupancy: "Private",
                  shorthand: {
                    fixtureType: "FT",
                    name: "BTG",
                    occupancy: "Pr.",
                  },
                },
              ],
            }
          ],
          hotSourceFloor: '0',
          coldSourceFloor: '0',
        },
        {
          label: '2',
          floors: [
            {
              label: "0",
              cumalativeLoadValues: {
                cold: 45.9,
                hot: 25.5,
                total: 0
              },
              gpms: {
                cold: 26.3,
                hot: 19.6,
                total: 0,
              },
              sizes: {
                cold: '3/4"',
                hot: '3/4"',
                total: '0',
              },
              loadValues: {
                cold: 10.8,
                hot: 6,
                total: 14.4,
              },
              fixtures: [
                {
                  fixtureType: "Flush Tank",
                  loadValues: {
                    cold: 2.7,
                    hot: 1.5,
                    total: 3.6,
                  },
                  name: "Bathroom Group",
                  occupancy: "Private",
                  shorthand: {
                    fixtureType: "FT",
                    name: "BTG",
                    occupancy: "Pr.",
                  },
                },
                {
                  fixtureType: "Flush Tank",
                  loadValues: {
                    cold: 2.7,
                    hot: 1.5,
                    total: 3.6,
                  },
                  name: "Bathroom Group",
                  occupancy: "Private",
                  shorthand: {
                    fixtureType: "FT",
                    name: "BTG",
                    occupancy: "Pr.",
                  },
                },
                {
                  fixtureType: "Flush Tank",
                  loadValues: {
                    cold: 2.7,
                    hot: 1.5,
                    total: 3.6,
                  },
                  name: "Bathroom Group",
                  occupancy: "Private",
                  shorthand: {
                    fixtureType: "FT",
                    name: "BTG",
                    occupancy: "Pr.",
                  },
                },
                {
                  fixtureType: "Flush Tank",
                  loadValues: {
                    cold: 2.7,
                    hot: 1.5,
                    total: 3.6,
                  },
                  name: "Bathroom Group",
                  occupancy: "Private",
                  shorthand: {
                    fixtureType: "FT",
                    name: "BTG",
                    occupancy: "Pr.",
                  },
                },
              ],
            }
          ],
          hotSourceFloor: '0',
          coldSourceFloor: '0',
        },
        {
          label: '3',
          floors: [
            {
              label: "0",
              cumalativeLoadValues: {
                cold: 45.9,
                hot: 25.5,
                total: 0
              },
              gpms: {
                cold: 26.3,
                hot: 19.6,
                total: 0,
              },
              sizes: {
                cold: '3/4"',
                hot: '3/4"',
                total: '0',
              },
              loadValues: {
                cold: 10.8,
                hot: 6,
                total: 14.4,
              },
              fixtures: [
                {
                  fixtureType: "Flush Tank",
                  loadValues: {
                    cold: 2.7,
                    hot: 1.5,
                    total: 3.6,
                  },
                  name: "Bathroom Group",
                  occupancy: "Private",
                  shorthand: {
                    fixtureType: "FT",
                    name: "BTG",
                    occupancy: "Pr.",
                  },
                },
                {
                  fixtureType: "Flush Tank",
                  loadValues: {
                    cold: 2.7,
                    hot: 1.5,
                    total: 3.6,
                  },
                  name: "Bathroom Group",
                  occupancy: "Private",
                  shorthand: {
                    fixtureType: "FT",
                    name: "BTG",
                    occupancy: "Pr.",
                  },
                },
                {
                  fixtureType: "Flush Tank",
                  loadValues: {
                    cold: 2.7,
                    hot: 1.5,
                    total: 3.6,
                  },
                  name: "Bathroom Group",
                  occupancy: "Private",
                  shorthand: {
                    fixtureType: "FT",
                    name: "BTG",
                    occupancy: "Pr.",
                  },
                },
                {
                  fixtureType: "Flush Tank",
                  loadValues: {
                    cold: 2.7,
                    hot: 1.5,
                    total: 3.6,
                  },
                  name: "Bathroom Group",
                  occupancy: "Private",
                  shorthand: {
                    fixtureType: "FT",
                    name: "BTG",
                    occupancy: "Pr.",
                  },
                },
              ],
            }
          ],
          hotSourceFloor: '0',
          coldSourceFloor: '0',
        },
      ],
      initialFloor: '',
      currentRiser: {
        label: '',
        floors: [],
        sourceFloor: '',
        coldSourceFloor: '',
      },
      currentFloor: {
        label: '',
        fixtures: [],
        cumalativeLoadValues: {
          cold: 0,
          hot: 0, 
          total: 0
        },
        loadValues: {
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
        },
      },
      visible: 'Overview',
      showForm: true,
      riserLabelInput: '',
      floorInitInput: ''
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
    const coldSourceIndex = currentRiserObject.floors.findIndex(floor => floor.label === currentRiserObject.coldSourceFloor);

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
    const hotSourceIndex = currentRiserObject.floors.findIndex(floor => floor.label === currentRiserObject.hotSourceFloor);

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

    console.log(cumalativeHotLoadValues);

    for(var i = 0; i < currentRiserObject.floors.length; i++) {
      currentRiserObject.floors[i].cumalativeLoadValues.hot = cumalativeHotLoadValues[i];

      let hotGPMs = 0;

      for(var j = 0; j < demandsList.length; j++) {
        if(currentRiserObject.floors[i].cumalativeLoadValues.hot < gpmsList[j]) {
          console.log(currentRiserObject.floors[i].cumalativeLoadValues.hot);
          console.log(gpmsList[j]);
          currentRiserObject.floors[i].gpms.hot = demandsList[j - 1];
          currentRiserObject.floors[i].sizes.hot = sizesList[j - 1];
          break;
        } else {
          currentRiserObject.floors[i].gpms.hot = demandsList[j];
          currentRiserObject.floors[i].sizes.hot = sizesList[j];
        }
      }
      if(currentRiserObject.floors[i].sizes.hot == undefined) {
        currentRiserObject.floors[i].sizes.hot = '0';
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

    console.log(hotFloors);

    currentRiserObject.hotFloors = hotFloors;

    console.log(currentRiserObject);

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

    console.log(this.state);
  }

  render() {
    let page;
    if(this.state.visible === "Overview") {
      page = 
        <Overview 
          onClick={() => this.onCreate()}
          risers={this.state.risers}
          handleRiserFormChange={() => this.handleRiserFormChange}
          handleRiserFormSubmit={() => this.handleRiserFormSubmit}
          showForm={this.state.showForm}
          editRiser={(e, id) => this.editRiser(e, id)}
          highestColdRange={this.state.highestColdRange}
          highestHotRange={this.state.highestHotRange}
          topColdFloor={this.state.topColdFloor}
          topHotFloor={this.state.topHotFloor}
          bottomHotFloor={this.state.bottomHotFloor}
          bottomColdFloor={this.state.bottomColdFloor}
          totalFloorRange={this.state.totalFloorRange}
          highestFloor={this.state.highestFloor}
          lowestFloor={this.state.lowestFloor}
        />;
    } else if(this.state.visible === "Editor") {
      page = (
        <Editor 
          onSelectFixture={this.onSelectFixture}
          onChange={this.handleFloorChange}
          label={this.state.currentRiser.label}
          onBackClick={this.onBackClick}
          currentRiser={this.state.currentRiser}
          handleFloorFormChange={this.handleFloorFormChange}
          handleFloorFormSubmit={this.handleFloorFormSubmit}
          addFloorAbove={this.addFloorAbove}
          addFloorBelow={this.addFloorBelow}
          currentFloor={this.state.currentFloor}
          editFloor={(e, id) => this.editFloor(e, id)}
          selectHotSource={(e, id) => this.selectHotSource(e, id)}
          selectColdSource={(e, id) => this.selectColdSource(e, id)}
        />
      );
    }
    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

class Overview extends Component {

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
        <h1>Risers</h1>
        <Button onClick={onClick}>
          Create Riser
        </Button>
        <RiserList 
          risers={risers}
          handleRiserFormChange={handleRiserFormChange}
          handleRiserFormSubmit={handleRiserFormSubmit}
          showForm={showForm}
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
        />
      </div>
    );
  }
}

class Button extends Component {
  render() {
    const {
      onClick,
      className,
      children,
    } = this.props;

    return (
      <button
        onClick={onClick}
        className={className}
        type="button"
        >
        {children}
      </button>
    );
  }
}

class RiserList extends Component {

  render() {
    const {
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
    console.log(risers);
    return (
      <ul className="riser-list">
        {risers.map(riser => 
          <RiserItem 
            handleRiserFormChange={handleRiserFormChange}
            handleRiserFormSubmit={handleRiserFormSubmit}
            showForm={showForm}
            riserLabel={riser.label}
            editRiser={editRiser}
            riser={riser}
            highestColdRange={highestColdRange}
            highestHotRange={highestHotRange}
            topColdFloor={topColdFloor}
            topHotFloor={topHotFloor}
            bottomHotFloor={bottomHotFloor}
            bottomColdFloor={bottomColdFloor}
            totalFloorRange={totalFloorRange}
            highestFloor={highestFloor}
            lowestFloor={lowestFloor}
          />
        )}
      </ul>
    );
  }
}

class RiserItem extends Component {

  handleClick = (e) => {
    this.props.editRiser(e, this.props.riserLabel);
  }

  render() {
    const {
      handleRiserFormChange,
      handleRiserFormSubmit,
      showForm,
      riserLabel,
      editRiser,
      riser,
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
      <li className="riser-item">
        <Label 
          handleRiserFormChange={handleRiserFormChange}
          handleRiserFormSubmit={handleRiserFormSubmit}
          showForm={showForm}
          riserLabel={riserLabel}
        />
        <RiserInfo 
          riser={riser}
        />
        <Button
          className={'button--edit'}
          onClick={(e, id) => {editRiser(e, {riserLabel})}}
        >
          Edit
        </Button>
        <RiserHelper 
          riser={riser}
          highestColdRange={highestColdRange}
          highestHotRange={highestHotRange}
          topColdFloor={topColdFloor}
          topHotFloor={topHotFloor}
          bottomHotFloor={bottomHotFloor}
          bottomColdFloor={bottomColdFloor}
          totalFloorRange={totalFloorRange}
          highestFloor={highestFloor}
          lowestFloor={lowestFloor}
        />
      </li>
    );
  }
}

class RiserHelper extends Component {

  render() {
    const {
      riser,
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

    // style={{height: 100 / highestFloorRange * riser.floors.length + "%", position: 'relative', top: 100 / highestFloorRange * (topFloor - (Number(riser.floors[riser.floors.length - 1].label))) + '%'}}
    return (
      <div className="riser-helper" > 
        <RiserCold 
          riser={riser}
          highestColdRange={highestColdRange}
          topColdFloor={topColdFloor}
          bottomColdFloor={bottomColdFloor}
          totalFloorRange={totalFloorRange}
          highestFloor={highestFloor}
          lowestFloor={lowestFloor}
        />
        <RiserHot 
          riser={riser}
          highestHotRange={highestHotRange}
          topHotFloor={topHotFloor}
          bottomHotFloor={bottomHotFloor}
          totalFloorRange={totalFloorRange}
          highestFloor={highestFloor}
          lowestFloor={lowestFloor}
        />
      </div>
    );
  }
}

class RiserCold extends Component {

  render() {
    const {
      riser,
      highestColdRange,
      topColdFloor,
      bottomColdFloor,
      totalFloorRange,
      highestFloor
    } = this.props;

    let riserColdRange = 1;

    if(riser.coldFloors) {
      riserColdRange = riser.coldFloors.below.length + riser.coldFloors.above.length;
    }

    let topPosition;
    let height = "";
    let minHeight = "";


    if(riser.coldFloors) {
      topPosition = 50 * (highestFloor - Number((riser.coldFloors.above[riser.coldFloors.above.length - 1].label)));

      topPosition += "px";
      console.log(topPosition);
    }

    console.log(totalFloorRange);

    // style={{ height: height, top: topPosition}}

    return (
      <div className="riser-cold" style={{ top: topPosition }}> 
        <RiserColdHalfAbove 
          riser={riser}
          highestColdRange={highestColdRange}
          topColdFloor={topColdFloor}
          bottomColdFloor={bottomColdFloor}
          totalFloorRange={totalFloorRange}
        />
        <RiserColdHalfBelow 
          riser={riser}
          highestColdRange={highestColdRange}
          topColdFloor={topColdFloor}
          bottomColdFloor={bottomColdFloor}
        />
      </div>
    );
  }
}

class RiserHot extends Component {

  render() {
    const {
      riser,
      highestHotRange,
      topHotFloor,
      bottomHotFloor,
      totalFloorRange,
      highestFloor
    } = this.props;

    let riserHotRange = 1;

    if(riser.hotFloors) {
      riserHotRange = riser.hotFloors.below.length + riser.hotFloors.above.length;
    }

    let topPosition;
    let height = "";
    let minHeight = "";


    if(riser.hotFloors) {
      topPosition = 50 * (highestFloor - Number((riser.hotFloors.above[riser.hotFloors.above.length - 1].label)));

      topPosition += "px";
      console.log(topPosition);
    }

    console.log(totalFloorRange);

    // style={{ height: height, top: topPosition}}

    return (
      <div className="riser-hot" style={{ top: topPosition }}> 
        <RiserHotHalfAbove 
          riser={riser}
          highestHotRange={highestHotRange}
          topHotFloor={topHotFloor}
          bottomHotFloor={bottomHotFloor}
          totalFloorRange={totalFloorRange}
        />
        <RiserHotHalfBelow 
          riser={riser}
          highestHotRange={highestHotRange}
          topHotFloor={topHotFloor}
          bottomHotFloor={bottomHotFloor}
        />
      </div>
    );
  }
}

class RiserColdHalfAbove extends Component {

  render() {
    const {
      riser,
      highestColdRange,
      topColdFloor,
      bottomColdFloor,
      totalFloorRange
    } = this.props;
    
    let height;
    let minHeight;

    if(riser.coldFloors) {
      height = 100 / riser.floors.length * Number(riser.coldFloors.above.length);
      if(height == 0) {
        height = 100;
      }

      if(riser.coldFloors.above.length > 0) {
        minHeight = "calc(" + height + " + 100px)";
      }
    }

    let coldFloorsAbove;
    let coldFloorElements;

    if(riser.coldFloors) {
      coldFloorsAbove = riser.coldFloors.above;
      coldFloorElements = riser.coldFloors.above.map(floor =>
        <RiserColdFloor 
          floor={floor}
        />
      );
    }

    let riserSize;

    if(riser.totalSizes) {
      riserSize = riser.totalSizes.cold;
    }

    // style={{ height: height + "%", minHeight: minHeight }}

    return (
      <div className="riser__cold-half riser__cold-half--above" > 
        {coldFloorElements}
      </div>
    );
  }
}

class RiserColdHalfBelow extends Component {

  render() {
    const {
      riser,
      highestColdRange,
      topColdFloor,
      bottomColdFloor,
      totalFloorRange
    } = this.props;
    
    let height;
    let minHeight;

    if(riser.coldFloors) {
      height = 100 / riser.floors.length * Number(riser.coldFloors.below.length);
      if(height == 0) {
        height = 100;
      }

      if(riser.coldFloors.below.length > 0) {
        minHeight = "calc(" + height + " + 100px)";
      }
    }

    let coldFloorsBelow;
    let coldFloorElements;

    if(riser.coldFloors) {
      coldFloorsBelow = riser.coldFloors.below;
      coldFloorElements = riser.coldFloors.below.map(floor =>
        <RiserColdFloor 
          floor={floor}
        />
      );
    }

    // style={{ height: height + "%", minHeight: minHeight }}

    return (
      <div className="riser__cold-half riser__cold-half--below" > 
        {coldFloorElements}
      </div>
    );
  }
}

class RiserColdFloor extends Component {
  render() {
    const {
      floor,
    } = this.props;

    return (
      <div className="riser__floor">
        <p className="riser__floor__size riser__floor__size--cold">{floor.sizes.cold}</p>
      </div>
    );
  }
}

class RiserHotHalfAbove extends Component {

  render() {
    const {
      riser,
      highestHotRange,
      topHotFloor,
      bottomHotFloor,
      totalFloorRange
    } = this.props;
    
    let height;
    let minHeight;

    if(riser.hotFloors) {
      height = 100 / riser.floors.length * Number(riser.hotFloors.above.length);
      if(height == 0) {
        height = 100;
      }

      if(riser.hotFloors.above.length > 0) {
        minHeight = "calc(" + height + " + 100px)";
      }
    }

    let hotFloorsAbove;
    let hotFloorElements;

    if(riser.hotFloors) {
      hotFloorsAbove = riser.hotFloors.above;
      hotFloorElements = riser.hotFloors.above.map(floor =>
        <RiserHotFloor 
          floor={floor}
        />
      );
    }

    let riserSize;

    if(riser.totalSizes) {
      riserSize = riser.totalSizes.hot;
    }

    // style={{ height: height + "%", minHeight: minHeight }}

    return (
      <div className="riser__hot-half riser__hot-half--above" > 
        {hotFloorElements}
        <p className="riser__size--hot">{riserSize}</p>
      </div>
    );
  }
}

class RiserHotHalfBelow extends Component {

  render() {
    const {
      riser,
      highestHotRange,
      topHotFloor,
      bottomHotFloor,
      totalFloorRange
    } = this.props;
    
    let height;
    let minHeight;

    if(riser.hotFloors) {
      height = 100 / riser.floors.length * Number(riser.hotFloors.below.length);
      if(height == 0) {
        height = 100;
      }

      if(riser.hotFloors.below.length > 0) {
        minHeight = "calc(" + height + " + 100px)";
      }
    }

    let hotFloorsBelow;
    let hotFloorElements;

    if(riser.hotFloors) {
      hotFloorsBelow = riser.hotFloors.below;
      hotFloorElements = riser.hotFloors.below.map(floor =>
        <RiserHotFloor 
          floor={floor}
        />
      );
    }

    // style={{ height: height + "%", minHeight: minHeight }}

    return (
      <div className="riser__hot-half riser__hot-half--below" > 
        {hotFloorElements}
      </div>
    );
  }
}

class RiserHotFloor extends Component {
  render() {
    const {
      floor,
    } = this.props;

    return (
      <div className="riser__floor">
        <p className="riser__floor__size riser__floor__size--hot">{floor.sizes.hot}</p>
      </div>
    );
  }
}

class RiserInfo extends Component {

  render() {
    const {
      handleRiserFormChange,
      handleRiserFormSubmit,
      showForm,
      riserLabel,
      editRiser,
      riser
    } = this.props;
    return (
      <div className="riser-item__info">
      </div>
    );
  }
}

class Editor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      initialFloor: '',
      floors: [],
      showForm: true
    }
  }

  render() {
    const {
      onSelectFixture,
      onChange,
      onSubmit,
      handleRiserFormChange,
      label,
      onBackClick,
      currentRiser,
      handleFloorFormSubmit,
      handleFloorFormChange,
      addFloorAbove,
      addFloorBelow,
      currentFloor,
      editFloor,
      selectHotSource,
      selectColdSource
    } = this.props;
    return (
      <div className="editor">
        <EditingArea 
          onChange={onChange}
          onSubmit={onSubmit}
          initialFloor={this.state.initialFloor}
          showForm={this.state.showForm}
          handleRiserFormChange={handleRiserFormChange}
          label={label}
          onBackClick={onBackClick}
          currentRiser={currentRiser}
          handleFloorFormSubmit={handleFloorFormSubmit}
          handleFloorFormChange={handleFloorFormChange}
          addFloorAbove={addFloorAbove}
          addFloorBelow={addFloorBelow}
          currentFloor={currentFloor}
          editFloor={editFloor}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
        />
        <Sidebar 
          onSelectFixture={onSelectFixture}
        />
      </div>
    );
  }
}

class EditingArea extends Component {

  render() {
    const {
      initialFloor,
      onChange,
      onSubmit,
      showForm,
      handleRiserFormChange,
      label, 
      onBackClick,
      currentRiser,
      handleFloorFormSubmit,
      handleFloorFormChange,
      addFloorAbove,
      addFloorBelow,
      currentFloor,
      editFloor,
      selectHotSource,
      selectColdSource
    } = this.props;
    return (
      <div className="editing-area">
        <Toolbar 
          onBackClick={onBackClick}
          label={label}
          addFloorAbove={addFloorAbove}
          addFloorBelow={addFloorBelow}
        />
        <RiserWrapper 
          onChange={onChange}
          onSubmit={onSubmit}
          initialFloor={initialFloor}
          showForm={showForm}
          currentRiser={currentRiser}
          currentFloor={currentFloor}
          handleFloorFormSubmit={handleFloorFormSubmit}
          handleFloorFormChange={handleFloorFormChange}
          editFloor={editFloor}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
        />
      </div>
    );
  }
}

class Toolbar extends Component {

  render() {
    const {
      onBackClick,
      label,
      addFloorAbove,
      addFloorBelow,
    } = this.props;
    return (
      <div className="toolbar">
        <Button
          onClick={onBackClick}
          className="toolbar__button toolbar__button--back"
        >
          <IoIosArrowRoundBack />
        </Button>
        <EditorLabel 
          label={label}
        />
        <ToolbarButtonWrapper 
          addFloorBelow={addFloorBelow}
          addFloorAbove={addFloorAbove}
        />
      </div>
    );
  }
}

class ToolbarButtonWrapper extends Component {

  render() {
    const {
      addFloorAbove,
      addFloorBelow,
    } = this.props;
    return (
      <div className="toolbar__button-wrapper">
        <Button
          onClick={addFloorAbove}
          className="toolbar__button toolbar__button--add"
        >
          <IoIosAdd /><IoIosArrowRoundUp />
        </Button>
        <Button
          onClick={addFloorBelow}
          className="toolbar__button toolbar__button--add"
        >
          <IoIosAdd /><IoIosArrowRoundDown />
        </Button>
      </div>
    );
  }
}

class EditorLabel extends Component {

  render() {
    const {
      label
    } = this.props;
    return (
      <div className="label">
        <div className="label__half label__half--top">
          <h1 className="label__text label__text--top">P</h1>
        </div>
        <div className="label__half label__half--bottom">
          <h1 className="label__text label__text--bottom">{label}</h1>
        </div>
      </div>
    );
  }
}

class Label extends Component {

  render() {
    const {
      handleRiserFormChange,
      handleRiserFormSubmit,
      showForm,
      riserLabel
    } = this.props;
    return (
      <div className="label">
        <div className="label__half label__half--top">
          <h1 className="label__text label__text--top">P</h1>
        </div>
        <LabelBottom 
          handleRiserFormChange={handleRiserFormChange}
          handleRiserFormSubmit={handleRiserFormSubmit}
          showForm={showForm}
          riserLabel={riserLabel}
        />
      </div>
    );
  }
}

class LabelBottom extends Component {

  constructor(props) {
    super(props);

    this.state = {
      label: '',
      showForm: true,
    };
  }

  render() {
    const {
      handleRiserFormChange,
      handleRiserFormSubmit,
      showForm,
      riserLabel
    } = this.props;
    let form;
    let text;
    if(riserLabel === '') {
      form = (
        <LabelForm 
          handleRiserFormSubmit={handleRiserFormSubmit}
          handleRiserFormChange={handleRiserFormChange}
        />
      );
      text = null;
    } else {
      form = null;
      text = (
        <LabelBottomText 
          riserLabel={riserLabel} 
        />
      );
    }
    return (
      <div className="label__half label__half--bottom">
        {text}
        {form}
      </div>
    );
  }
}

class LabelBottomText extends Component {

  render() {
    const {
      riserLabel
    } = this.props;
    return (
      <h1 className="label__text label__text--bottom">
        {riserLabel}
      </h1>
    );
  }
}

class LabelForm extends Component {

  render() {
    const {
      handleRiserFormSubmit,
      handleRiserFormChange
    } = this.props;
    return (
      <form className="label__form" onSubmit={handleRiserFormSubmit()}>
        <input className="label__input" type="number" onChange={handleRiserFormChange()} />
      </form>
    );
  }
}

class RiserWrapper extends Component {

  render() {
    const {
      initialFloor,
      onChange,
      onSubmit,
      showForm,
      currentRiser,
      handleFloorFormSubmit,
      handleFloorFormChange,
      currentFloor,
      editFloor,
      selectHotSource,
      selectColdSource
    } = this.props;

    return (
      <div className="riser-wrapper">
        <Riser 
          onChange={onChange}
          onSubmit={onSubmit}
          initialFloor={initialFloor}
          showForm={showForm}
          currentRiser={currentRiser}
          currentFloor={currentFloor}
          handleFloorFormSubmit={handleFloorFormSubmit}
          handleFloorFormChange={handleFloorFormChange}
          editFloor={editFloor}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
        />
      </div>
    );
  }
}

class Riser extends Component {

  render() {
    const {
      initialFloor,
      onChange,
      onSubmit,
      showForm,
      currentRiser,
      handleFloorFormSubmit,
      handleFloorFormChange,
      currentFloor,
      editFloor,
      selectHotSource,
      selectColdSource
    } = this.props;

    let riser;

    let emptyLoadValues = {
      cold: 0,
      hot: 0,
      total: 0
    }

    if(currentRiser.floors.length === 0) {
      riser = (
        <Floor 
          onChange={onChange}
          onSubmit={onSubmit}
          initialFloor={initialFloor}
          showForm={showForm}
          currentRiser={currentRiser}
          handleFloorFormSubmit={handleFloorFormSubmit}
          handleFloorFormChange={handleFloorFormChange}
          floorFixtures={currentRiser.floors}
          currentFloor={currentFloor}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
          cumalativeLoadValues={emptyLoadValues}
          gpms={emptyLoadValues}
          sizes={emptyLoadValues}
        />
      );
    } else {
      riser = (
        currentRiser.floors.map(floor => 
          <Floor 
            currentRiser={currentRiser}
            label={floor.label}
            floorFixtures={floor.fixtures}
            cumalativeLoadValues={floor.cumalativeLoadValues}
            gpms={floor.gpms}
            sizes={floor.sizes}
            key={floor.label}
            currentFloor={currentFloor}
            editFloor={editFloor}
            selectHotSource={selectHotSource}
            selectColdSource={selectColdSource}
          />
        )
      );
    }
    return (
      <ul className="riser">
        {riser}
      </ul>
    );
  }
}

class Floor extends Component {

  render() {
    const {
      initialFloor,
      onChange,
      onSubmit,
      showForm,
      currentRiser,
      handleFloorFormSubmit,
      handleFloorFormChange,
      label,
      floorFixtures,
      key,
      currentFloor,
      editFloor,
      selectHotSource,
      selectColdSource,
      cumalativeLoadValues,
      gpms,
      sizes
    } = this.props;

    let floorClass = '';

    if(currentFloor.label === label) {
      floorClass += " floor--active";
    } 

    if(currentRiser.sourceFloor === label) {
      floorClass += " floor--source";
    }

    if(currentRiser.coldSourceFloor && currentRiser.coldSourceFloor === label) {
      floorClass += " floor--cold";
    }

    if(currentRiser.hotSourceFloor && currentRiser.hotSourceFloor === label) {
      floorClass += " floor--hot";
    }

    return (
      <li className={"floor " + floorClass}>
        <FloorTotalInfo 
          floorFixtures={floorFixtures}
          label={label}
          currentRiser={currentRiser}
          cumalativeLoadValues={cumalativeLoadValues}
          gpms={gpms}
          sizes={sizes}
          onChange={onChange}
          onSubmit={onSubmit}
          initialFloor={initialFloor}
          handleFloorFormSubmit={handleFloorFormSubmit}
          handleFloorFormChange={handleFloorFormChange}
        />
        <FloorMain 
          editFloor={editFloor}
          label={label}
          floorFixtures={floorFixtures}
          currentRiser={currentRiser}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
        />
      </li>
    );
  }
} 

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
            <p className="floor__total-info__values">
              T:
            </p>
          </div>
          <div className="floor__total-info__column floor__total-info__column--sizes">
            <p className="floor__total-info__values">
              {sizes.cold}
            </p>
            <p className="floor__total-info__values">
              {sizes.hot}
            </p>
            <p className="floor__total-info__values">
              {sizes.total}
            </p>
          </div>
          
        </div>
        { form }
        <h1 className="floor__label">{label}</h1>
      </div>
    );
  }
} 

class FloorMain extends Component {

  render() {
    const {
      showForm,
      currentRiser,
      label,
      floorFixtures,
      key,
      currentFloor,
      editFloor,
      selectHotSource,
      selectColdSource
    } = this.props;

    return (
      <div className="floor__main">
        <FloorFixtureList
          floorFixtures={floorFixtures}
        />
        <FloorToolbar 
          editFloor={editFloor}
          label={label}
          floorFixtures={floorFixtures}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
        />
      </div>
    );
  }
}

class FloorToolbar extends Component {

  render() {
    const {
      editFloor,
      label,
      floorFixtures,
      selectHotSource,
      selectColdSource
    } = this.props;
    return (
      <div className="floor__toolbar">
        <FloorToolbarButtons 
          editFloor={editFloor}
          selectHotSource={selectHotSource}
          selectColdSource={selectColdSource}
          label={label}
        />
        <ToolbarInfo 
          floorFixtures={floorFixtures}
        />
      </div>
    );
  }
}

class FloorToolbarButtons extends Component {

  render() {
    const { 
      editFloor,
      label,
      selectHotSource,
      selectColdSource
    } = this.props;
    return (
      <div className="floor__toolbar__buttons">
        <Button 
          onClick={(e, id) => editFloor(e, {label})}
          className="floor__toolbar__button floor__toolbar__button--edit"
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button 
          onClick={(e, id) => selectHotSource(e, {label})}
          className="floor__toolbar__button floor__toolbar__button--hot"
        >
          H
        </Button>
        <Button 
          onClick={(e, id) => selectColdSource(e, {label})}
          className="floor__toolbar__button floor__toolbar__button--cold"
        >
          C
        </Button>
      </div>
    );
  }
}

class ToolbarInfo extends Component {

  render() {
    const {
      floorFixtures
    } = this.props;

    let totalColdFU = 0;
    let totalHotFU = 0;
    let totalBothFU = 0;

    floorFixtures.forEach(function(f) {
      totalColdFU += f.loadValues.cold;
      totalHotFU += f.loadValues.hot;
      totalBothFU += f.loadValues.total;
    });

    return (
      <div className="toolbar__info">
        <p className="toolbar__info__text toolbar__info__text--cold">{totalColdFU.toFixed(1)}</p>
        <p className="toolbar__info__text toolbar__info__text--hot">{totalHotFU.toFixed(1)}</p>
        <p className="toolbar__info__text toolbar__info__text--total">{totalBothFU.toFixed(1)}</p>
      </div>
    );
  }
}

class FloorFixtureList extends Component {

  render() {
    const {
      floorFixtures
    } = this.props;
    return (
      <ul className="floor-fixtures">
        {floorFixtures.map(fixture =>
          <FloorFixture 
            fixture={fixture}
          />
        )}
      </ul>
    );
  }
}

class FloorFixture extends Component {

  render() {
    const { 
      fixture, 
      onSelectFixture 
    } = this.props;
    
    let fixtureNameElement;
    let fixtureInfoElement;

    if(fixture.shorthand.name) {
      fixtureNameElement = <h1 className="fixture__label">{fixture.shorthand.name}</h1>
    } else {
      fixtureNameElement = <h1 className="fixture__label">{fixture.name}</h1>
    }

    if(fixture.occupancy == "Private") {
      fixtureInfoElement = (<p className="fixture__info"><MdLockOutline /></p>);
    } else if(fixture.occupancy == "Public") {
      fixtureInfoElement = (<p className="fixture__info"><MdLockOpen /></p>);
    } else if(fixture.occupancy == "Offices, etc.") {
      fixtureInfoElement = (<p className="fixture__info"><GiDesk /></p>);
    } else if(fixture.occupancy == "Hotel, restaurant") {
      fixtureInfoElement = (<p className="fixture__info"><MdHotel /> | <MdRestaurant /></p>);
    } else {
      fixtureInfoElement = (<p className="fixture__info">{fixture.occupancy}</p>);
    }

    return (
      <div className="fixture">
        {fixtureNameElement}
        {fixtureInfoElement}
        <p className="fixture__type">{fixture.fixtureType}</p>
      </div>
    );
  }
}

class FloorForm extends Component {

  render() {
    const {
      handleFloorFormSubmit,
      handleFloorFormChange
    } = this.props;
    return (
      <form className="floor__form" onSubmit={handleFloorFormSubmit}>
        <input 
          className="floor__input" 
          type="text" 
          onChange={handleFloorFormChange} 
          placeholder="Floor Label"
        />
      </form>
    );
  }
}

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

class FixtureButton extends Component {

  render() {
    const { 
      fixture, 
      onSelectFixture 
    } = this.props;
    return (
      <button 
        onClick={() => onSelectFixture(fixture)} 
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

export default App;
