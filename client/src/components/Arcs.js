import React, { Component } from "react";

class Arcs extends Component {
  // arcs = this.props.story.arcs;
  // story = this.props.story;

  componentDidMount() {}

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
      return newStory;
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
                    <a onClick={this.showStory}>{this.story.user}</a>
                  </li>
                  {this.arcs.map(arc => (
                    <li key={arc.id}>
                      <a onClick={() => this.toggleArc(arc)}>{arc.user}</a>
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
                          <React.Fragment>
                            <span>{arc.body}</span>
                          </React.Fragment>
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
