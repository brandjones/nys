import React from "react";

import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { toggleModal } from "../../actions/ui";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__hamburger">
          <i
            className="bars icon"
            onClick={() => {
              return this.props.dispatch(toggleModal(true));
            }}
          />
        </div>

        <Link to="/" className="Header__logo">
          New York Sentinel
        </Link>

        <div className="Header__user">
          <i
            className="user icon"
            onClick={() => {
              return this.props.dispatch(toggleModal(true));
            }}
          />{" "}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    error: state.error,
    ui: state.ui
  };
};

export default connect(mapStateToProps)(Header);
