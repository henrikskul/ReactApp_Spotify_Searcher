import React, { useRef } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { setTracks } from "../../actions/spotifyActions";

import TrackItem from "./TrackItem";

const SearchTracks = ({
  user: { spotifyApi, loggedIn },
  spotifyState: { tracks, loading },
  setTracks
}) => {
  const text = useRef("");

  const onChange = e => {
    //searchLogs(text.current.value);
    if (text.current.value !== "") {
      spotifyApi.searchTracks(text.current.value).then(
        data => {
          console.log('Search Tracks by ""', data);
          setTracks(data);
        },
        function(err) {
          console.error(err);
        }
      );
    }
    console.log(tracks);
  };

  return (
    <div className="col s12 m12">
      <h4 className="header">Search Tracks</h4>
      <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="Search Tracks..."
                ref={text}
                onChange={onChange}
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>

      <div className="card scroll-box">
        <div className="card-content">
          <ul className="collection">
            {!loading &&
              tracks.map((track, i) => (
                <TrackItem track={track} key={track.id} index={i} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

SearchTracks.propTypes = {
  spotifyState: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  setTracks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  spotifyState: state.spotifyState,
  user: state.user
});

export default connect(
  mapStateToProps,
  { setTracks }
)(SearchTracks);
