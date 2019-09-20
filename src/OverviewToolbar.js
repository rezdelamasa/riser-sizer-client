import React, { Component } from 'react';
import ToolbarButtons from "./ToolbarButtons";
import Button from "./Button";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "./components/LoaderButton";
import { FaTrashAlt } from "react-icons/fa";

import "./OverviewToolbar.css";

class OverviewToolbar extends Component {


  render() {
    const {
      onClick,
      content,
      handleSubmit,
      handleChange,
      validateForm,
      isLoading,
      isDeleting,
      handleDelete,
      handleCreateRiser,
      projectName
    } = this.props;

    return (
      <div className="overview__toolbar">
        <div className="overview__toolbar-wrapper">
          <div className="overview__header">
            <p className="overview__subheading">Project Name</p>
            <h1 className="overview__heading">{projectName}</h1>
          </div>
          <div className="overview__buttons">
            <p className="overview__subheading">Actions</p>
            <div className="overview__buttons-wrapper">
              <Button 
                onClick={handleCreateRiser}
                className="overview__toolbar__button overview__toolbar__button--create"
              >
                Create Riser +
              </Button>
              <LoaderButton
                className="overview__button overview__button--delete"
                isLoading={isDeleting}
                onClick={handleDelete}
                text={<FaTrashAlt></FaTrashAlt>}
                loadingText="Deleting…"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OverviewToolbar;

// <form onSubmit={handleSubmit}>
//             <FormGroup controlId="name">
//               <FormControl
//                 onChange={handleChange}
//                 value={projectName}
//                 type="input"
//               />
//             </FormGroup>
//             <LoaderButton
//               block
//               bsStyle="primary"
//               bsSize="large"
//               disabled={!validateForm}
//               type="submit"
//               isLoading={isLoading}
//               text="Save"
//               loadingText="Saving…"
//             />
            
//           </form>