import React, { FC, useState, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import Message from "../UI/Message";
import { signin, setError } from "../../store/actions/authActions";
import { RootState } from "../../store";
import RightLoginSvg from "../UI/SignIn/RightLoginSvg";
import Select from "../UI/SignIn/Select";
import { firestore } from "../..";
require("dotenv").config();

const SignIn: FC = () => {
  const email = process.env.REACT_APP_FIREBASE_EMAIL!;
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const pensions = ["Serenity"];
  const [pension, setPension] = useState(pensions[0]);

  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(""));
      }
    };
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (error) {
      dispatch(setError(""));
    }
    setLoading(true);
    window.localStorage.setItem("pension", pension);
    dispatch(signin({ email, password }, () => setLoading(false)));
  };

  return (
    <div>
      <style>
        @import
        url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')
      </style>

      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: 1000 }}
        >
          <div className="md:flex w-full">
            <RightLoginSvg />
            <form
              className="w-full md:w-1/2 py-10 px-5 md:px-10 self-center"
              onSubmit={submitHandler}
            >
              <div className="text-center mb-5">
                <h1 className="font-bold text-3xl text-gray-900">Sign In</h1>
                <p className="mt-3">Enter Famlee Portal</p>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      Select Pension House
                    </label>
                    <Select
                      options={pensions}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        e.preventDefault();
                        setPension(e.target.value);
                      }}
                    />
                    <label className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setPassword(e.currentTarget.value)
                        }
                        placeholder="Password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <Button
                      className="block w-full  mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                      text={loading ? "Loading..." : "Enter"}
                      disabled={loading}
                    />
                  </div>
                </div>
              </div>
              {error && <Message type="danger" msg={error} />}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
