import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectAllSpaces } from "../../store/spaces/selectors";
import { fetchSpaces } from "../../store/spaces/thunk";
import { NavLink } from "react-router-dom";

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
              <div key={space.id}>
                <p>{space.title}</p>
                <p>{space.description}</p>
              </div>
              <button>
                <NavLink className="Link" to={`/spaces/${space.id}`}>
                  View Space
                </NavLink>
              </button>
            </div>
          ))}
    </div>
  );
}
