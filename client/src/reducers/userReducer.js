import {
  LOGG_INN,
  SET_LOADING,
  GET_TOKEN,
  GET_USER_DETAIL
} from "../actions/Types";

import Spotify from "spotify-web-api-js";

const initialstate = {
  loggedIn: false,
  loading: false,
  token: null,
  error: null,
  authUri: null,
  userDetail: null,
  showUri: false,
  spotifyApi: new Spotify()
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case GET_TOKEN:
      // connects spotyfi api to token
      state.spotifyApi.setAccessToken(action.payload);
      //state.spotifyApi.setPromiseImplementation(Q);
      return {
        ...state,
        token: action.payload,
        loggedIn: true,
        loading: false
      };
    case LOGG_INN:
      return {
        ...state,
        authUri: action.payload,
        showUri: true
      };
    case GET_USER_DETAIL:
      console.log("nei");
      return {
        ...state,
        userDetail: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
