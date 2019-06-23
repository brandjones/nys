import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Form from "../partials/form";
import { runClassNames } from "./subscribe";

function getClassName(status) {
  if (status === "Your login attempt was unsuccessful. Try again.") {
    return "error message";
  } else if (status === "Your login attempt was successful.") {
    return "success message";
  }
}

class Login extends React.Component {
  render() {
    const { props } = this;
    const { status } = this.props.auth;
    const { emailError, passwordError } = this.props.error;
    return (
      <div className="Login">
        <div className="container">
          <h1> Log In </h1>
          <div className="account ">
            <h3> Don't have an account? </h3>
            <Link to="/subscribe"> Create one </Link>
          </div>

          <div to="/" className="button-container">
            <div>
              <Link to="/">Google</Link>
            </div>
          </div>

          <div className={getClassName(status)}>{status}</div>
          <div className={runClassNames(null, null, emailError, null)}>
            {emailError}
          </div>
          <div className={runClassNames(null, null, null, passwordError)}>
            {passwordError}
          </div>
          <Form props={props} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    error: state.error
  };
};

export default connect(mapStateToProps)(Login);
