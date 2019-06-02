import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

const Sidebar = props => {
  console.log(props);
  return (
    <div>
      <div
        id="menu-wrapper"
        className="ui sidebar inverted vertical menu visible"
      >
        <Link to="/" id="close-icon-link" className="item">
          {" "}
          <i
            onClick={e => {
              console.dir(e.target);
              const closeIcon = e.target.className;
              // Make sure you prevent the default browser behavior
              e.preventDefault();

              // Grab the appropriate methods off the props object.
              // const { activate, deactivate } = props;

              // If the user clicks on the "X" icon and the sidebar is open,
              // deactivate or close the icon.
              if (closeIcon === "times icon") {
                return props.deactivate();
              } else {
                return props.activateUserMenu();
              }
            }}
            id="close-icon"
            className="times icon"
          />
        </Link>
        <Link to="/login" className="item">
          {props.login}
        </Link>

        <Link to="/sports" className="item">
          {props.sports} {props.contact}
        </Link>
        <Link to="/almanac" className="item">
          {props.almanac} {props.billing}
        </Link>
        <Link to="/science" className="item">
          {props.science} {props.subscribe}
        </Link>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  champion: "Champion"
};

export default connect()(Sidebar);
