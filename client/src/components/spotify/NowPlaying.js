import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setNowPlaying } from "../../actions/spotifyActions";

const NowPlaying = ({
  spotifyState: { nowPlaying },
  user: { spotifyApi, loggedIn },
  setNowPlaying
}) => {
  useEffect(() => {
    if (loggedIn) {
      spotifyApi
        .getMyCurrentPlaybackState()
        .then(res => setNowPlaying(res))
        .catch(err => {
          console.log(err.response);
          console.log(err);
          setNowPlaying({ msg: "You are not playing any songs right now" });
        });
    }

    // eslint-disable-next-line
  }, [loggedIn]);

  return (
    <Fragment>
      {loggedIn && (
        <div className="col s12 m4">
          <h4 className="header">Currently playing</h4>
          <div className="card">
            <div className="card-image">
              <img src={nowPlaying.img} alt="" />
              <a
                className="btn-floating halfway-fab waves-effect waves-light red"
                href="!#"
              >
                <i className="material-icons">add</i>
              </a>
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
  setNowPlaying: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  spotifyState: state.spotifyState,
  user: state.user
});

export default connect(
  mapStateToProps,
  { setNowPlaying }
)(NowPlaying);
