import React from "react";
import ReactDOM from "react-dom";

/**
 * Set up the external appliccation wrapper.
 * _args: takes a props argument.
 */

const App = props => {
  return <h1> This is an awesome React Application! </h1>;
};

ReactDOM.render(<App />, document.getElementById("app"));
