import React from "react";

// import uuid from "uuid";
// import moment from "moment";
// import _ from "lodash";

import { connect } from "react-redux";

import World from "../render/world";
import National from "../render/national";
import Politics from "../render/politics";
import Business from "../render/business";
import Opinion from "../render/opinion";
import Technology from "../render/technology";
import Science from "../render/science";
import Health from "../render/health";
import Sports from "../render/sports";
import Books from "../render/books";
import Arts from "../render/arts";
import Home from "../render/home";

// Switch the content based on the route location

export const MainSection = props => {
  const { pathname } = props.history.location;

  switch (pathname) {
    case "/":
      return <Home />;
    case "/world":
      return <World />;
    case "/national":
      return <National />;
    case "/politics":
      return <Politics />;
    case "/business":
      return <Business />;
    case "/opinion":
      return <Opinion />;
    case "/technology":
      return <Technology />;
    case "/science":
      return <Science />;
    case "/health":
      return <Health />;
    case "/sports":
      return <Sports />;
    case "/books":
      return <Books />;
    case "/arts":
      return <Arts />;

    default:
      return null;
  }
};

class MainContent extends React.Component {
  render() {
    return (
      <div>
        <MainSection history={this.props.history} props={this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    times: state.times
  };
};

export default connect(mapStateToProps)(MainContent);
