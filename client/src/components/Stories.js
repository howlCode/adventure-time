import React, { Component } from "react";
import { TextTruncate } from "../SharedFunctions";
import Arcs from "./Arcs";

class Stories extends Component {
  test_story = {
    title: "There Was An Old Lady Who Swallowed a Fly",
    body:
      "Once upon a time there was an old lady who decided to swallow a fly.",
    user: "test@example.com",
    arcs: [
      {
        id: 1,
        user: "sample_user@example.com",
        body: "Why oh why did she swallow the fly."
      },
      {
        id: 2,
        user: "example_user@example.com",
        body: "Perhaps she'll die"
      }
    ]
  };

  test_story2 = {
    title: "once upon a time in a mexican villa",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user: "test2@example.com",
    arcs: [
      {
        id: 1,
        user: "test@testing.com",
        body: "there was a lovely person."
      },
      {
        id: 2,
        user: "frankey@example.com",
        body: "who loved cake."
      },
      {
        id: 3,
        user: "tom@exmaple.com",
        body: "and coronoa light."
      }
    ]
  };

  state = {
    stories: [this.test_story, this.test_story2],
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
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            {this.state.stories.map(story => (
              <div
                onClick={() => this.showStory(story)}
                className="column story-selection"
                key={story.id}
              >
                <div className="message is-medium main-story">
                  <header className="message-header">
                    <p className="message-header-title">{story.title}</p>
                    <p className="has-text-info">
                      Arcs:{" "}
                      <span className="has-text-warning">
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
              </div>
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
  }
}

export default Stories;
