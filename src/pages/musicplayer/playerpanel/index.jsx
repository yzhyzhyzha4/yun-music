import React, { memo } from "react";
import Leftimg from "./c-com/leftimg";
import Lyriclist from "./c-com/lyriclist";
import Similarsongs from "./c-com/similarsongs";
import Songsheet from "./c-com/songsheet";

import "./style.css";
export default memo(function Playerpage() {
  return (
    <div className="playerpage">
      <div className="left">
        <Leftimg></Leftimg>
        <Lyriclist></Lyriclist>
      </div>
      <div className="right">
        <Songsheet></Songsheet>
        <Similarsongs></Similarsongs>
      </div>
    </div>
  );
});
