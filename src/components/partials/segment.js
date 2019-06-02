import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Segment extends React.Component {
  render() {
    const { props } = this;
    return (
      <div className="Segment container">
        <div className="Segment__wrapper">
          <div className="Segment__wrapper__column-two">{props.time}</div>
          <div
            className={
              props.auth.email
                ? "segment-active-login "
                : "Segment__wrapper__column-three"
            }
          >
            {props.auth.email ? null : <Link to="/login"> Login </Link>}
            <Link to="/subscribe"> Subscribe Now </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    error: state.error,
    weather: state.weather,
    stock: state.stock
  };
};

export default connect(mapStateToProps)(Segment);
