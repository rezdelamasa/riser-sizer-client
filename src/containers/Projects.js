import React, { Component } from "react";
import { API, Storage } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import Overview from "../Overview";
import OverviewToolbar from "../OverviewToolbar";
import Editor from "../Editor";
import "./Projects.css";
import sizesList from "../sizes.js";
import gpmsList from "../gpms.js";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null,
      isDeleting: null,
      project: null,
      content: "",
      currentRiser: null,
      isEditing: false,
      riserLabel: "",
      showLabelForm: true,
      floorFormInput: "",
      enableMultipleEdit: false
    };

    this.handleRiserLabelChange = this.handleRiserLabelChange.bind(this);
    this.handleRiserLabelSubmit = this.handleRiserLabelSubmit.bind(this);
    this.handleEditRiser        = this.handleEditRiser.bind(this);
    this.handleFloorLabelChange = this.handleFloorLabelChange.bind(this);
    this.handleFloorLabelSubmit = this.handleFloorLabelSubmit.bind(this);
    this.onSelectFixtured       = this.onSelectFixture.bind(this);
    this.onBackClick            = this.onBackClick.bind(this);
    this.handleFixtureDelete    = this.handleFixtureDelete.bind(this);
    this.selectFloor            = this.selectFloor.bind(this);
    this.enableMultipleEdit     = this.enableMultipleEdit.bind(this);
  }

  async componentDidMount() {
    try {
      let attachmentURL;
      const project = await this.getProject();
      const { content } = project;
      console.log(content);

      this.setState({
        project,
        content,
      });
    } catch (e) {
      alert(e);
    }
  }

  getProject() {
    return API.get("riser-sizer", `/riser-sizer/${this.props.match.params.id}`);
  }

  validateForm() {
    return this.state.content.name.length > 0;
  }

  handleChange = event => {
    let newContent = this.state.content
    newContent[event.target.id] = event.target.value;

    this.setState({
      content: newContent
    });
  }

  handleRiserLabelChange = (event, riserIndex) => {
    // let riserLabel = {...this.state};

    // riserLabel = event.target.value;

    // this.setState({
    //   riserLabel: riserLabel
    // });

    event.persist();

    this.setState({
      riserLabel: event.target.value
    });
  }

  saveNote(project) {
    return API.put("riser-sizer", `/riser-sizer/${this.props.match.params.id}`, {
      body: project
    });
  }

  handleSubmit = async (event, params) => {

    event.preventDefault();

    this.setState({ 
      isLoading: true,
    });

    try {
      await this.saveNote({
        content: this.state.content
      });
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  deleteProject() {
    return API.del("riser-sizer", `/riser-sizer/${this.props.match.params.id}`);
  }

  handleDelete = async event => {
    event.preventDefault();

    const confirmed = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirmed) {
      return;
    }

    this.setState({ isDeleting: true });

    try {
      await this.deleteProject();
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isDeleting: false });
    }
  } 

  addRiser(project) {
    return API.put("riser-sizer", `/riser-sizer/${this.props.match.params.id}`, {
      body: project
    });
  }

  handleCreateRiser = async event => {
    let initRiserObject = {
      floors: [],
      isEditingLabel: true,
      multipleFloorArray: [],
    };

    let contentObject = this.state.content;
    
    if(!contentObject.risers) {
      contentObject.risers = [];
    }
    contentObject.risers.push(initRiserObject);

    this.setState({
      content: contentObject
    });

    try {
      await this.addRiser({
        content: contentObject
      });
    } catch (e) {
      alert(e);
    }
  }

  handleEditRiser(e, riserLabel) {
    let contentObject = this.state.content;
    let currentRiserObject;
    contentObject.risers.forEach(function(riser) {
      if(riser.label == riserLabel.riserLabel) {
        currentRiserObject = riser;
      }
    });

    
    if(currentRiserObject.floors.length === 0) {
      let initFloorObject = {
        label: "",
        fixtures: [],
        loadValues: {
          cold: 0,
          hot: 0
        },
        sizes: {
          cold: 0,
          hot: 0
        },
        totalLoadValues: {
          cold: 0,
          hot: 0
        }
      }
      currentRiserObject.floors.push(initFloorObject);
    }

    this.setState({
      currentRiser: currentRiserObject,
      isEditing: true
    });  


  }

  handleRiserLabelSubmit = async (e, riserIndex) => {
    e.preventDefault();

    let contentObject = this.state.content;
    let riserLabel = this.state.riserLabel;

    // loop through array of objects
    // check if inputted riser label exists
    // if exists, prompt user to enter another one.  

    contentObject.risers.forEach(function(riser) {
      while(riserLabel === riser.label) {
        let newLabel = prompt("A riser with that label already exists. Please select another.");
        riserLabel = newLabel;
      }

    });

    contentObject.risers[riserIndex].label = riserLabel; 
    contentObject.risers[riserIndex].isEditingLabel = false; 

    this.setState({
      content: contentObject,
    })

    try {
      await this.saveNote({
        content: this.state.content
      });
    } catch (e) {
      alert(e);
    }

  }

  handleFloorLabelChange(e) {
    this.setState({
      floorFormInput: e.target.value
    })
  }

  handleFloorLabelSubmit = async (e) => {
    e.preventDefault();

    let currentRiserObject = this.state.currentRiser;
    let contentObject = this.state.content;
    currentRiserObject.floors[0].label = this.state.floorFormInput;
    currentRiserObject.currentFloor = currentRiserObject.floors[0];
    contentObject.risers.forEach(function(riser, index, array) {
      if(currentRiserObject.label === riser.label) {
        array[index] =  currentRiserObject;
      }
    });

    this.setState({
      content: contentObject,
    });
    

    try {
      await this.saveNote({
        content: this.state.content
      });
    } catch (e) {
      alert(e);
    }


  }

  onSelectFixture = async (e, fixture) => {
    let currentRiserObject = this.state.currentRiser;
    let contentObject = this.state.content;
    if(currentRiserObject.multipleFloorArray.length == 0) {
      if(currentRiserObject.currentFloor.hasOwnProperty("fixtures")) {
        currentRiserObject.currentFloor.fixtures.push(fixture);
        currentRiserObject.currentFloor.loadValues.cold += fixture.loadValues.cold;
        currentRiserObject.currentFloor.loadValues.hot += fixture.loadValues.hot;
      } else {
        currentRiserObject.currentFloor.fixtures = [];
        currentRiserObject.currentFloor.loadValues.cold += fixture.loadValues.cold;
        currentRiserObject.currentFloor.loadValues.hot += fixture.loadValues.hot;
        currentRiserObject.currentFloor.fixtures.push(fixture);
      }

      currentRiserObject.currentFloor.loadValues.cold = Math.round(currentRiserObject.currentFloor.loadValues.cold * 10) / 10;
      currentRiserObject.currentFloor.loadValues.hot = Math.round(currentRiserObject.currentFloor.loadValues.hot * 10) / 10;

      currentRiserObject.floors.forEach(function(floor, index, array) {
        if(floor.label == currentRiserObject.currentFloor.label) {
          array[index] = currentRiserObject.currentFloor;
        }
      });
    } else {
      console.log(currentRiserObject.multipleFloorArray);

      currentRiserObject.multipleFloorArray.forEach(function(mFloor) {
        if(mFloor.hasOwnProperty("fixtures")) {
          mFloor.fixtures.push(fixture);
          mFloor.loadValues.cold += fixture.loadValues.cold;
          mFloor.loadValues.hot += fixture.loadValues.hot;
        } else {
          mFloor.fixtures = [];
          mFloor.loadValues.cold += fixture.loadValues.cold;
          mFloor.loadValues.hot += fixture.loadValues.hot;
          mFloor.fixtures.push(fixture);
        }

        mFloor.loadValues.cold = Math.round(mFloor.loadValues.cold * 10) / 10;
        mFloor.loadValues.hot = Math.round(mFloor.loadValues.hot * 10) / 10;

        currentRiserObject.floors.forEach(function(floor, index, array) {
          if(floor.label == mFloor.label) {
            array[index] = mFloor;
          }
        });
      });

      this.setState({
        content: contentObject
      });

      this.calculateSizes();
    }

    console.log(currentRiserObject);
    



    contentObject.risers.forEach(function(riser, index, array) {
      if(riser.label == currentRiserObject.label) {
        array[index] = currentRiserObject;
      }
    });

    this.setState({
      content: contentObject
    });

    this.calculateSizes();

    console.log(currentRiserObject);

    try {
      await this.saveNote({
        content: this.state.content
      });
    } catch (e) {
      alert(e);
    }

  }

  onBackClick = async e => {
    let contentObject = this.state.content;
    this.setState({
      isEditing: false
    });

    try {
      await this.saveNote({
        content: contentObject
      });
    } catch (e) {
      alert(e);
    }
    
  }

  editFloor = async (e, label) => {

    let currentRiserObject = this.state.currentRiser;
    let contentObject = this.state.content;
    currentRiserObject.floors.forEach(function(floor, index, array) {
      if(floor.label == label) {
        currentRiserObject.currentFloor = array[index];
      }

    });

    contentObject.currentRiser = currentRiserObject;

    this.setState({
      content: contentObject
    });
  
  }

  addFloorAbove = async e => {
    let currentRiserObject = this.state.currentRiser;
    let highestFloor = currentRiserObject.floors[currentRiserObject.floors.length - 1].label;

    let newFloor = {
      label: "",
      fixtures: [],
      loadValues: {
        cold: 0,
        hot: 0
      },
      sizes: {
        cold: 0,
        hot: 0
      },
      totalLoadValues: {
        cold: 0,
        hot: 0
      }
    };

    newFloor.label = (Number(highestFloor) + 1) + "";

    currentRiserObject.floors.push(newFloor);
    currentRiserObject.currentFloor = currentRiserObject.floors[currentRiserObject.floors.length - 1];

    let contentObject = this.state.content;
    contentObject.risers.forEach(function(riser, index, array) {
      if(riser.label == currentRiserObject.label) {
        array[index] = currentRiserObject;
      }
    });

    

    this.setState({
      content: contentObject
    });
  }

  addFloorBelow = async e => {
    let currentRiserObject = this.state.currentRiser;
    let lowestFloor = currentRiserObject.floors[0].label;

    let newFloor = {
      label: "",
      fixtures: [],
      loadValues: {
        cold: 0,
        hot: 0
      },
      sizes: {
        cold: 0,
        hot: 0
      },
      totalLoadValues: {
        cold: 0,
        hot: 0
      }

    };

    newFloor.label = (Number(lowestFloor) - 1) + "";

    currentRiserObject.floors.unshift(newFloor);
    currentRiserObject.currentFloor = currentRiserObject.floors[0];

    let contentObject = this.state.content;
    contentObject.risers.forEach(function(riser, index, array) {
      if(riser.label == currentRiserObject.label) {
        array[index] = currentRiserObject;

      }
    });


    this.setState({
      content: contentObject
    });
  }

  selectHotSource = async (e, floorIndex) => {
    let currentRiserObject = this.state.currentRiser;
    let contentObject = this.state.content;

    currentRiserObject.hotSourceFloor = floorIndex;

    contentObject.currentRiser = currentRiserObject;

    contentObject.risers.forEach(function(riser, index, array) {
      if(riser.label == currentRiserObject.label) {
        array[index] = currentRiserObject;
      }
    });

    this.setState({
      currentRiser: currentRiserObject,
      content: contentObject
    })
  
    try {
      await this.saveNote({
        content: this.state.content
      });
    } catch (e) {
      alert(e);
    }

  }

  selectColdSource = async (e, floorIndex) => {
    let currentRiserObject = this.state.currentRiser;
    let contentObject = this.state.content;

    currentRiserObject.coldSourceFloor = floorIndex;

    contentObject.currentRiser = currentRiserObject;

    contentObject.risers.forEach(function(riser, index, array) {
      if(riser.label == currentRiserObject.label) {
        array[index] = currentRiserObject;
      }
    });

    this.setState({
      currentRiser: currentRiserObject,
      content: contentObject
    })
  
    try {
      await this.saveNote({
        content: this.state.content
      });
    } catch (e) {
      alert(e);
    }

  }

  calculateSizes() {

    let contentObject = this.state.content;

    contentObject.risers.forEach(function(riser) {
      let coldLoad = 0;
      let hotLoad = 0;
      let coldFloorIndex;
      let hotFloorIndex;
      let floorsAboveColdSource = [];
      let floorsBelowColdSource = [];
      let floorsAboveHotSource = [];
      let floorsBelowHotSource = [];
      riser.floors.forEach(function(floor, index) {
        if(floor.label == riser.coldSourceFloor) {
          coldFloorIndex = index;
        }
        if(floor.label == riser.hotSourceFloor) {
          hotFloorIndex = index;
        }
      });

      riser.floors.forEach(function(floor, index, array) {

        floorsAboveColdSource = riser.floors.slice(coldFloorIndex + 1);
        floorsBelowColdSource = riser.floors.slice(0, coldFloorIndex + 1);
        floorsAboveColdSource.reverse();

        floorsAboveHotSource = riser.floors.slice(hotFloorIndex + 1);
        floorsBelowHotSource = riser.floors.slice(0, hotFloorIndex + 1);
        floorsAboveHotSource.reverse();
        

        if(floorsBelowColdSource) {
          floorsBelowColdSource.forEach(function(floorC) {
            coldLoad +=  floorC.loadValues.cold;
            floorC.totalLoadValues.cold = coldLoad;
            if(floorC.label == floor.label) {
              array[index] = floorC;
            }
          });
        }

        coldLoad = 0;

        if(floorsAboveColdSource) {
          floorsAboveColdSource.forEach(function(floorC) {
            coldLoad +=  floorC.loadValues.cold;
            floorC.totalLoadValues.cold = coldLoad;
            if(floorC.label == floor.label) {
              array[index] = floorC;
            }
          });
        }

        coldLoad = 0;

        if(floorsBelowHotSource) {
          floorsBelowHotSource.forEach(function(floorH) {
            hotLoad += floorH.loadValues.hot;
            floorH.totalLoadValues.hot = hotLoad;
            if(floorH.label == floor.label) {
              array[index] = floorH;
            }
          });
        }

        hotLoad = 0;

        if(floorsAboveHotSource) {
          floorsAboveHotSource.forEach(function(floorH) {
            hotLoad += floorH.loadValues.hot;
            floorH.totalLoadValues.hot = hotLoad;
            if(floorH.label == floor.label) {
              array[index] = floorH;
            }
          });
        }

        hotLoad = 0;

        // if(Number(floor.label) <= Number(riser.coldSourceFloor)) {
        //   coldLoad += floor.loadValues.cold;
        //   floor.totalLoadValues.cold = coldLoad;
        // } 
        // if(Number(floor.label) == (Number(riser.coldSourceFloor) + 1)) {
        //   coldLoad = 0;
        // }
        // if(Number(floor.label) > Number(riser.coldSourceFloor)) {
        //   coldLoad += floor.loadValues.cold;
        //   floor.totalLoadValues.cold = coldLoad;
        // }
        // if(Number(floor.label) <= Number(riser.hotSourceFloor)) {
        //   hotLoad += floor.loadValues.hot;
        //   floor.totalLoadValues.hot = hotLoad;
        // } 
        // if(Number(floor.label) == (Number(riser.hotSourceFloor) + 1)) {
        //   hotLoad = 0;
        // }
        // if(Number(floor.label) > Number(riser.hotSourceFloor)) {
        //   hotLoad += floor.loadValues.hot;
        //   floor.totalLoadValues.hot = hotLoad;
        // }
        gpmsList.forEach(function(gpm, index, array) {
          if(Math.ceil(floor.totalLoadValues.cold) <= gpm && Math.ceil(floor.totalLoadValues.cold) > array[index - 1]) {
              floor.sizes.cold = sizesList[index];
          } 
            
          if(Math.ceil(floor.totalLoadValues.hot) <= gpm && Math.ceil(floor.totalLoadValues.hot) > array[index - 1]) {
              floor.sizes.hot = sizesList[index];
          } 
            
        });
      });

    });


    this.setState({
      content: contentObject
    })
  }

  handleFixtureDelete = async e => {
    console.log(this.state.content.currentRiser.currentFloor);
    e.persist();
    console.log(e);
    let i = 0;
    let element = e.target;
    let fixtureIndex = Array.prototype.indexOf.call(element.parentNode.parentNode.children, element.parentNode);
    console.log(fixtureIndex);
    let contentObject = this.state.content;
    let currentRiserObject = this.state.currentRiser;

    currentRiserObject.currentFloor.loadValues.cold -= currentRiserObject.currentFloor.fixtures[fixtureIndex].loadValues.cold;
    currentRiserObject.currentFloor.loadValues.hot -= currentRiserObject.currentFloor.fixtures[fixtureIndex].loadValues.hot;

    currentRiserObject.currentFloor.loadValues.cold = Math.round(currentRiserObject.currentFloor.loadValues.cold * 10) / 10;
    currentRiserObject.currentFloor.loadValues.hot = Math.round(currentRiserObject.currentFloor.loadValues.hot * 10) / 10;

    currentRiserObject.currentFloor.fixtures.splice(fixtureIndex, 1);
    console.log(currentRiserObject.currentFloor.fixtures);

    currentRiserObject.floors.forEach(function(floor, index, array) {
      if(floor.label == currentRiserObject.currentFloor.label) {
        array[index] = currentRiserObject.currentFloor;
      }
    });

    contentObject.risers.forEach(function(riser, index, array) {
      if(riser.label == currentRiserObject.label) {
        array[index] = currentRiserObject;
      }
    });

    console.log(contentObject);

    this.calculateSizes();

    this.setState({
      content: contentObject,
      currentRiser: currentRiserObject
    })

    try {
      await this.saveNote({
        content: this.state.content
      });
    } catch (e) {
      alert(e);
    }
  }

  handleRiserDelete = async (e, label) => {
    console.log(label);

    let contentObject = this.state.content;
    contentObject.risers.forEach(function(riser, index, array) {
      if(riser.label == label) {
        array.splice(index, 1);
      }
    });

    console.log(contentObject.risers);

    this.setState({
      content: contentObject
    });

    try {
      await this.saveNote({
        content: this.state.content
      });
    } catch (e) {
      alert(e);
    }
  }

  enableMultipleEdit() {
    console.log("enableMultipleEdit");
    let enableMultipleEdit = !this.state.enableMultipleEdit;
    console.log(enableMultipleEdit);

    let currentRiserObject = this.state.currentRiser;
    if(currentRiserObject.multipleFloorArray.length > 0) {
      currentRiserObject.multipleFloorArray = [];
    }

    currentRiserObject.currentFloor = {};
    

    this.setState({
      enableMultipleEdit: enableMultipleEdit,
      currentRiser: currentRiserObject
    });
  }

  selectFloor(e, floorLabel) {
    let content = this.state.content;
    let currentRiser = this.state.currentRiser;
    let removed = false;

    console.log(currentRiser);

    if(currentRiser.multipleFloorArray.length == 0) {
      currentRiser.floors.forEach(function(floor) {
        if(floor.label === floorLabel) {
          currentRiser.multipleFloorArray.push(floor);
          console.log("ok");
        }
      });
    } else {
      currentRiser.multipleFloorArray.forEach(function(mFloor,
      index, array) {
        if(mFloor.label == floorLabel) {
          console.log("match!!!");
          array.splice(index, 1);
          removed = true;
        } 
      });

      if(removed == false) {
        console.log("else statement");
        currentRiser.floors.forEach(function(floor) {
          if(floor.label === floorLabel) {
            currentRiser.multipleFloorArray.push(floor);
            console.log("ok");
          }
        });
      }
    }

    console.log(currentRiser);

    this.setState({
      currentRiser: currentRiser
    })
  }

  render() {
    return (
      <div className="Projects">
        {!this.state.isEditing &&
          <div className="Projects__Menu">
            <div className="Menu__wrapper">
              <div className="Menu__account">
                <div className="Menu__avi"></div>
                <p className="Menu__name"></p>
              </div>
              <a className="Menu__button" href="/">
                Dashboard
              </a>
              <a className="Menu__button">
                Help
              </a>
              <a className="Menu__button">
                Settings
              </a>
              <a className="Menu__button" onClick={this.props.handleLogout}>
                Logout
              </a>
            </div>

          </div>
        }
        {this.state.project &&
          <div className="Projects__wrapper">
            <OverviewToolbar 
              projectName={this.state.content.name}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              validateForm={this.validateForm}
              isLoading={this.state.isLoading}
              isDeleting={this.state.isDeleting}
              handleDelete={this.handleDelete}
              handleCreateRiser={this.handleCreateRiser}
            />
            {!this.state.isEditing 
              ? <Overview 
                  risers={this.state.content.risers}
                  handleEditRiser={this.handleEditRiser}
                  handleRiserLabelSubmit={this.handleRiserLabelSubmit}
                  handleRiserLabelChange={this.handleRiserLabelChange}
                  showLabelForm={this.state.showLabelForm}
                  handleRiserDelete={this.handleRiserDelete}
                />
              : <Editor
                  selectHotSource={this.selectHotSource}
                  selectColdSource={this.selectColdSource}
                  addFloorAbove={this.addFloorAbove}
                  addFloorBelow={this.addFloorBelow}
                  editFloor={this.editFloor}
                  currentRiser={this.state.currentRiser}
                  handleFloorLabelChange={this.handleFloorLabelChange}
                  handleFloorLabelSubmit={this.handleFloorLabelSubmit}
                  onSelectFixture={this.onSelectFixture}
                  onBackClick={this.onBackClick}
                  handleFixtureDelete={this.handleFixtureDelete}
                  selectFloor={this.selectFloor}
                  multipleEditEnabled={this.state.enableMultipleEdit}
                  enableMultipleEdit={this.enableMultipleEdit}
                />
            }
          </div>
        }
      </div>
    );
  }

}
