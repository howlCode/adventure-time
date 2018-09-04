import axios from "axios";
import { FETCH_USER, FETCH_STORIES } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchStories = () => async dispatch => {
  const res = await axios.get("/api/stories");
  dispatch({ type: FETCH_STORIES, payload: res.data });
};
