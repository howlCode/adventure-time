import { combineReducers } from "redux";
import authReducer from "./authReducer";
import storiesReducer from "./storiesReducer";

export default combineReducers({
  auth: authReducer,
  stories: storiesReducer
});
