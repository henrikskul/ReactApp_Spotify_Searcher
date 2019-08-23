import {
  SET_NOW_PLAYING,
  SET_LOADING,
  SET_ARTISTS,
  SET_TRACKS
} from "../actions/Types";

export const setNowPlaying = song => {
  // sets what I want to show
  let displayed = {};
  if (song !== "") {
    displayed = {
      name: song.item.name,
      artist: song.item.album.artists[0].name,
      img: song.item.album.images[0].url,
      msg: " fine",
      preview_url: song.item.preview_url
    };
  } else {
    displayed = {
      name: "You are not playing any songs",
      msg: ""
    };
  }

  return {
    type: SET_NOW_PLAYING,
    payload: displayed
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
