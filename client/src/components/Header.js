import React, { Component } from "react";
import { connect } from "react-redux";

import StoryForm from "./StoryForm";
import Auth from "./Auth";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a onClick={this.showAuth} className="button is-primary">
            Login
          </a>
        );
      default:
        return (
          <React.Fragment>
            <a
              onClick={this.showStoryForm}
              className="button is-dark is-outlined"
            >
              Create a New Story
            </a>
            <a className="button is-outlined is-danger" href="/api/logout">
              Logout
            </a>
          </React.Fragment>
        );
    }
  }

  state = {
    showStoryForm: false,
    showAuth: false
  };

  showStoryForm = () => {
    this.setState({ showStoryForm: true });
  };

  showAuth = () => {
    this.setState({ showAuth: true });
  };

  toggleStoryFormModal = () => {
    this.setState({
      showStoryForm: !this.state.showStoryForm
    });
  };

  toggleAuthModal = () => {
    this.setState({
      showAuth: !this.state.showAuth
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <h1 id="logo">Adventure Time</h1>
              </a>

              <a
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <div class="navbar-item">
                  <div class="field is-grouped">{this.renderContent()}</div>
                </div>
              </div>
            </div>
          </nav>
        </section>
        {this.state.showStoryForm ? (
          <StoryForm
            onClose={this.toggleStoryFormModal}
            show={this.state.showStoryForm}
          />
        ) : null}
        {this.state.showAuth ? (
          <Auth onClose={this.toggleAuthModal} show={this.state.showAuth} />
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Header);
