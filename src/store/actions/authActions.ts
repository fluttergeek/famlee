import { ThunkAction } from "redux-thunk";

import {
  AuthAction,
  SET_USER,
  User,
  SET_LOADING,
  SIGN_OUT,
  SignInData,
  SET_ERROR,
  SET_SUCCESS,
} from "../types";
import { RootState } from "..";
import { firestore, auth } from "../../index";

// Get user by id
export const getUserById = (
  id: string
): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      const userData = { id: id } as User;
      dispatch({
        type: SET_USER,
        payload: userData,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// Set loading
export const setLoading = (
  value: boolean
): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
      payload: value,
    });
  };
};

// Log in
export const signin = (
  data: SignInData,
  onError: () => void
): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      await auth.signInWithEmailAndPassword(data.email, data.password);
    } catch (err) {
      console.log(err);
      onError();
      dispatch(setError(err.message));
    }
  };
};

// Log out
export const signout = (): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await auth.signOut();
      dispatch({
        type: SIGN_OUT,
      });
    } catch (err) {
      console.log(err);
      dispatch(setLoading(false));
    }
  };
};

// Set error
export const setError = (
  msg: string
): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_ERROR,
      payload: msg,
    });
  };
};

// Set success
export const setSuccess = (
  msg: string
): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_SUCCESS,
      payload: msg,
    });
  };
};
