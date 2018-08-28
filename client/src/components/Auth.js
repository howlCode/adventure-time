import React from "react";

const Auth = props => {
  if (props.show === false) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <div className="has-text-centered">
          <h3 className="has-text-light title">Sign Up and Start Creating!</h3>
          <a href="/auth/google">
            <img
              src={require("../images/btn_google_signin_dark_focus_web.png")}
            />
          </a>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={props.onClose}
      />
    </div>
  );
};
export default Auth;
