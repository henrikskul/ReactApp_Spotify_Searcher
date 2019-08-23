import {
  SET_NOW_PLAYING,
  SET_LOADING,
  SET_ARTISTS,
  SET_TRACKS
} from "../actions/Types";

const initialstate = {
  nowPlaying: {},
  artists: [],
  tracks: [],
  loading: false
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case SET_NOW_PLAYING:
      return {
        ...state,
        nowPlaying: action.payload,
        loading: false
      };

    case SET_ARTISTS:
      return {
        ...state,
        artists: action.payload,
        loading: false
      };

    case SET_TRACKS:
      return {
        ...state,
        tracks: action.payload,
        loading: false
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
