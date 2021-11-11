import React, { memo, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import HYThemeHeaderNormal from "@/componments/theme-header-normal";
import HYAlbumCover from "@/componments/album-cover";
import { getnewplateactionasync } from "../../store/actioncreater";

import { Hotlistwrap } from "./style";
export default memo(function Hotlist() {
  const dispatch = useDispatch();
  const { hotplate } = useSelector(
    (store) => ({
      hotplate: store.get("newplatestore").get("hotplate"),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getnewplateactionasync());
  }, [dispatch]);
  return (
    <Hotlistwrap>
      <HYThemeHeaderNormal title={"热门新碟"}></HYThemeHeaderNormal>
      <div className="hotlistitem">
        {hotplate.map((item, index) => {
          return (
            <HYAlbumCover
              size={"130px"}
              width={"153px"}
              bgp={"-845px"}
              key={item.id}
              info={item}
            />
          );
        })}
      </div>
    </Hotlistwrap>
  );
});
