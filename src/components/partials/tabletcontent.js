import React from "react";
import { connect } from "react-redux";

import _ from "lodash";
import uuid from "uuid";

import Loader from "./loader";

const TabletContent = props => {
  if (!props.times.arts) {
    return <Loader />;
  }

  return props.times.tablet.map((item, index) => {
    // Check each item in arr and return a category to display for image subject on unplashed: returns a string
    const category = _.head(item.des_facet);

    // Loop through the multimedia arr
    // Sort through the arr and return the index with the largest width
    const returnedIndex = _.findIndex(item.multimedia, prop => {
      return prop.width >= 1000;
    });

    // Grab the world arr
    // Grab the multimedia prop
    // Grab the url prop
    // Use the returnedIndex const to select correct image: returns string
    const returnedImage =
      returnedIndex === 4
        ? item.multimedia[returnedIndex].url
        : `https://source.unsplash.com/weekly?${category}`;

    return (
      <div key={uuid()} className="TabletContent">
        <div className="TabletContent-column-wrapper">
          <div className="TabletContent-image-wrapper">
            <a href={item.url}>
              <img src={returnedImage} alt={item.section} />
            </a>
          </div>
          <div className="TabletContent-content-wrapper">
            <a href={item.url}>
              {" "}
              <h3> {item.title}</h3>{" "}
            </a>
          </div>
        </div>
      </div>
    );
  });
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    error: state.error,
    weather: state.weather,
    stock: state.stock,
    times: state.times
  };
};

export default connect(mapStateToProps)(TabletContent);
