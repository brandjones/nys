import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <div className="foot">
      <footer id="footer-wrapper">
        <div>
          <i className="small middle aligned copyright outline icon" />
          2019 The New York Sentinel Company
          <span className="tablet-links">
            {" "}
            <Link to="/"> Help </Link> <Link to="/"> Feedback </Link>{" "}
          </span>
        </div>
        <div className="ui container">
          <Link to="/contactUs"> Contact Us </Link>
          <Link to="/help"> Help </Link>
          <Link to="privacy"> Privacy </Link>
          <Link to="/termsOfService"> Terms of Service </Link>
          <Link to="/advertise"> Advertise </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
