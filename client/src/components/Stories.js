import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStories } from "../actions";
import { TextTruncate } from "../SharedFunctions";
import Arcs from "./Arcs";

class Stories extends Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  state = {
    story: [],
    showStory: false
  };

  showStory = story => {
    this.setState({ story: story, showStory: true });
  };

  toggleModal = () => {
    this.setState({
      showStory: !this.state.showStory
    });
  };

  render() {
    if (!this.state.loading) {
      return (
        <section className="section">
          <div className="container">
            <div className="columns">
              {this.props.stories.map(story => (
                <Link
                  to={`/story/${story.id}`}
                  story={story}
                  className="column story-selection"
                  key={story.id}
                >
                  <div className="message is-medium main-story">
                    <header className="message-header">
                      <p className="message-header-title">{story.title}</p>
                      <p className="has-text-danger">
                        Arcs:{" "}
                        <span className="has-text-light">
                          {story.arcs.length}
                        </span>
                      </p>
                    </header>
                    <div className="message-body">
                      <p>{TextTruncate(story.body, 200)}</p>
                      <span className="is-italic is-pulled-right">
                        -- {story.user}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {this.state.showStory ? (
            <Arcs
              story={this.state.story}
              onClose={this.toggleModal}
              show={this.state.showStory}
            />
          ) : null}
        </section>
      );
    } else {
      return (
        <section className="section">
          <div className="container">
            <div className="message is-medium main-story">
              <header className="message-header">
                <p className="message-header-title">Loading Stories...</p>
              </header>
              <div className="message-body">
                <p>Once upon a time all the stories were loading...</p>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}

const mapStateToProps = ({ stories }) => {
  return { stories };
};

export default connect(
  mapStateToProps,
  { fetchStories }
)(Stories);
