import React, { memo } from "react";

import Topbanner from "./c-coms/topbanner";
import Hotrecommend from "./c-coms/hot-recommend";
import Newalbum from "./c-coms/newalbum";
import Ranking from "./c-coms/ranking";
import Login from "./c-coms/login";
import Settledsinger from "./c-coms/settledsinger";
import HotRadio from "./c-coms/hotradio";
import "./style.css";
function Recommend(props) {
  return (
    <div>
      <Topbanner></Topbanner>
      <div className="recommendcontent">
        <div className="recommendleft">
          <Hotrecommend></Hotrecommend>
          <Newalbum></Newalbum>
          <Ranking></Ranking>
        </div>
        <div className="recommendright">
          <Login></Login>
          <Settledsinger></Settledsinger>
          <HotRadio></HotRadio>
        </div>
      </div>
    </div>
  );
}

export default memo(Recommend);
