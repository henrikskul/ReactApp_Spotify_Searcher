import {
  LOGG_INN,
  SET_LOADING,
  GET_TOKEN,
  GET_USER_DETAIL,
  TOKEN_ERROR
} from "../actions/Types";

import Spotify from "spotify-web-api-js";

const initialstate = {
  userDetail: null,
  tokenError: false,
  showDetail: false,
  loggedIn: false,
  loading: false,
  token: null,
  error: null,
  authUri: null,
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
        tokenError: false,
        loading: false
      };
    case TOKEN_ERROR:
      return {
        ...state,
        userDetail: null,
        tokenError: true,
        showDetail: false,
        loggedIn: false,
        loading: false,
        token: null,
        error: null,
        authUri: null,
        showUri: false,
        spotifyApi: new Spotify()
      };
    case GET_USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
        showDetail: true,
        loading: false
      };
    case LOGG_INN:
      return {
        ...state,
        authUri: action.payload,
        showUri: true
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
