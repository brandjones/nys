import axios from "axios";

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
} from "./types";

/**
 * This action creator makes a get request to the New York Times API for articles of the
 * "world" subject area. The action creator itself does not accept any parameters.
 */

export const getWorldData = () => async dispatch => {
  const response = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=YuI8dUZ26YxvXAYOmCBhDNnLyXY1GWXL"
  );
  dispatch({
    type: GET_WORLD_DATA,
    payload: response
  });
};

/**
 * This action creator makes a get request to the New York Times API for articles of the
 * "arts" subject area. The action creator itself does not accept any parameters.
 */

export const getArtsData = () => async dispatch => {
  const response = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=YuI8dUZ26YxvXAYOmCBhDNnLyXY1GWXL"
  );
  dispatch({
    type: GET_ARTS_DATA,
    payload: response
  });
};

/**
 * This action creator makes a get request to the New York Times API for articles of the
 * "national" subject area. The action creator itself does not accept any parameters.
 */

export const getNationalData = () => async dispatch => {
  const response = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/national.json?api-key=YuI8dUZ26YxvXAYOmCBhDNnLyXY1GWXL"
  );
  dispatch({
    type: GET_NATIONAL_DATA,
    payload: response
  });
};

/**
 * This action creator makes a get request to the New York Times API for articles of the
 * "politics" subject area. The action creator itself does not accept any parameters.
 */

export const getPoliticsData = () => async dispatch => {
  const response = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=YuI8dUZ26YxvXAYOmCBhDNnLyXY1GWXL"
  );
  dispatch({
    type: GET_POLITICS_DATA,
    payload: response
  });
};

/**
 * This action creator makes a get request to the New York Times API for articles of the
 * "technology" subject area. The action creator itself does not accept any parameters.
 */

export const getTechnologyData = () => async dispatch => {
  const response = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=YuI8dUZ26YxvXAYOmCBhDNnLyXY1GWXL"
  );
  dispatch({
    type: GET_TECHNOLOGY_DATA,
    payload: response
  });
};

/**
 * This action creator makes a get request to the New York Times API for articles of the
 * "health" subject area. The action creator itself does not accept any parameters.
 */

export const getHealthData = () => async dispatch => {
  const response = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=YuI8dUZ26YxvXAYOmCBhDNnLyXY1GWXL"
  );
  dispatch({
    type: GET_HEALTH_DATA,
    payload: response
  });
};

/**
 * This action creator makes a get request to the New York Times API for articles of the
 * "business" subject area. The action creator itself does not accept any parameters.
 */

export const getBusinessData = () => async dispatch => {
  const response = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=YuI8dUZ26YxvXAYOmCBhDNnLyXY1GWXL"
  );
  dispatch({
    type: GET_BUSINESS_DATA,
    payload: response
  });
};

/**
 * This action creator makes a get request to the New York Times API for articles of the
 * "opinion" subject area. The action creator itself does not accept any parameters.
 * This data is only used in the tabletcontent component and it is limited to three articles.
 */

export const getOpinionData = () => async dispatch => {
  const response = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=YuI8dUZ26YxvXAYOmCBhDNnLyXY1GWXL"
  );
  dispatch({
    type: GET_OPINION_DATA,
    payload: response
  });
};

/**
 * This action creator makes a get request to the New York Times API for articles of the
 * "science" subject area. The action creator itself does not accept any parameters.
 */

export const getScienceData = () => async dispatch => {
  const response = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=YuI8dUZ26YxvXAYOmCBhDNnLyXY1GWXL"
  );
  dispatch({
    type: GET_SCIENCE_DATA,
    payload: response
  });
};

/**
 * This action creator makes a get request to the New York Times API for articles of the
 * "sports" subject area. The action creator itself does not accept any parameters.
 */

export const getSportsData = () => async dispatch => {
  const response = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=YuI8dUZ26YxvXAYOmCBhDNnLyXY1GWXL"
  );
  dispatch({
    type: GET_SPORTS_DATA,
    payload: response
  });
};

/**
 * This action creator makes a get request to the New York Times API for articles of the
 * "books" subject area. The action creator itself does not accept any parameters.
 */

export const getBooksData = () => async dispatch => {
  const response = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/books.json?api-key=YuI8dUZ26YxvXAYOmCBhDNnLyXY1GWXL"
  );
  dispatch({
    type: GET_BOOKS_DATA,
    payload: response
  });
};
