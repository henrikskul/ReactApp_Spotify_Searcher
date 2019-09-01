import {
  SET_NOW_PLAYING,
  SET_LOADING,
  SET_ARTISTS,
  SET_TRACKS,
  SHOW_CONTENT,
  SET_MY_DEVICES,
  SET_SONG,
  SET_ACTIVE_DEVICE
} from "../actions/Types";

const initialstate = {
  nowPlaying: {},
  showContent: false,
  showSong: false,
  artists: [],
  tracks: [],
  myDevices: [],
  showDevices: false,
  shiftActiveDevice: false,
  loading: false
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case SET_NOW_PLAYING:
      return {
        ...state,
        nowPlaying: action.payload,
        showSong: false,
        loading: false
      };

    case SET_SONG:
      return {
        ...state,
        showSong: true
      };

    case SHOW_CONTENT:
      return {
        ...state,
        showContent: true
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

    case SET_MY_DEVICES:
      return {
        ...state,
        myDevices: action.payload,
        showDevices: true,
        shiftActiveDevice: false,
        loading: false
      };

    case SET_ACTIVE_DEVICE:
      return {
        ...state,
        shiftActiveDevice: true
      };

    default:
      return state;
  }
};
