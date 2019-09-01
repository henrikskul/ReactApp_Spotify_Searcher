import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setNowPlaying } from "../../actions/spotifyActions";
import { setTokenError } from "../../actions/userActions";

const boilerplate = ({
  spotifyState: { nowPlaying, showNowPlaying },
  user: { spotifyApi, loggedIn, tokenError },
  setNowPlaying,
  setTokenError
}) => {
  return (
    <div>
      <p>hei</p>
    </div>
  );
};

boilerplate.propTypes = {
  spotifyState: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  setNowPlaying: PropTypes.func.isRequired,
  setTokenError: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  spotifyState: state.spotifyState,
  user: state.user
});

export default connect(
  mapStateToProps,
  { setNowPlaying, setTokenError }
)(boilerplate);
