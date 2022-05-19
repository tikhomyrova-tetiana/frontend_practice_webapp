import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { selectSpaceDetail } from "../../store/spaces/selectors";
import { fetchOneSpace } from "../../store/spaces/thunk";

export default function SpaceCard() {
  const space = useSelector(selectSpaceDetail);
  const dispatch = useDispatch();
  const routeParams = useParams();
  console.log("space with story", space);
  // const { id, title, description } = props;

  useEffect(() => {
    dispatch(fetchOneSpace(routeParams.id));
  }, [dispatch]);

  return space ? (
    <div>
      <h2>Space</h2>
      <div key={space.id}>
        <h3>{space.title}</h3>
        <p>{space.description}</p>
        <p>
          {space.stories.map((s) => (
            <div>
              <h3>{s.name}</h3>
              <p>{s.content}</p>
            </div>
          ))}
        </p>
      </div>
    </div>
  ) : (
    <p>Loading</p>
  );
}
