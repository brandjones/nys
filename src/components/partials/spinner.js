import React from "react";

const Spinner = ({ props }) => {
  console.log(props);
  return (
    <div className="ui active inverted dimmer">
      <div className="ui large text loader"> {props.home} </div>
    </div>
  );
};

export default Spinner;
