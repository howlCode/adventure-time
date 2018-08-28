import React from "react";

const StoryForm = props => {
  return (
    <section className="section">
      <div className="container">
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input is-dark" type="text" />
          </div>
        </div>

        <div className="field">
          <label className="label">Your Story...</label>
          <div className="control">
            <textarea className="input textarea is-dark" rows="15" />
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-outlined is-danger">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StoryForm;
