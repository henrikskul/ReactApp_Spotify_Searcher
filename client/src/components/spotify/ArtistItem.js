import React from "react";
import PropTypes from "prop-types";

const ArtistItem = ({ artist, index }) => {
  const { images, name, followers, external_urls } = artist;

  const showImage = images[0] === undefined ? false : true;

  //const showRow = index === 0 || 3 || 6 || 9 || 12 || 15 || 18 ? true : false;

  //console.log(showRow);
  //{showImage && <img src={images[0].url} alt="" />}
  return (
    <div className="col s12 m6 border-cover">
      <li className="collection-item avatar">
        {showImage && <img src={images[0].url} alt="" className="circle" />}
        <span className="title">{name}</span>
        <p>
          Followers: {followers.total}
          <br />
          <a href={external_urls.spotify}>Spotify url</a>
        </p>
        <a href="#!" className="secondary-content">
          <i className="material-icons">grade</i>
        </a>
      </li>
    </div>
  );
};

ArtistItem.propTypes = {
  artist: PropTypes.object.isRequired
};

export default ArtistItem;
