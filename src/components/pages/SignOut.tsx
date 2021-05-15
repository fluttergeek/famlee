import React, { FC } from "react";
import { signout } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const SignOut: FC = () => {
  const dispatch = useDispatch();

  dispatch(signout());

  return <Route render={() => <Redirect to="/signin" />} />;
};

export default SignOut;
