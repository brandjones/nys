import { ADD_EMAIL_ERROR, REMOVE_ERROR, ADD_PASSWORD_ERROR } from "./types";

/*
Should define an action object that contains the
value and an error string
*/

export const addEmailError = emailError => {
  return {
    type: ADD_EMAIL_ERROR,
    payload: emailError
  };
};

export const removeEmailError = errorMessage => {
  return {
    type: REMOVE_ERROR,
    payload: errorMessage
  };
};

export const addPasswordError = passwordMessage => {
  return {
    type: ADD_PASSWORD_ERROR,
    payload: passwordMessage
  };
};
