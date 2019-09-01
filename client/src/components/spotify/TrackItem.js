import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { setSong } from "../../actions/spotifyActions";

const TrackItem = ({ track, index, user: { spotifyApi }, setSong }) => {
  const { album, name, artists, external_urls } = track;

  const showImage = album.images[0] === undefined ? false : true;

  const playSong = () => {
    spotifyApi
      .play({ uris: [track.uri] })
      .then(res => {
        setSong();
      })
      .catch(err => {
        console.log(err.response);
        console.log(err);
      });
  };

  //const showRow = index === 0 || 3 || 6 || 9 || 12 || 15 || 18 ? true : false;
  //console.log(showRow);
  //{showImage && <img src={album.images[0].url} alt="" />}
  return (
    <div className="col s12 m6 border-cover">
      <li className="collection-item avatar">
        {showImage && (
          <img src={album.images[0].url} alt="" className="circle" />
        )}
        <span className="title">{name}</span>
        <p>
          Artist: {artists[0].name}
          <br />
          <a href={external_urls.spotify}>Spotify url</a>
        </p>
        <button
          onClick={playSong}
          className="secondary-content waves-effect waves-teal btn-flat"
        >
          <i className="material-icons">play_circle_filled</i>
        </button>
      </li>
    </div>
  );
};

TrackItem.propTypes = {
  track: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  spotifyState: state.spotifyState,
  user: state.user,
  setSong: PropTypes.func.isRequired
});

export default connect(
  mapStateToProps,
  { setSong }
)(TrackItem);
