import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import Leftlist from "./c-com/leftlist";
import Header from "./c-com/header";
import Songlist from "./c-com/songlist";
import { getleftlistactionasync } from "./store/actioncreater";
import { Rankingwrap, Rightlist } from "./style";
export default memo(function Ranking() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getleftlistactionasync());
  }, [dispatch]);
  return (
    <Rankingwrap>
      <Leftlist></Leftlist>
      <Rightlist>
        <Header></Header>
        <Songlist></Songlist>
      </Rightlist>
    </Rankingwrap>
  );
});
