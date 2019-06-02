import React from "react";
import uuid from "uuid";
import _ from "lodash";
import moment from "moment";
import { connect } from "react-redux";

const Health = props => {
  return props.times.health.map((item, index) => {
    // Check each item in arr and return a category to display for image subject on unplashed: returns a string
    const category = _.head(item.des_facet);

    // 1. Loop through the multimedia arr
    // 2. Sort through the arr and return the index with the largest width
    const returnedIndex = _.findIndex(item.multimedia, prop => {
      return prop.width >= 1000;
    });

    // 1. Grab the health arr
    // 2. Grab the multimedia prop
    // 3. Grab the url prop
    // 4. Use the returnedIndex const to select correct image: returns string
    const returnedImage =
      returnedIndex === 4
        ? item.multimedia[returnedIndex].url
        : `https://source.unsplash.com/weekly?${category}`;
    return (
      <div key={uuid()} className="Headline">
        <div className="MainContent">
          <div className="MainContent-text-wrapper">
            <h4 className="section"> {item.section}</h4>
            <h1 className="title">
              {" "}
              <a href={item.url}>{item.title}</a>{" "}
            </h1>
            <a href={item.url} className="bullet">
              {item.abstract}
            </a>
            <div className="time">
              {" "}
              {moment()
                .subtract(item.published_date, "days")
                .calendar()}{" "}
            </div>
          </div>
          <div className="MainContent-image-wrapper ">
            <a href={item.url}>
              <img
                alt={item.des_facet[1]}
                className="image"
                src={returnedImage}
              />
            </a>
            <p>{null && item.multimedia[index].caption}</p>
          </div>
        </div>
      </div>
    );
  });
};

const mapStateToProps = state => {
  return {
    times: state.times
  };
};

export default connect(mapStateToProps)(Health);
