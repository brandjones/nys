import React from "react";

export const Border = () => {
  return (
    <div className="border">
      <div className="double " />
    </div>
  );
};



const renderGreyBorder = (location, props) => { 


  switch(location) { 
    case '/login': 
      return null; 
    case '/subscribe': 
      return null; 
    default: 
      return (
        <div className="container">
        <div className="grey-border" />
      </div>
      )
  }


}; 

export const GreyBorder = (props) => {
  
  let location = props.location.pathname; 
  return renderGreyBorder(location, props); 
};

export const BorderRight = () => {
  return <div className="border-right" />;
};

export const BorderLeft = () => {
  return <div className="border-left " />;
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
