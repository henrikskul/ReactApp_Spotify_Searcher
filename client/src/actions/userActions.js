import axios from "axios";
import {
  LOGG_INN,
  SET_LOADING,
  GET_TOKEN,
  TOKEN_ERROR,
  GET_USER_DETAIL
} from "./Types";

// method to get accsess_token
const getHashParams = () => {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
};

export const logInUser = () => async dispatch => {
  try {
    const res = await axios.get("/login");
    dispatch({
      type: LOGG_INN,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

// gets users detail
export const getUserDetail = data => {
  setLoading();

  return {
    type: GET_USER_DETAIL,
    payload: data
  };
};

// get token from spotify api
export const getToken = () => async dispatch => {
  try {
    const params = getHashParams();

    if (params.access_token) {
      dispatch({
        type: GET_TOKEN,
        payload: params.access_token
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const setTokenError = () => {
  return {
    type: TOKEN_ERROR
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
