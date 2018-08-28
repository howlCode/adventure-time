import React, { Component } from "react";
import { TextTruncate } from "../SharedFunctions";

class Arcs extends Component {
  arcs = this.props.story.arcs;
  story = this.props.story;

  state = {
    currentArcShown: [this.story]
  };

  showStory = () => {
    this.setState({ currentArcShown: [this.story] });
  };

  toggleArc = arc => {
    let newStory = [this.story];
    this.arcs.map(a => {
      if (this.arcs.indexOf(arc) >= this.arcs.indexOf(a)) {
        newStory.push(a);
      }
    });
    this.setState({ currentArcShown: newStory });
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-content">
          <h2 className="title has-text-centered">Story Arcs</h2>
          <section className="section">
            <div className="container">
              <nav className="breadcrumb is-centered">
                <ul className="arc-titles-text">
                  <li>
                    <a onClick={this.showStory}>
                      {TextTruncate(this.story.body, 30)}
                    </a>
                  </li>
                  {this.arcs.map(arc => (
                    <li key={arc.id}>
                      <a onClick={() => this.toggleArc(arc)}>
                        {TextTruncate(arc.body, 30)}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="columns">
                <div className="column">
                  <div className="message">
                    <header className="message-header">
                      <p className="message-header-title">{this.story.title}</p>
                    </header>
                    <div className="message-body">
                      <div className="story-text">
                        {this.state.currentArcShown.map(arc => (
                          <p>
                            <span>{arc.body}</span>
                            <span className="story-user button is-info">
                              {arc.user}
                            </span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={this.props.onClose}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default Arcs;
