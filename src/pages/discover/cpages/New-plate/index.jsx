import React, { memo } from "react";
import { Newplatewrap } from "./style";
import Hotlist from "./c-com/hotlist";
import Toplist from "./c-com/toplist";
export default memo(function Newplate() {
  return (
    <Newplatewrap>
      <div className="wrap">
        <Hotlist></Hotlist>
        <Toplist></Toplist>
      </div>
    </Newplatewrap>
  );
});
