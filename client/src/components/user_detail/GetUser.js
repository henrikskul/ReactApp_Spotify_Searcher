import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getToken } from "../../actions/userActions";

const GetUser = ({
  user: { spotifyApi, loggedIn, token, loading },
  getToken
}) => {
  useEffect(() => {
    getToken();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {!loggedIn && !loading ? (
        <div className="col s12 m4">
          <a href="http://localhost:5000">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Log inn with spotify
              <i className="material-icons right">send</i>
            </button>
          </a>
        </div>
      ) : (
        <div className="col s12 m6">
          <h1>Welcome Henrik</h1>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getToken }
)(GetUser);
