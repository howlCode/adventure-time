import React from "react";

const StoryForm = props => {
  if (props.show === false) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <section className="section">
          <div className="container">
            <div className="field">
              <label className="label has-text-light">Title Your Story</label>
              <div className="control">
                <input className="input is-info" type="text" />
              </div>
            </div>

            <div className="field">
              <label className="label has-text-light">Your Story...</label>
              <div className="control">
                <textarea className="input textarea is-primary" rows="15" />
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={props.onClose}
      />
    </div>
  );
};
export default StoryForm;
