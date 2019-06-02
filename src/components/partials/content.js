import React from "react";
import { connect } from "react-redux";

import Home from "../mobile/home";
import Technology from "../mobile/technology";
import Politics from "../mobile/politics";
import Health from "../mobile/health";
import National from "../mobile/national";
import Business from "../mobile/business";
import Opinion from "../mobile/opinion";
import Science from "../mobile/science";
import Sports from "../mobile/sports";
import Books from "../mobile/books";

import Loader from "../partials/loader";

// Run a function that switches content based on the window location
const switchContentOnLocation = props => {
  const { pathname } = window.location;

  switch (pathname) {
    case "/":
      return <Home props={props} />;
    case "/world":
      return <Home props={props} />;
    case "/national":
      return <National props={props} />;
    case "/technology":
      return <Technology props={props} />;
    case "/politics":
      return <Politics props={props} />;
    case "/health":
      return <Health props={props} />;
    case "/business":
      return <Business props={props} />;
    case "/opinion":
      return <Opinion props={props} />;
    case "/science":
      return <Science props={props} />;
    case "/sports":
      return <Sports props={props} />;
    case "/books":
      return <Books props={props} />;
    default:
      return <Loader />;
  }
};

class Content extends React.Component {
  render() {
    return switchContentOnLocation(this.props);
  }
}

const mapStateToProps = state => {
  return {
    times: state.times
  };
};

export default connect(mapStateToProps)(Content);
