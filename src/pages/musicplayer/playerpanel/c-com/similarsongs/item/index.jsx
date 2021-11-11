import React, { memo } from "react";
import "./style.css";
export default memo(function Similaritem(props) {
  const { singername, songname } = props;
  // const name=item.artists[0].name
  return (
    <div className="similaritem" key={singername}>
      <div className="left">
        <div>{songname}</div>
        <div>{singername}</div>
      </div>
      <div className="right">
        <span className="iconfont icon-shoucang"></span>
        <span className="iconfont icon-xiazai"></span>
      </div>
    </div>
  );
});
