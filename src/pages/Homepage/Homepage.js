import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectAllSpaces } from "../../store/spaces/selectors";
import { fetchSpaces } from "../../store/spaces/thunk";
import SpaceCard from "../../components/SpaceCard/SpaceCard";

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
              <SpaceCard
                key={space.id}
                id={space.id}
                title={space.title}
                description={space.description}
                backgroundColor={space.backgroundColor}
                color={space.color}
              />
            </div>
          ))}
    </div>
  );
}
