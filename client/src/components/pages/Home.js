import React, { Fragment } from "react";

import GetUser from "../user_detail/GetUser";
import LogIn from "../user_detail//LogIn";
import NowPlaying from "../spotify/NowPlaying";
import SearchTracks from "../spotify/SearchTracks";
import SearchArtists from "../spotify/SearchArtists";

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
      </div>
    </Fragment>
  );
};

export default Home;
