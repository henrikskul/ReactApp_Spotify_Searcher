import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { setMyDevices } from "../../actions/spotifyActions";

import DeviceItem from "./DeviceItem";

const AvalibleDevices = ({
  spotifyState: {
    showContent,
    myDevices,
    showDevices,
    loading,
    shiftActiveDevice
  },
  user: { spotifyApi, loggedIn, tokenError },
  setMyDevices
}) => {
  useEffect(() => {
    if (showContent && loggedIn) {
      spotifyApi
        .getMyDevices()
        .then(res => {
          setMyDevices(res);
        })
        .catch(err => {
          console.log(err.response);
          console.log(err);
        });
    }
    // eslint-disable-next-line
  }, [loggedIn, showContent, shiftActiveDevice]);
  return (
    <Fragment>
      {showDevices && (
        <div className="col s12 m6">
          <h4 className="header">Avalible Devices</h4>
          <div className="card">
            <div className="card-content">
              <ul className="collection">
                {myDevices.length !== 0 ? (
                  myDevices.map((device, i) => (
                    <DeviceItem device={device} key={device.id} index={i} />
                  ))
                ) : (
                  <li className="collection-item">No devices avalible</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

AvalibleDevices.propTypes = {
  spotifyState: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  setMyDevices: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  spotifyState: state.spotifyState,
  user: state.user
});

export default connect(
  mapStateToProps,
  { setMyDevices }
)(AvalibleDevices);
