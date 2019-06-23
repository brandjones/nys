import React from "react";

export const Border = () => {
  return (
    <div className="border">
      <div className="double " />
    </div>
  );
};

export const GreyBorder = props => {
  return (
    <div className="container">
      <div className="grey-border" />
    </div>
  );
};

export const BorderBottom = () => {
  return <div className="border-bottom" />;
};
export const DoubleBorder = () => {
  return (
    <div className="border">
      <div className="double " />
      <div className="double " />
    </div>
  );
};
