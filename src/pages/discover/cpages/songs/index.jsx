import React, { memo } from "react";
import Header from "./c-com/header";
import Bottom from "./c-com/bottom";
import List from "./c-com/list";
import { Songswrap } from "./style";
export default memo(function Songs() {
  return (
    <Songswrap>
      <Header></Header>
      <List></List>
      <Bottom></Bottom>
    </Songswrap>
  );
});
