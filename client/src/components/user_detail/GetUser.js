import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import {
  getToken,
  getUserDetail,
  setTokenError
} from "../../actions/userActions";

import { setShowNowPlaying } from "../../actions/spotifyActions";

const GetUser = ({
  user: {
    spotifyApi,
    loggedIn,
    token,
    loading,
    userDetail,
    showDetail,
    tokenError
  },
  getToken,
  getUserDetail,
  setTokenError,
  setShowNowPlaying
}) => {
  useEffect(() => {
    if (!tokenError) {
      getToken();
    }

    if (loggedIn) {
      spotifyApi
        .getMe()
        .then(res => {
          getUserDetail(res);
          setShowNowPlaying();
        })
        .catch(err => {
          console.log(err.response);
          console.log(err);
          setTokenError();
        });
    }

    // eslint-disable-next-line
  }, [loggedIn]);

  return (
    <div>
      {!loggedIn && !loading ? (
        <div className="col s12 m12">
          <h1>Welcome to Spotify Search</h1>
          {tokenError ? (
            <p>TOKEN ERROR: Please log inn again with your spotify account</p>
          ) : (
            <p>Please log inn with your spotify account</p>
          )}
        </div>
      ) : (
        <div className="col s12 m12">
          {showDetail && (
            <Fragment>
              <h1>Welcome {userDetail.display_name}</h1>
              <a href={userDetail.external_urls.spotify}>
                Open profile on Spotify
              </a>
            </Fragment>
          )}
        </div>
      )}
    </div>
  );
};

GetUser.propTypes = {
  spotifyState: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getToken: PropTypes.func.isRequired,
  getUserDetail: PropTypes.func.isRequired,
  setTokenError: PropTypes.func.isRequired,
  setShowNowPlaying: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  spotifyState: state.spotifyState,
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUserDetail, getToken, setTokenError, setShowNowPlaying }
)(GetUser);
