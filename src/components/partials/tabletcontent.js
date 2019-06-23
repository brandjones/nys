const regeneratorRuntime = require("regenerator-runtime");

import React from "react";
import { connect } from "react-redux";

import _ from "lodash";
import uuid from "uuid";

import { getOpinionData } from "../../actions/times";

const RenderedTabletContent = ({ url, section, title, multimedia }) => {
  const imageUrl = multimedia.map((image, index) => {
    if (image.format === "Normal") {
      return image.url;
    }
  });
  return (
    <div key={uuid()} id="TabletContent" className="container">
      <div>
        <a href={url}>
          {" "}
          <img src={imageUrl[2]} alt={section} />{" "}
        </a>
      </div>
      <div> {title} </div>
    </div>
  );
};

class TabletContent extends React.Component {
  async componentDidMount() {
    await this.props.dispatch(getOpinionData());
  }
  render() {
    return this.props.times.opinion.map((items, index) => {
      return <RenderedTabletContent key={index} {...items} />;
    });
  }
}

const mapStateToProps = state => {
  return {
    times: state.times
  };
};

export default connect(mapStateToProps)(TabletContent);
