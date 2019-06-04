import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import google from "../../../public/images/search.png";
import Form from "../partials/form";

export const runClassNames = (
  successmessage,
  errormessage,
  emailError,
  passwordError
) => {
  if (successmessage) {
    return "success message";
  } else if (errormessage) {
    return "error message";
  } else if (emailError || passwordError) {
    return "error message";
  }
};

class Subscribe extends React.Component {
  render() {
    const props = this.props;
    const { errormessage, successmessage } = this.props.auth;
    const { emailError, passwordError } = this.props.error;
    return (
      <div className="Login">
        <div className="container">
          <h1> Subscribe </h1>
          <div className="account ">
            <h3> Have an account already? </h3> <Link to="/login"> Login </Link>
          </div>
          <div className="button-container">
            <div>
              <Link to="/">Google</Link>
            </div>
            <div>
              <Link to="/">
                {" "}
                <img alt="buffalo" src={google} />{" "}
              </Link>
            </div>
          </div>
          <div className={runClassNames(successmessage, errormessage)}>
            {successmessage} {errormessage}
          </div>
          <div className={runClassNames(null, null, emailError, null)}>
            {" "}
            {emailError}
          </div>
          <div className={runClassNames(null, null, null, passwordError)}>
            {passwordError}
          </div>

          <Form
            props={props}
            onSubscribeFormChange={props.onSubscribeFormChange}
            onSubscribeButtonClick={props.onSubscribeButtonClick}
          />
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

export default connect(mapStateToProps)(Subscribe);
