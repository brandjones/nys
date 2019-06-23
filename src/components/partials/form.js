import React from "react";
import { Link } from "react-router-dom";

class Form extends React.Component {
  render() {
    const { props } = this.props;
    return (
      <form className="Form">
        <div className="wrapper">
          <div>
            <input
              className="input"
              name="email"
              type="text"
              placeholder="example@example.com"
              onChange={props.onChange}
              value={props.email}
            />{" "}
          </div>
          <div>
            <input
              className="input"
              name="password"
              type="password"
              onChange={props.onChange}
              placeholder="password"
              value={props.password}
            />{" "}
          </div>

          <Link to="#" className="button" onClick={props.onClick}>
            {props.match.url === "/subscribe" ? "Subscribe" : "Login"}
          </Link>
        </div>
      </form>
    );
  }
}

export default Form;
