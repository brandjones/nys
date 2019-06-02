import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export const HamburgerMenu = props => {
  return (
    <div className="MobileModal">
      <div className="MobileModal-one">
        <Link to="/">
          {" "}
          <h1> The New York Sentinel </h1>{" "}
        </Link>
        <div>
          <i className="close icon" onClick={props.toggleHamburgerState} />{" "}
        </div>
      </div>
      <div className="MobileModal-two">
        <div>
          <Link to="/">
            {" "}
            <h3> Home </h3>{" "}
          </Link>
          <Link to="/world">
            {" "}
            <h3> World </h3>{" "}
          </Link>
          <Link to="/national">
            {" "}
            <h3> U.S. </h3>
          </Link>
          <Link to="/politics">
            {" "}
            <h3> Politics </h3>
          </Link>
          <Link to="/business">
            {" "}
            <h3> Business </h3>
          </Link>
        </div>
        <div>
          <Link to="/technology">
            {" "}
            <h3> Technology </h3>{" "}
          </Link>
          <Link to="/science">
            {" "}
            <h3> Science </h3>{" "}
          </Link>
          <Link to="/sports">
            {" "}
            <h3> Sports </h3>
          </Link>
          <Link to="/opinion">
            {" "}
            <h3> Opinion </h3>
          </Link>
          <Link to="/books">
            {" "}
            <h3> Books </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const UserMenu = props => {
  return (
    <div className="UserMenu">
      <div className="UserMenu-one">
        <Link to="/">
          {" "}
          <h1> The New York Sentinel </h1>{" "}
        </Link>
        <div>
          <i className="close icon" onClick={props.toggleUserMenuState} />{" "}
        </div>
      </div>
      <div className="bottom-content-wrapper">
        <div className="UserMenu-two">
          <Link to="/login">
            {" "}
            <h2> {props.auth.email ? props.auth.email : "Login"}</h2>{" "}
          </Link>
          <Link to="/subscribe">
            {" "}
            <h2> Subscribe </h2>{" "}
          </Link>
        </div>
        <div className="UserMenu-three">
          <div>
            <h3> English Edition </h3>
          </div>
        </div>

        <div className="UserMenu-four">
          <Link to="/">
            {" "}
            <h2> Help </h2>{" "}
          </Link>
          <Link to="/">
            {" "}
            <h2> Contact Us </h2>{" "}
          </Link>
        </div>

        <div className="UserMenu-five">
          <div>
            {" "}
            <h3> Coming Soon: Logged in / registered users can </h3>{" "}
          </div>
          <div className="content">
            <div className="bookmark">
              <div>
                <i className="bookmark outline icon" />
              </div>
              <div>
                <p> Save articles and visit later on any device </p>
              </div>
            </div>

            <div className="comment">
              <div>
                <i className="comment outline icon" />
              </div>
              <div>
                <p>
                  {" "}
                  Comment on articles and spark conversations with other readers
                </p>
              </div>
            </div>

            <div className="bell">
              <div>
                <i className="bell outline icon" />
              </div>
              <div>
                <p>
                  {" "}
                  Enable Breaking News Alerts to follow developing stories{" "}
                </p>
              </div>
            </div>

            {props.auth.email && (
              <Link
                className="button blue"
                name="logoff"
                onClick={props.onLogoffClick}
                to="/"
              >
                {" "}
                Logout{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = props => {
  const userMenu = props.state.userMenuState;
  const hamburgerMenu = props.state.hamburgerMenuState;
  return (
    <div className="animated modal">
      {hamburgerMenu ? (
        <HamburgerMenu
          dispatch={props.dispatch}
          auth={props.auth}
          error={props.error}
          toggleHamburgerState={props.toggleHamburgerState}
        />
      ) : null}

      {userMenu ? (
        <UserMenu
          dispatch={props.dispatch}
          auth={props.auth}
          error={props.error}
          onLogoffClick={props.onClick}
          toggleUserMenuState={props.toggleUserMenuState}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    error: state.error
  };
};

export default connect(mapStateToProps)(Modal);
