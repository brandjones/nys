import { LOGIN_USER, SUBSCRIBE_NEW_USER, LOGOFF_USER } from "../actions/types";

const authReducerDefaultState = {
  email: window.sessionStorage.getItem("email"),
  token: "",
  session: window.sessionStorage.getItem("email"),
  successmessage: "",
  errormessage: "",
  subscribe: "",
  status: null
};

// Should return a reducer from the file.
function authReducer(state = authReducerDefaultState, action) {
  // Should switch based on the actionCreator and return the application state.
  switch (action.type) {
    case LOGIN_USER:
      // IF THERE IS NOT AN EMPTY DATA OBJ. THEN UPDATE THE STATE
      if (action.payload.data !== "") {
        return {
          ...state,
          email: action.payload.data.email,
          status: "Your login attempt was successful."
        };
      } else {
        return {
          ...state,
          status: "Your login attempt was unsuccessful. Try again."
        };
      }

    case SUBSCRIBE_NEW_USER:
      return {
        ...state,
        email: action.payload.data.user,
        successmessage: action.payload.data.successmessage,
        errormessage: action.payload.data.errormessage
      };
    case LOGOFF_USER:
      window.sessionStorage.clear();
      return {
        ...state,
        email: "",
        session: ""
      };
    default:
      return authReducerDefaultState;
  }
}

export default authReducer;
