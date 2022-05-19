import axios from "axios";
import { startLoading, spacesFetched } from "./slice";

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
