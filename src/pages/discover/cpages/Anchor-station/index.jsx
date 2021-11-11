import React, { memo } from "react";
import Top from "./c-com/top";
import Newradio from "./c-com/newradio";
import Radioranking from "./c-com/radioranking";

import { Anchorwrap } from "./style";
export default memo(function Recommend() {
  return (
    <Anchorwrap>
      <Top></Top>
      <Newradio></Newradio>
      <Radioranking></Radioranking>
    </Anchorwrap>
  );
});
