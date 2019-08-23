import { combineReducers } from "redux";
import userReducer from "./userReducer";
import spotifyReducer from "./spotifyReducer";

export default combineReducers({
  user: userReducer,
  spotifyState: spotifyReducer
});
