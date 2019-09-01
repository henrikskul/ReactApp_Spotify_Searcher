import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { setSong } from "../../actions/spotifyActions";
import { setActiveDevice } from "../../actions/spotifyActions";

const DeviceItem = ({
  device,
  index,
  user: { spotifyApi },
  setSong,
  setActiveDevice
}) => {
  const { is_active, name, type } = device;

  const onClick = () => {
    console.log("click");
    spotifyApi
      .transferMyPlayback([device.id])
      .then(res => {
        setSong();
        setActiveDevice();
      })
      .catch(err => {
        console.log(err.response);
        console.log(err);
        setActiveDevice();
      });
  };

  return (
    <div className="col s12 m12 border-cover">
      <li
        className="collection-item avatar"
        style={{ paddingLeft: "20px" }}
        onClick={onClick}
      >
        <span className="title">Type: {type}</span>
        <p>
          Name: {name}
          <br />
          Active:{" "}
          {is_active ? (
            <strong>Yes</strong>
          ) : (
            <strong>No, click me to play here</strong>
          )}
        </p>
        <a href="#!" className="secondary-content">
          <i className="material-icons">grade</i>
        </a>
      </li>
    </div>
  );
};

DeviceItem.propTypes = {
  device: PropTypes.object.isRequired,
  setActiveDevice: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  spotifyState: state.spotifyState,
  user: state.user
});

export default connect(
  mapStateToProps,
  { setSong, setActiveDevice }
)(DeviceItem);
