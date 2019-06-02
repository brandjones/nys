import React from "react";
import { connect } from "react-redux";

import Content from "../../../../ny-sentinel-custom/src/components/partials/content";
import MainContent from "../../../../ny-sentinel-custom/src/components/partials/maincontent";
import { DoubleBorder } from "../../../../ny-sentinel-custom/src/components/partials/border";

class World extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  render() {
    const { props } = this;
    return (
      <div className="container">
        <h1 className="forum"> World </h1>
        <Content />
        <DoubleBorder />
        <MainContent history={props.history} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    times: state.times
  };
};

export default connect(mapStateToProps)(World);
