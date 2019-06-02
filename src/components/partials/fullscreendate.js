import React from "react";

const renderFullScreenDate = (location, props) => {
  const theseRoutes = "/" || "/login" || "/subscribe";

  if (location !== theseRoutes) {
    return null;
  } else {
    return (
      <div className="FullScreenDate container">
        <div>{props.time}</div>
        <div className="logo"> New York Sentinel </div>
        <div>Today's News</div>
      </div>
    );
  }
};

const FullScreenDate = props => {
  let location = props.location.pathname;
  return renderFullScreenDate(location, props);
};

export default FullScreenDate;
