import {
  SET_NOW_PLAYING,
  SET_LOADING,
  SET_ARTISTS,
  SET_TRACKS,
  SHOW_NOW_PLAYING
} from "../actions/Types";

export const setNowPlaying = song => {
  // sets what I want to show
  let displayed = {};
  if (song !== "") {
    displayed = {
      name: song.item.name,
      artist: song.item.album.artists[0].name,
      img: song.item.album.images[0].url,
      preview_url: song.item.preview_url
    };
  } else {
    displayed = {
      name: "You are not playing any songs",
      artist: "Sometimes this takes a while to get if you are playing a song"
    };
  }

  return {
    type: SET_NOW_PLAYING,
    payload: displayed
  };
};

export const setShowNowPlaying = () => {
  return {
    type: SHOW_NOW_PLAYING
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

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
