import React from "react";
import uuid from "uuid";
import moment from "moment";
import _ from "lodash";
import Loader from "../partials/loader";

// Return a function the outputs jsx for mobile screen view: arguments = props
const OutputMobilePoliticsContent = ({ props }) => {
  if (!props.times.politics) {
    return <Loader />;
  }

  return props.times.politics.map((item, index) => {
    // Check each item in arr and return a category to display for image subject on unplashed: returns a string
    const category = _.head(item.des_facet);

    // 1. Loop through the multimedia arr
    // 2. Sort through the arr and return the index with the largest width
    const returnedIndex = _.findIndex(item.multimedia, prop => {
      return prop.width >= 1000;
    });

    // 1. Grab the world arr
    // 2. Grab the multimedia prop
    // 3. Grab the url prop
    // 4. Use the returnedIndex const to select correct image: returns string
    const returnedImage =
      returnedIndex === 4
        ? item.multimedia[returnedIndex].url
        : `https://source.unsplash.com/weekly?${category}`;

    // if there is not an item (article) in the arr return the loader until the data loads
    if (!item) {
      return <Loader />;
    } else {
    }

    return (
      <div key={uuid()} className="RenderContent">
        <div className="divider"> </div>
        <div className="RenderContent__title ">
          <a href={item.url}>
            {" "}
            <h3 className="text-container"> {item.title} </h3>{" "}
          </a>
        </div>
        <div className="RenderContent__abstract">
          <a href={item.url}> </a>
          <p>{item.abstract}</p>
          <p>{item.subsection}</p>
          <p>
            {" "}
            {moment()
              .startOf(item.created_date)
              .fromNow()}
          </p>
        </div>
        <div className="divider"> </div>
        <div className="image">
          <a href={item.url}>
            {" "}
            <img alt="times" className="image" src={returnedImage} />{" "}
          </a>
        </div>
      </div>
    );
  });
};

export default OutputMobilePoliticsContent;
