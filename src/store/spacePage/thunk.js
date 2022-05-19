import axios from "axios";
import { startLoading, spaceCardFetched } from "./slice";

export function fetchSpace(id) {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(startLoading());
      const response = await axios.get(`http://localhost:4000/spaces/${id}`);
      console.log("response", response);
      const space = response.data;
      dispatch(spaceCardFetched(space));
    } catch (error) {
      console.log(error.message);
    }
  };
}
