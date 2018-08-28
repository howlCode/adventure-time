import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Link to={"/portal"} className="button is-light">
            Login
          </Link>
        );
      default:
        return (
          <React.Fragment>
            <Link
              to={this.props.auth ? "/new-story" : "/auth"}
              className="button is-light is-outlined"
            >
              Create a New Story
            </Link>
            <a className="button is-outlined is-danger" href="/api/logout">
              Logout
            </a>
          </React.Fragment>
        );
    }
  }

  render() {
    return (
      <nav className="navbar is-dark" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to={"/"}>
            <h1 id="logo">Adventure Time</h1>
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span className="is-light" aria-hidden="true" />
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
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Header);
