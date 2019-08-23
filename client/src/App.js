import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import GetUser from "./components/user_detail/GetUser";
import LogIn from "./components/user_detail//LogIn";
import NowPlaying from "./components/spotify/NowPlaying";
import SearchTracks from "./components/spotify/SearchTracks";
import SearchArtists from "./components/spotify/SearchArtists";

import Test from "./components/layout/Test";

import { Provider } from "react-redux";
import store from "./store";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <div className="container">
            <div className="row">
              <LogIn />
              <GetUser />
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
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
