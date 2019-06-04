import {
  ADD_EMAIL_ERROR,
  ADD_PASSWORD_ERROR,
  REMOVE_ERROR
} from "../actions/types";

const errorReducerDefaultState = {
  emailError: "",
  passwordError: ""
};
// Should return a reducer from the file.
function errorReducer(state = errorReducerDefaultState, action) {
  // Should switch based on the actionCreator and return the errorReducer application state.
  switch (action.type) {
    case ADD_EMAIL_ERROR:
      return {
        ...state,
        emailError: action.payload
      };
    case ADD_PASSWORD_ERROR:
      return {
        ...state,
        passwordError: action.payload
      };
    case REMOVE_ERROR:
      return {
        ...state,
        emailError: "",
        passwordError: ""
      };
    default:
      return errorReducerDefaultState;
  }
}

export default errorReducer;
