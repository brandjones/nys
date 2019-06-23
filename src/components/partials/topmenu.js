import FullScreenLinkMenu from "./fullscreenlinkmenu";
import Header from "./header";
import TopTabletBar from "./toptabletbar";
import Date from "./date";
import Segment from "./segment";
import React from "react";
import TabletView from "./tabletview";
import { GreyBorder } from "./border";

const TopMenu = ({ location }) => {
  const isMatchingRoute =
    location.pathname === "/login" || location.pathname === "/subscribe";

  if (isMatchingRoute) {
    return null;
  }

  return (
    <div>
      <Header />
      <TopTabletBar />
      <Date />
      <GreyBorder />
      <FullScreenLinkMenu />
      <Segment />
      <TabletView />
    </div>
  );
};

export default TopMenu;
