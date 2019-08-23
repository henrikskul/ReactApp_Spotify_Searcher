import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logInUser } from "../../actions/userActions";

const LogIn = ({ logInUser, user: { authUri } }) => {
  const onClick = () => {
    logInUser();
  };

  return (
    <div className="col s12 m12">
      <a href={"#!"} onClick={onClick} className="btn btn-primary">
        Log in with Spotify
      </a>
      <a href={authUri}>{authUri}</a>
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
