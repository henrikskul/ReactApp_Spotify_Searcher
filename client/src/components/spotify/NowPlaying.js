import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setNowPlaying } from "../../actions/spotifyActions";
import { setSong } from "../../actions/spotifyActions";
import { setTokenError } from "../../actions/userActions";

const NowPlaying = ({
  spotifyState: { nowPlaying, showContent, showSong },
  user: { spotifyApi, loggedIn, tokenError },
  setNowPlaying,
  setTokenError,
  setSong
}) => {
  useEffect(() => {
    if (showContent && loggedIn) {
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
  }, [loggedIn, showContent, showSong]);

  const pause = () => {
    spotifyApi
      .pause()
      .then(res => {
        setSong();
      })
      .catch(err => {
        console.log(err.response);
        console.log(err);
      });
  };

  const play = () => {
    spotifyApi
      .play()
      .then(res => {
        setSong();
      })
      .catch(err => {
        console.log(err.response);
        console.log(err);
      });
  };

  const previous = () => {
    spotifyApi
      .skipToPrevious()
      .then(res => {
        setSong();
      })
      .catch(err => {
        console.log(err.response);
        console.log(err);
      });
  };

  const next = () => {
    spotifyApi
      .skipToNext()
      .then(res => {
        setSong();
      })
      .catch(err => {
        console.log(err.response);
        console.log(err);
      });
  };

  return (
    <Fragment>
      {loggedIn && (
        <div className="col s12 m6">
          <h4 className="header">Currently playing</h4>
          <div className="card">
            <div className="card-image">
              <img src={nowPlaying.img} alt="" />
            </div>
            <div className="card-content">
              <span className="card-title">{nowPlaying.name}</span>
              <p>{nowPlaying.artist} </p>
            </div>

            <div className="card-tabs">
              <ul className="tabs tabs-fixed-width">
                <li className="tab">
                  <button
                    className="waves-effect waves-teal btn-flat"
                    onClick={previous}
                  >
                    <i className="material-icons">arrow_back</i>
                  </button>
                </li>

                <li className="tab">
                  <button
                    className="waves-effect waves-teal btn-flat"
                    onClick={play}
                  >
                    <i className="material-icons">play_circle_outline</i>
                  </button>
                </li>

                <li className="tab">
                  <button
                    className="waves-effect waves-teal btn-flat"
                    onClick={pause}
                  >
                    <i className="material-icons">pause_circle_outline</i>
                  </button>
                </li>

                <li className="tab">
                  <button
                    className="waves-effect waves-teal btn-flat"
                    onClick={next}
                  >
                    <i className="material-icons">arrow_forward</i>
                  </button>
                </li>
              </ul>
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
  setTokenError: PropTypes.func.isRequired,
  setSong: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  spotifyState: state.spotifyState,
  user: state.user
});

export default connect(
  mapStateToProps,
  { setNowPlaying, setTokenError, setSong }
)(NowPlaying);
