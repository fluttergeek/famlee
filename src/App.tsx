import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./index";
import Rooms from "./components/pages/Rooms/Rooms";
import SignIn from "./components/pages/SignIn";
import PrivateRoute from "./components/Auth/PrivateRoute";
import PublicRoute from "./components/Auth/PublicRoute";
import Loader from "./components/UI/Loader";
import { getUserById, setLoading } from "./store/actions/authActions";
import { RootState } from "./store";
import SignOut from "./components/pages/SignOut";

const App: FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);

  // Check if user exists
  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setLoading(true));
        await dispatch(getUserById(user.uid));
      }
      dispatch(setLoading(false));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <Switch>
        <PublicRoute path="/signin" component={SignIn} exact />
        <PublicRoute path="/signout" component={SignOut} exact />
        <PrivateRoute path="/" component={Rooms} exact />
      </Switch>
    </Router>
  );
};

export default App;
