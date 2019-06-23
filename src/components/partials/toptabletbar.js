import React from "react";

import { Link } from "react-router-dom";

const TopTabletBar = props => {
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
        <div className="TopTabletBar-column-three">
          <div className="TopTabletBar-column-three-login-wrapper container">
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
};

export default TopTabletBar;
