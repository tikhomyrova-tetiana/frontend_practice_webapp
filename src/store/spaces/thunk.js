import axios from "axios";
import { startLoading, spacesFetched, spaceDetailFetched } from "./slice";

export async function fetchSpaces(dispatch, getState) {
  try {
    dispatch(startLoading());
    // going to Redux state and checking the current lenght of spaces
    // const offset = getState().feed.spaces.length;
    const response = await axios.get("http://localhost:4000/spaces");
    console.log("response", response);
    const spaces = response.data;
    dispatch(spacesFetched(spaces));
  } catch (error) {
    console.log(error.message);
  }
}

export function fetchOneSpace(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(startLoading());
      const response = await axios.get(`http://localhost:4000/spaces/${id}`);
      console.log("response details", response);
      const details = response.data;
      dispatch(spaceDetailFetched(details));
    } catch (error) {
      console.log(error.message);
    }
  };
}
