import React from "react";

import { Link } from "react-router-dom";

const renderTopTabletBar = (location, props) => {
  switch (location) {
    case "/login":
      return null;
    case "/subscribe":
      return null;
    default:
      return (
        <div className="TopTabletBar">
          <div className="TopTabletBar-row">
            <div className="TopTabletBar-column-one">
              <div className="bar">
                <i
                  onClick={props.toggleHamburgerState}
                  className="topTabletBar bars icon"
                />
              </div>
            </div>
            <div className="TopTabletBar-column-two">
              <div className="TopTabletBar-column-two-language-wrapper">
                <Link to="/"> English </Link>
                <Link to="/"> Espanol </Link>
              </div>
            </div>
            <div className="TopTabletBar-column-three">
              <div className="TopTabletBar-column-three-login-wrapper">
                <Link className="button" to="/subscribe">
                  {" "}
                  Subscribe{" "}
                </Link>
                <Link className="button" to="/login">
                  {" "}
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

const TopTabletBar = props => {
  let location = props.location.pathname;
  return renderTopTabletBar(location, props);
};

export default TopTabletBar;
