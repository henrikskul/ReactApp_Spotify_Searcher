import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logInUser } from "../../actions/userActions";

const LogIn = ({ logInUser, user: { authUri, showUri, loggedIn } }) => {
  const onClick = () => {
    logInUser();
  };

  return (
    <div className="col s12 m12">
      {!loggedIn ? (
        !showUri ? (
          <a href={"#!"} onClick={onClick}>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Log in with Spotify<i className="material-icons right">send</i>
            </button>
          </a>
        ) : (
          <a href={authUri} className="btn btn-primary">
            Please press again (this will be fixed)
          </a>
        )
      ) : (
        <div />
      )}
    </div>
  );
};

LogIn.propTypes = {
  logInUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  spotifyState: state.spotifyState,
  user: state.user
});

export default connect(
  mapStateToProps,
  { logInUser }
)(LogIn);
