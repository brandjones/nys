import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import uuid from "uuid";

const BulletListContent = ({ props }) => {
  // console.dir(props);
  if (!props.times.health) {
    return "loading...";
  }

  return props.times.health.map((item, index) => {
    if (index !== 2) {
      return (
        <div key={uuid()} className="ImagelessContent__content one">
          <a href={item.url}>
            <p>{item.title}</p>{" "}
          </a>
          <a href={item.url}>
            <p>{item.abstract}</p>{" "}
          </a>
          <div className="time">
            {" "}
            {moment()
              .subtract(item.published_date, "days")
              .calendar()}{" "}
          </div>
        </div>
      );
    }
    return "";
  });
};

const HeaderOnlyContent = ({ props }) => {
  return props.times.health.map((item, index) => {
    // Get the index of the third item in the arr.
    if (index === 2) {
      return (
        <div key={uuid()} className="ImagelessContent__content two">
          <a href={item.url}>
            <h3>{item.title}</h3>
          </a>
          <div className="time"> {moment().calendar()} </div>
        </div>
      );
    }
    return "";
  });
};

const ImagelessContent = props => {
  return (
    <div className="ImagelessContent">
      <BulletListContent props={props} />
      <HeaderOnlyContent props={props} />
    </div>
  );
};

// console.log(ImagelessContent);

const mapStateToProps = state => {
  return {
    times: state.times
  };
};

export default connect(mapStateToProps)(ImagelessContent);
