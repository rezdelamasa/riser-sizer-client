import React, { Component, Fragment } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { API } from "aws-amplify";
import { FaFolderOpen, FaPlus, FaEdit } from "react-icons/fa";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      user: {
        projects: [],
        subscription: false
      }
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const user = await this.user();
      console.log(user.content);
      user.content.user.username = user.content.user.email.substring(0, user.content.user.email.indexOf('@'));
      this.setState({ user: user.content.user });
      console.log(this.state.user);
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  user() {
    return API.get("riser-sizer", "/riser-sizer-user-properties");
  }


  renderUserProjects(projects) {
    console.log(projects);
    return [{}].concat(projects).map(
      (project, i) =>
        i !== 0 &&
           <LinkContainer
              key={project.id}
              to={`/projects/${project.id}`}
            >
              <ListGroupItem header={project.name}>
                {project.address &&
                  <p className="project__address">{project.address}</p>
                }
                <p>{"Risers: " + project.risers.length}</p>
                <p className="project__date">{"Created: " + new Date(project.createdAt).toDateString()}</p>
              </ListGroupItem>
            </LinkContainer>
    );
  }


  renderLander() {
    return (
      <div className="lander">
        {!this.props.isAuthenticated &&
          <div className="lander__container">
            <div className="lander__header">
              <div className="navbar">
                <div className="navbar__wrapper">
                  <a href="" className="navbar__brand">Riser Sizer</a>
                  <ul className="navbar__list">
                    <Fragment>
                      <LinkContainer to="/login" className="navbar__link navbar__link--login">
                        <NavItem>Login</NavItem>
                      </LinkContainer>
                      <LinkContainer to="/signup" className="navbar__link navbar__link--signup">
                        <NavItem>Signup</NavItem>
                      </LinkContainer>
                    </Fragment>
                  </ul>
                </div>
              </div>
              <div className="lander__text">
                <h1 className="lander__heading">All in one tool for sizing riser diagrams.</h1>
                <p>The first tool built for plumbing engineers to size risers.</p>
              </div>
            </div>
            <div className="features">
              <h1 className="features__heading">How RiserSizer helps you</h1>
              <div className="features__row">
                <div className="lander_column feature">
                  <img className="feature__icon" src="https://res.cloudinary.com/rezdelamasa/image/upload/v1568667490/folder-icon.svg"/>
                  <div className="feature__text">
                    <h1 className="feature__heading">Manage Projects</h1>
                    <p className="feature__description">Create, name, view, and manage all of your projects within your dashboard.</p>
                  </div>
                </div>
                <div className="lander_column feature">
                  <img className="feature__icon" src="https://res.cloudinary.com/rezdelamasa/image/upload/v1568684518/create-riser.svg"/>
                  <div className="feature__text">
                    <h1 className="feature__heading">Create Risers</h1>
                    <p className="feature__description">Add risers to your project, give it a label, and edit it in the Editor.</p> 
                  </div>
                </div>
                <div className="lander_column feature">
                  <img className="feature__icon" src="https://res.cloudinary.com/rezdelamasa/image/upload/v1568688068/create-floor.svg"/>
                  <div className="feature__text">
                    <h1 className="feature__heading">Create Floors</h1>
                    <p className="feature__description">Create floors, edit them, and select hot and cold water source floors.</p>
                  </div>
                </div>
                <div className="lander_column feature">
                  <img className="feature__icon" src="https://res.cloudinary.com/rezdelamasa/image/upload/v1568758367/add-fixture.svg"/>
                  <div className="feature__text">
                    <h1 className="feature__heading">Add Fixtures</h1>
                    <p className="feature__description">Add fixtures to your floors and fixture units(FU) will be calculated automatically.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }

  renderDashboard() {
    return (
      <div className="dashboard">
        <div className="Projects__Menu">
          <div className="Menu__wrapper">
            <div className="Menu__account">
              <p className="Menu__name">{this.state.user.username}</p>
            </div>
            <a className="Menu__button Menu__button--active">
              Dashboard
            </a>
            <a className="Menu__button" href="https://github.com/rezdelamasa/riser-sizer-client/blob/master/README.md" target="_blank">
              Help
            </a>
            <a className="Menu__button" href="/settings">
              Settings
            </a>
            <a className="Menu__button" onClick={this.props.handleLogout}>
              Logout
            </a>
          </div>
        </div>
        <div className="dashboard__content">
          <div className="dashboard__section">
            <div className="subsection__header">
              <h2 className='dashboard__subheading'>Projects</h2>
              <a href="/projects/new" className="subsection__link">
                <b>{"\uFF0B"}</b> New Project
              </a>
            </div>
            <ListGroup className="projects__list">
              {!this.state.isLoading && this.renderUserProjects(this.state.user.projects)}
            </ListGroup>
          </div>
        </div>
      </div>
    );
  }

  render() {

    const {
      handleLogout
    } = this.props;

    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderDashboard() : this.renderLander()}
      </div>
    );
  }
}

