import { TOGGLE_MODAL, SET_TIME, STOP_TIME } from "../actions/types";

/**
 * Controls the default state of the user interface.
 */
const uiReducerDefaultState = {
  isModalOpen: false,
  time: ""
};

function uiReducer(state = uiReducerDefaultState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: action.payload
      };
    case SET_TIME:
      return {
        ...state,
        time: action.payload
      };

    case STOP_TIME:
      return {
        ...state,
        time: null
      };

    default:
      return state;
  }
}

export default uiReducer;
