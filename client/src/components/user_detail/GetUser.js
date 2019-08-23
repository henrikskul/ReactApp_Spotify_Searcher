import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { getToken, getUserDetail } from "../../actions/userActions";

const GetUser = ({
  user: { spotifyApi, loggedIn, token, loading },
  getToken
}) => {
  useEffect(() => {
    getToken();

    if (loggedIn) {
      spotifyApi
        .getMe()
        .then(res => {
          console.log(res);
          getUserDetail(res);
        })
        .catch(err => {
          console.log(err.response);
          console.log(err);
        });
    }

    // eslint-disable-next-line
  }, [loggedIn]);

  return (
    <div>
      {!loggedIn && !loading ? (
        <div className="col s12 m12">
          <h1>Welcome to Spotify Search</h1>
          <p>Please log inn with your spotify account</p>
        </div>
      ) : (
        <div className="col s12 m6">
          <h1>Welcome (Name comming)</h1>
        </div>
      )}
    </div>
  );
};

GetUser.propTypes = {
  user: PropTypes.object.isRequired,
  getToken: PropTypes.func.isRequired,
  getUserDetail: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getToken, getUserDetail }
)(GetUser);
