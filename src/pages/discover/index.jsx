import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
// import { useHistory } from "react-router-dom";

import { dicoverMenu } from "../../common/href";

import "./discover.css";
export default memo(function Discover(props) {
  const { route } = props;
  const headerlink = (item, index) => {
    return (
      <NavLink to={item.link} key={index}>
        {item.title}
      </NavLink>
    );
  };

  return (
    <div className="discover">
      <div className="discoverheader">
        <div className="headerlink">{dicoverMenu.map(headerlink)}</div>
      </div>
      {renderRoutes(route.routes)}
    </div>
  );
});
