import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectAllSpaces } from "../../store/space/selectors";
import { fetchSpaces } from "../../store/space/thunk";

export default function Homepage() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectAllSpaces);

  //   Dispatch fetchPosts inside useEffect. This is the necessary step to fetch the data and put it in the Redux store.
  useEffect(() => {
    dispatch(fetchSpaces);
  }, [dispatch]);

  return (
    <div>
      <h2>Spaces</h2>
      {!spaces.length
        ? "Loading"
        : spaces.map((space) => (
            <div>
              <p key={space.id}>{space.title}</p>
              <p>{space.description}</p>
            </div>
          ))}
    </div>
  );
}
