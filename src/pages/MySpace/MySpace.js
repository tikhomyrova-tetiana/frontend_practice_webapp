import Button from "@restart/ui/esm/Button";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import PostForm from "../../components/PostForm/PostForm";
import { deleteStory } from "../../store/user/actions";
import { selectMySpace, selectToken } from "../../store/user/selectors";

export default function MySpace() {
  const mySpace = useSelector(selectMySpace);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  console.log("msysps", mySpace);
  const [form, setForm] = useState(false);
  //we need navigate, token and UseEffect for redirecting person to the Homepage if he is not login
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/");
  }, [token]);

  if (!mySpace) return <Loading />;

  // plan:
  // make a button on each story DONE
  // we need an endpoint to handle this
  // when clicked => shoot a request to the backendz

  const onDeleteClick = (id) => {
    console.log("clicked?", id);
    // I need a thunk to call in dispatch
    dispatch(deleteStory(id));
  };

  return (
    <div>
      <Button onClick={() => setForm(!form)}>Post a story</Button>
      {form && (
        <div>
          <PostForm />
        </div>
      )}
      {mySpace.stories.map((s) => (
        <div>
          <h2>{s.name}</h2>
          <p>{s.content}</p>
          <img src={s.imageUrl} alt="story" width="500px" />
          <Button onClick={() => onDeleteClick(s.id)}>Delete</Button>
        </div>
      ))}
    </div>
  );
}
