import { TOGGLE_MODAL, SET_TIME, STOP_TIME } from "./types";
import moment from "moment";

/**
 * This action creator toggles the modal component open and closed.
 * It accepts a boolean as a parameter to change the application state.
 */

export const toggleModal = boolean => {
  return {
    type: TOGGLE_MODAL,
    payload: boolean
  };
};

/**
 * This action creator updates the time segment and the date component.
 * It doesn't accept any parameters.
 */

export const setTime = () => dispatch => {
  dispatch({
    type: SET_TIME,
    payload: moment().format("MMMM Do YYYY, h:mm:ss a")
  });
};

/**
 * This action creator unmounts the timer component when the date and / or segment
 * component is not attached to the DOM.
 * It doesn't accept any parameters.
 */

export const stopTime = () => dispatch => {
  dispatch({
    type: STOP_TIME,
    payload: ""
  });
};
