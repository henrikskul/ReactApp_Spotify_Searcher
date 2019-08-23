import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setNowPlaying } from "../../actions/spotifyActions";
import { setTokenError } from "../../actions/userActions";

const NowPlaying = ({
  spotifyState: { nowPlaying, showNowPlaying },
  user: { spotifyApi, loggedIn, tokenError },
  setNowPlaying,
  setTokenError
}) => {
  useEffect(() => {
    if (showNowPlaying && loggedIn) {
      spotifyApi
        .getMyCurrentPlaybackState()
        .then(res => {
          setNowPlaying(res);
        })
        .catch(err => {
          console.log(err.response);
          console.log(err);
          setNowPlaying({ msg: "You are not playing any songs right now" });
        });
    }

    // eslint-disable-next-line
  }, [loggedIn, showNowPlaying]);

  return (
    <Fragment>
      {loggedIn && (
        <div className="col s12 m4">
          <h4 className="header">Currently playing</h4>
          <div className="card">
            <div className="card-image">
              <img src={nowPlaying.img} alt="" />
            </div>
            <div className="card-content">
              <span className="card-title">{nowPlaying.name}</span>
              <p>{nowPlaying.artist} </p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

NowPlaying.propTypes = {
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
)(NowPlaying);
