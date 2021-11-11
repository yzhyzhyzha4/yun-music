import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
export default memo(function Leftimg() {
  const { currentsong } = useSelector(
    (state) => ({
      currentsong: state.get("playerstore").get("currentsong"),
    }),
    shallowEqual
  );
  const picurl = currentsong.al && currentsong.al.picUrl;
  return (
    <div className="leftimg">
      <div className="img">
        <img src={picurl} alt="" />
        <span></span>
      </div>
      <Link to={"/discover/recommend"} style={{ fontSize: 20, marginLeft: 60 }}>
        生成外联播放器
      </Link>
    </div>
  );
});
