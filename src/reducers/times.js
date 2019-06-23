/* eslint-disable no-unused-vars */
import {
  GET_WORLD_DATA,
  GET_ARTS_DATA,
  GET_NATIONAL_DATA,
  GET_POLITICS_DATA,
  GET_TECHNOLOGY_DATA,
  GET_HEALTH_DATA,
  GET_BUSINESS_DATA,
  GET_OPINION_DATA,
  GET_SCIENCE_DATA,
  GET_SPORTS_DATA,
  GET_BOOKS_DATA
} from "../actions/types";
import _ from "lodash";

const timesReducerDefaultState = {
  world: [],
  arts: [],
  national: [],
  politics: [],
  technology: [],
  health: [],
  business: [],
  opinion: [],
  science: [],
  sports: [],
  books: []
};

const timesReducer = (state = timesReducerDefaultState, action) => {
  switch (action.type) {
    case GET_WORLD_DATA:
      // Limit the number of items to ten
      const world = action.payload.data.results.slice(0, 10);
      return {
        ...state,
        world
      };

    case GET_ARTS_DATA:
      // Limit the number of items to ten.
      const arts = action.payload.data.results.slice(0, 10);
      return {
        ...state,
        arts
      };
    case GET_NATIONAL_DATA:
      // Limit the number of items to ten.
      const national = action.payload.data.results.slice(0, 10);

      return {
        ...state,
        national
      };
    case GET_POLITICS_DATA:
      // Limit the number of items to ten.
      const politics = action.payload.data.results.slice(0, 10);

      return {
        ...state,
        politics
      };
    case GET_TECHNOLOGY_DATA:
      // Limit the number of items to ten.
      const technology = action.payload.data.results.slice(0, 10);

      return {
        ...state,
        technology
      };

    case GET_HEALTH_DATA:
      // Limit the number of items to ten.
      const health = action.payload.data.results.slice(0, 10);

      return {
        ...state,
        health
      };

    case GET_BUSINESS_DATA:
      // Limit the number of items to ten.
      const business = action.payload.data.results.slice(0, 10);

      return {
        ...state,
        business
      };

    case GET_OPINION_DATA:
      // Limit the number of items to three.
      const opinion = action.payload.data.results.slice(0, 3);

      return {
        ...state,
        opinion
      };

    case GET_SCIENCE_DATA:
      // Limit the number of items to ten.
      const science = action.payload.data.results.slice(0, 10);

      return {
        ...state,
        science
      };

    case GET_SPORTS_DATA:
      // Limit the number of items to ten.
      const sports = action.payload.data.results.slice(0, 10);

      return {
        ...state,
        sports
      };

    case GET_BOOKS_DATA:
      // Limit the number of items to ten.
      const books = action.payload.data.results.slice(0, 10);
      return {
        ...state,
        books
      };
    default:
      return state;
  }
};

export default timesReducer;
