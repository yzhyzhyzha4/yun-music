import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { headerLinks } from "../../common/href";
import "./header.css";

export default memo(function Appheader() {
  const maplink = (item, index) => {
    if (index < 3) {
      return (
        <NavLink className="headerlink" to={item.link} key={item.title}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return (
        <a className="headerlink" href={item.link} key={item.title}>
          {item.title}
        </a>
      );
    }
  };
  return (
    <div className="Appheader">
      <div className="headercontent wrap-v1">
        <div className="headercontentleft">
          <a href="/" className="headerlogo sprite_01">
            {" "}
          </a>
          {headerLinks.map(maplink)}
        </div>
        <div className="headercontentright">
          <Input
            className="headerrightinout"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          ></Input>
          <button className="createcenter">创作者中心</button>
          <button className="loginbutton">登录</button>
        </div>
      </div>
      <div className="headerline"></div>
    </div>
  );
});
