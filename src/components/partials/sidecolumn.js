import React from "react";

import { BorderBottom } from "./Border";
import { connect } from "react-redux";

import uuid from "uuid";

const SideColumn = props => {
  if (!props.times.politics) {
    return <h1> Loading... </h1>;
  }

  return (
    <div key={uuid()} className="SideColumn side" id="SideColumn">
      <div className="SideColumn-wrapper">
        <a href={"/"}>
          {" "}
          <h1> The Most Amazing Title </h1> <h4> Youtube </h4>
        </a>
        <a href={"/"}>
          {" "}
          <h3> What a beauty</h3>{" "}
        </a>
        <p className="time"> Nice </p>
      </div>
      <BorderBottom />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    times: state.times
  };
};
export default connect(mapStateToProps)(SideColumn);
