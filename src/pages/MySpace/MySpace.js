import Button from "@restart/ui/esm/Button";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import { deleteStory } from "../../store/user/actions";
import { selectMySpace } from "../../store/user/selectors";

export default function MySpace() {
  const mySpace = useSelector(selectMySpace);
  const dispatch = useDispatch();
  console.log("msysps", mySpace);

  if (!mySpace) <Loading />;
  // plan:
  // make a button on each story DONE
  // we need an endpoint to handle this
  // when clicked => shoot a request to the backend

  const onDeleteClick = (id) => {
    console.log("clicked?", id);
    // I need a thunk to call in dispatch
    dispatch(deleteStory(id));
  };

  return (
    <div>
      {mySpace.stories.map((s) => (
        <div>
          <h2>{s.name}</h2>
          <p>{s.content}</p>
          <img src={s.imageUrl} alt="story" />
          <Button onClick={() => onDeleteClick(s.id)}>Delete</Button>
        </div>
      ))}
    </div>
  );
}
