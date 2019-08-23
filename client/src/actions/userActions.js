import axios from "axios";
import { LOGG_INN, SET_LOADING, GET_TOKEN, LOG_IN_ERROR } from "./Types";

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

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
