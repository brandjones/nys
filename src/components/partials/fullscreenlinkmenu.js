import React from "react";
import { Link, NavLink } from "react-router-dom";
import { updateLocation } from "../../actions/ui";
import { connect } from "react-redux";

const menuHoverStyles = {
  background: "#444",
  borderRadius: "2px",
  color: "#fff",
  opacity: "1",
  transition: ".5s"
};

const FullScreenLinkMenu = props => {
  return (
    <div className="FullScreenLinkMenu container">
      <div className="FullScreenLinkMenu-link-wrapper">
        <NavLink to="/world" activeStyle={menuHoverStyles}>
          {" "}
          World{" "}
        </NavLink>
        <NavLink activeStyle={menuHoverStyles} to="/arts">
          {" "}
          Arts{" "}
        </NavLink>
        <NavLink activeStyle={menuHoverStyles} to="/national">
          {" "}
          U.S{" "}
        </NavLink>
        <NavLink activeStyle={menuHoverStyles} to="/politics">
          {" "}
          Politics{" "}
        </NavLink>
        <NavLink activeStyle={menuHoverStyles} to="/technology">
          {" "}
          Technology{" "}
        </NavLink>
        <NavLink activeStyle={menuHoverStyles} to="/health">
          {" "}
          Health{" "}
        </NavLink>
        <NavLink activeStyle={menuHoverStyles} to="/business">
          {" "}
          Business{" "}
        </NavLink>
        <NavLink activeStyle={menuHoverStyles} to="/books">
          Books
        </NavLink>
        <NavLink activeStyle={menuHoverStyles} to="/science">
          {" "}
          Science{" "}
        </NavLink>
        <NavLink activeStyle={menuHoverStyles} to="/sports">
          {" "}
          Sports{" "}
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ui: state.ui
  };
};

export default connect(mapStateToProps)(FullScreenLinkMenu);
