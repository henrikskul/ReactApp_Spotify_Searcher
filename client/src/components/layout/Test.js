import React from "react";

import { connect } from "react-redux";

const Test = ({ user: { spotifyApi, loggedIn } }) => {
  const testFunc = () => {
    spotifyApi.searchTracks("Love").then(
      function(data) {
        console.log('Search by "Love"', data);
      },
      function(err) {
        console.error(err);
      }
    );
  };

  return (
    <div>
      <button onClick={testFunc}>hei</button>
    </div>
  );
};

const mapStateToProps = state => ({
  spotifyState: state.spotifyState,
  user: state.user
});

export default connect(
  mapStateToProps,
  {}
)(Test);
