import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import NewTrackForm from "./components/tracks/NewTrackForm";
import TracksList from "./components/tracks/TracksList";
import TrackShow from "./components/tracks/TrackShow";
import { authenticate } from "./store/session";

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/users" exact={true}>
          <UsersList/>
        </Route>
        <Route path="/users/:userId" exact={true}>
          <User />
        </Route>
        <Route path="/tracks" exact={true}>
          <TracksList/>
        </Route>
        <Route path="/tracks/:trackId" exact={true}>
          <TrackShow />
        </Route>
        <ProtectedRoute path="/" exact={true}>
          <h1>Welcome, to your homepage!</h1>
        </ProtectedRoute>
        <ProtectedRoute path="/tracks/new" exact={true}>
          <NewTrackForm />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
