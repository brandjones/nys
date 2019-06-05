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
      return <Loader /> && <Home props={props} />;
    case "/world":
      return <Loader /> && <Home props={props} />;
    case "/national":
      return <Loader /> && <National props={props} />;
    case "/technology":
      return <Loader /> && <Technology props={props} />;
    case "/politics":
      return <Loader /> && <Politics props={props} />;
    case "/health":
      return <Loader /> && <Health props={props} />;
    case "/business":
      return <Loader /> && <Business props={props} />;
    case "/opinion":
      return <Loader /> && <Opinion props={props} />;
    case "/science":
      return <Loader /> && <Science props={props} />;
    case "/sports":
      return <Loader /> && <Sports props={props} />;
    case "/books":
      return <Loader /> && <Books props={props} />;
    default:
      return <Loader /> && <Home props={props} />;
  }
};

const Content = props => {
  return switchContentOnLocation(props);
};

const mapStateToProps = state => {
  return {
    times: state.times
  };
};

export default connect(mapStateToProps)(Content);
