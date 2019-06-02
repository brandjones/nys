import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

const renderIcons = (location, props) => {
  switch (location) {
    case "/login":
      return (
        <div className="Header">
          <Link to="/" className="Header__logo">
            New York Sentinel
          </Link>
        </div>
      );
    case "/subscribe":
      return (
        <div className="Header">
          <Link to="/" className="Header__logo">
            New York Sentinel
          </Link>
        </div>
      );
    default:
      return (
        <div className="Header">
          <div className="Header__hamburger">
            <i className="bars icon" onClick={props.toggleHamburgerState} />
          </div>
          <Link to="#" className="Header__logo">
            New York Sentinel
          </Link>
          <div className="Header__user">
            <i className="user icon" onClick={props.toggleHamburgerState} />
          </div>
        </div>
      );
  }
};

class Header extends React.Component {
  render() {
    const { props } = this;
    const location = props.location.pathname;

    return renderIcons(location, props);
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    error: state.error
  };
};

export default connect(mapStateToProps)(Header);
