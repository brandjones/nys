import React from "react";
import { connect } from "react-redux";

import Content from "../partials/content";
import MainContent from "../partials/maincontent";
import TabletContent from "../partials/tabletcontent";
import Segment from "../partials/segment";
import { DoubleBorder } from "../partials/border";

// import "../../styles/base.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }
  render() {
    const { props } = this;
    return (
      <div>
        <Segment
          time={props.time}
          styles={props.segment}
          match={props.match}
          history={props.history}
          location={props.location}
        />

        <div className="container">
          <Content history={props.history} />
          <div className="tablet">
            <TabletContent history={props.history} />
          </div>
          <DoubleBorder />
          <MainContent history={this.props.history} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    times: state.times
  };
};

export default connect(mapStateToProps)(Home);
