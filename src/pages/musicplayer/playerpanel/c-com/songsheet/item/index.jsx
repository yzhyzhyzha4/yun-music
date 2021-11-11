import React, { memo } from "react";
import "./style.css";
export default memo(function Songsheetitem(props) {
  const { name, picurl, nickname } = props;
  return (
    <div className="songsheetitem">
      <div className="img">
        <img src={picurl} alt="" />
      </div>
      <div className="right">
        <div>{name.length > 9 ? name.slice(0, 9) + "..." : name}</div>
        <div>
          <span>by</span> {nickname}
        </div>
      </div>
    </div>
  );
});
