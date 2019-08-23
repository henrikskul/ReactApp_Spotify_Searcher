import React from "react";
import PropTypes from "prop-types";

const ArtistItem = ({ artist, index }) => {
  const { images, name, followers, external_urls } = artist;

  const showImage = images[0] === undefined ? false : true;

  const showRow = index === 0 || 3 || 6 || 9 || 12 || 15 || 18 ? true : false;

  console.log(showRow);

  return (
    <div className="col s12 m2">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light small">
          {showImage && <img src={images[0].url} alt="" />}
        </div>
        <div className="card-content" style={{ padding: "10px" }}>
          <span className="card-title activator grey-text text-darken-4 ">
            {name}
          </span>
          <p>
            <a href={external_urls.spotify}>Spotifurl</a>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">close</i>
          </span>
          <br />
          <p>Followers: {followers.total || 0}</p>
        </div>
      </div>
    </div>
  );
};

ArtistItem.propTypes = {
  artist: PropTypes.object.isRequired
};

export default ArtistItem;
