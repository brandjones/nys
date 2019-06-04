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
  tablet: [],
  home: [],
  world: [],
  arts: [],
  national: [],
  politics: [],
  technology: [],
  health: [],
  business: [],
  science: [],
  sports: [],
  books: [],
  opinion: []
};

const timesReducer = (state = timesReducerDefaultState, action) => {
  switch (action.type) {
    case GET_WORLD_DATA:
      // Limit the number of items to ten
      const world = action.payload.data.results.slice(0, 10);
      return {
        ...state,
        world: world
      };

    case GET_ARTS_DATA:
      // Limit the number of items to three
      const arts = action.payload.data.results.slice(0, 5);
      const tablet = action.payload.data.results.slice(0, 3);
      return {
        ...state,
        arts: arts,
        tablet: tablet
      };

    case GET_BUSINESS_DATA:
      // Limit the number of items to three
      const business = action.payload.data.results.slice(0, 10);

      return {
        ...state,
        business: business
      };
    case GET_OPINION_DATA:
      // Limit the number of items to three
      const opinion = action.payload.data.results.slice(0, 10);

      return {
        ...state,
        opinion: opinion
      };
    case GET_NATIONAL_DATA:
      // Limit the number of items to three
      const national = action.payload.data.results.slice(0, 10);

      return {
        ...state,
        national: national
      };
    case GET_POLITICS_DATA:
      // Limit the number of items to three
      const politics = action.payload.data.results.slice(0, 10);

      return {
        ...state,
        politics: politics
      };

    case GET_TECHNOLOGY_DATA:
      // Limit the number of items to three
      const technology = action.payload.data.results.slice(0, 10);
      const tech = action.payload.data.results.slice(3, 4);

      return {
        ...state,
        technology: technology
      };

    case GET_HEALTH_DATA:
      // Limit the number of items to three
      const health = action.payload.data.results.slice(0, 10);
      const healthy = action.payload.data.results.slice(8, 10);

      return {
        ...state,
        health: health
      };

    case GET_SCIENCE_DATA:
      // Limit the number of items to three
      const science = action.payload.data.results.slice(0, 10);

      return {
        ...state,
        science: science
      };

    case GET_SPORTS_DATA:
      // Limit the number of items to three
      const sports = action.payload.data.results.slice(0, 10);

      return {
        ...state,
        sports: sports
      };

    case GET_BOOKS_DATA:
      // Limit the number of items to three
      const books = action.payload.data.results.slice(0, 10);
      return {
        ...state,
        books: books
      };
    default:
      return state;
  }
};

export default timesReducer;
