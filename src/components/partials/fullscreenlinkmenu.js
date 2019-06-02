import React from "react";
import { Link } from "react-router-dom";

const renderFullScreenLinkMenu = (location, props) => {
  const theseRoutes = "/" || "/login" || "/subscribe";
  if (location !== theseRoutes) {
    return null;
  } else {
    return (
      <div className="FullScreenLinkMenu container">
        <div className="FullScreenLinkMenu-link-wrapper">
          <Link to="/world"> World </Link>
          <Link to="/national"> U.S </Link>
          <Link to="/politics"> Politics </Link>
          <Link to="/business"> Business </Link>
          <Link to="/opinion"> Opinion </Link>
          <Link to="/technology"> Technology </Link>
          <Link to="/science"> Science </Link>
          <Link to="/health"> Health </Link>
          <Link to="/sports"> Sports </Link>
          <Link to="/arts"> Arts </Link>
        </div>
      </div>
    );
  }
};

const FullScreenLinkMenu = props => {
  let location = props.location.pathname;
  return renderFullScreenLinkMenu(location, props);
};

export default FullScreenLinkMenu;
