/***
 Should define all the variables for the action
 creators to avoid collisions and mistyping in actionCreators
 and reducers.
***/

/*
AUTH REDUCER
*/

export const SUBSCRIBE_NEW_USER = "SUBSCRIBE_NEW_USER";
export const LOGOFF_USER = "LOGOFF_USER";

export const LOGIN_USER = "LOGIN_USER";

/**
 * Controls the static types of the action creators that are
 * sent through the application. There should be no reason to
 * have action creators with "typos."
 */

/**
Error Reducer
**/
export const ADD_EMAIL_ERROR = "ADD_EMAIL_ERROR";
export const ADD_PASSWORD_ERROR = "ADD_PASSWORD_ERROR";
export const REMOVE_ERROR = "REMOVE_ERROR";

/*
Times Reducer
*/

export const GET_WORLD_DATA = "GET_WORLD_DATA";
export const GET_ARTS_DATA = "GET_ARTS_DATA";
export const GET_NATIONAL_DATA = "GET_NATIONAL_DATA";
export const GET_POLITICS_DATA = "GET_POLITICS_DATA";
export const GET_TECHNOLOGY_DATA = "GET_TECHNOLOGY_DATA";
export const GET_HEALTH_DATA = "GET_HEALTH_DATA";
export const GET_BUSINESS_DATA = "GET_BUSINESS_DATA";
export const GET_OPINION_DATA = "GET_OPINION_DATA";
export const GET_SCIENCE_DATA = "GET_SCIENCE_DATA";
export const GET_SPORTS_DATA = "GET_SPORTS_DATA";
export const GET_BOOKS_DATA = "GET_BOOKS_DATA";

/**
UI Reducer
 */

export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const SET_TIME = "SET_TIME";
export const STOP_TIME = "STOP_TIME";
