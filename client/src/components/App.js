import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Auth from "./Auth";
import Stories from "./Stories";
import Arcs from "./Arcs";
import StoryForm from "./StoryForm";
import Footer from "./Footer";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Stories} />
          <Route exact path="/portal" component={Auth} />
          <Route path="/story/:id" render={props => <Arcs {...props} />} />
          <Route exact path="/new-story" component={StoryForm} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
