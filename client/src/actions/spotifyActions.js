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

export const setNowPlaying = song => {
  // sets what I want to show
  let displayed = {};
  if (song !== "" && song.item !== null) {
    displayed = {
      name: song.item.name,
      artist: song.item.album.artists[0].name,
      img: song.item.album.images[0].url,
      preview_url: song.item.preview_url
    };
  } else {
    displayed = {
      name: "You are not playing any songs",
      artist:
        "Sometimes this takes a while to get if you are playing a song. Press pause/play to update"
    };
  }

  return {
    type: SET_NOW_PLAYING,
    payload: displayed
  };
};

export const setSong = () => {
  return {
    type: SET_SONG
  };
};

export const setActiveDevice = () => {
  return {
    type: SET_ACTIVE_DEVICE
  };
};

export const setShowContent = () => {
  return {
    type: SHOW_CONTENT
  };
};

// Set search for Artists
export const setArtists = data => {
  setLoading();
  const artists = data.artists.items;
  let names = [];

  artists.forEach(artist => {
    names.push(artist);
  });

  return {
    type: SET_ARTISTS,
    payload: names
  };
};

// Set search for Artists
export const setTracks = data => {
  const tracks = data.tracks.items;
  let names = [];

  tracks.forEach(track => {
    names.push(track);
  });

  return {
    type: SET_TRACKS,
    payload: names
  };
};

// Set My Devices
export const setMyDevices = data => {
  const devices = data.devices;

  return {
    type: SET_MY_DEVICES,
    payload: devices
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
