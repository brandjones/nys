import React from "react";
import { connect } from "react-redux";

import Content from "../partials/content";
import MainContent from "../partials/maincontent";
import { DoubleBorder } from "../partials/border";

const Politics = props => {
  return (
    <div className="container">
      <h1 className="forum"> Politics </h1>
      <Content />
      <DoubleBorder />
      <MainContent history={props.history} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    times: state.times
  };
};

export default connect(mapStateToProps)(Politics);
