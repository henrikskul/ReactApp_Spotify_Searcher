import React, { useRef, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { setArtists } from "../../actions/spotifyActions";

import ArtistItem from "./ArtistItem";

const SearchArtists = ({
  user: { spotifyApi, loggedIn },
  spotifyState: { artists, loading },
  setArtists
}) => {
  const text = useRef("");

  const onChange = e => {
    //searchLogs(text.current.value);
    if (text.current.value !== "") {
      spotifyApi.searchArtists(text.current.value).then(
        data => {
          setArtists(data);
        },
        function(err) {
          console.error(err);
        }
      );
    }
  };

  return (
    <Fragment>
      {loggedIn && (
        <div className="col s12 m12">
          <h4 className="header">Search Artists</h4>
          <nav>
            <div className="nav-wrapper">
              <form>
                <div className="input-field">
                  <input
                    id="search"
                    type="search"
                    placeholder="Search Artist..."
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
                  artists.map((artist, i) => (
                    <ArtistItem artist={artist} key={artist.id} index={i} />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
// <ArtistItem artist={artist} />

SearchArtists.propTypes = {
  spotifyState: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  setArtists: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  spotifyState: state.spotifyState,
  user: state.user
});

export default connect(
  mapStateToProps,
  { setArtists }
)(SearchArtists);
