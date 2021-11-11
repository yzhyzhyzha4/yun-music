import React, { memo, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getnewradioactionasync } from "../../store/actioncreater";

import { getSizeImage } from "@/utils/format-utils";
import HYThemeHeaderNormal from "@/componments/theme-header-normal";
import { Newradiowrap, Radiolist, Radiolistitem } from "./style";
export default memo(function Newradio() {
  const dispatch = useDispatch();
  const { currentid, radios } = useSelector(
    (store) => ({
      currentid: store.get("anchorstore").get("currentid"),
      radios: store.get("anchorstore").get("radios"),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getnewradioactionasync(currentid));
  }, [dispatch, currentid]);
  return (
    <Newradiowrap>
      <HYThemeHeaderNormal title={"优秀新电台"}></HYThemeHeaderNormal>
      <Radiolist>
        {radios.slice(0, 5).map((item, index) => {
          return (
            <Radiolistitem key={index}>
              <img src={getSizeImage(item.picUrl, 150)} alt="" />
              <div className="name">
                {item.name.length > 9
                  ? item.name.slice(0, 9) + "..."
                  : item.name}
              </div>
              <div className="desc">
                {item.desc.length > 12
                  ? item.desc.slice(0, 12) + "..."
                  : item.desc}
              </div>
            </Radiolistitem>
          );
        })}
      </Radiolist>
    </Newradiowrap>
  );
});
