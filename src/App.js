import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
// import HeroBanner from "./components/HeroBanner";
import Homepage from "./pages/Homepage/Homepage";
import SpacePage from "./pages/SpacePage/SpacePage";
import SpaceCard from "./pages/SpacePage/SpacePage";

// const Home = () => (
//   <HeroBanner>
//     <h1>Home</h1>
//   </HeroBanner>
// );
// const Other = () => (
//   <HeroBanner>
//     <h1>Other</h1>
//   </HeroBanner>
// );

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/spaces/:id" element={<SpaceCard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
