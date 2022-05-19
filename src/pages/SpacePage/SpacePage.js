import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { selectOneSpace } from "../../store/spacePage/selectors";
import { fetchSpace } from "../../store/spacePage/thunk";
// import { NavLink } from "react-router-dom";

export default function SpaceCard() {
  const space = useSelector(selectOneSpace);
  const dispatch = useDispatch();
  const routeParams = useParams();
  // const { id, title, description } = props;

  useEffect(() => {
    dispatch(fetchSpace(routeParams.id));
  }, [dispatch]);

  return space ? (
    <div>
      <h2>Space</h2>
      <div key={space.id}>
        <h3>{space.title}</h3>
        <p>{space.description}</p>
      </div>
    </div>
  ) : (
    <p>Loading</p>
  );
}
