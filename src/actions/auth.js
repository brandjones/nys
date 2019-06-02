import { LOGIN_USER, SUBSCRIBE_NEW_USER, LOGOFF_USER } from "./types";
import axios from "axios";

/**
Should send an HTTP REQUEST to the backend server
to create a new user within the application. The request
should contain:
--- userName, dateCreated, email, password, lastLogin
  **/

export const login = (email, password, session, history) => async dispatch => {
  let window = session;
  const response = await axios.post("/api/user/login", {
    email,
    password
  });
  dispatch({
    type: LOGIN_USER,
    payload: response,
    session: window.sessionStorage,
    history: history
  });
};

export const subscribe = (email, password, session) => async dispatch => {
  const response = await axios.post("/api/user/subscribe", {
    email,
    password
  });

  dispatch({ type: SUBSCRIBE_NEW_USER, payload: response });
};

export const logoff = () => {
  return {
    type: LOGOFF_USER
  };
};
