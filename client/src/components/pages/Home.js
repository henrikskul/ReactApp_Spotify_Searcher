import React, { Fragment } from "react";

import GetUser from "../user_detail/GetUser";
import LogIn from "../user_detail//LogIn";
import NowPlaying from "../spotify/NowPlaying";
import SearchTracks from "../spotify/SearchTracks";
import SearchArtists from "../spotify/SearchArtists";
import AvalibleDevices from "../spotify/AvalibleDevices";

const Home = () => {
  return (
    <Fragment>
      <div className="row">
        <GetUser />
        <LogIn />
      </div>
      <div className="row">
        <SearchArtists />
      </div>
      <div className="row">
        <SearchTracks />
      </div>
      <div className="row">
        <NowPlaying />
        <AvalibleDevices />
      </div>
    </Fragment>
  );
};

export default Home;
