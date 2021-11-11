import React, { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { changecurrentindexaction } from "../../store/actioncreater";
import { getSizeImage } from "@/utils/format-utils";
import { Leftlistwrap } from "./style";
export default memo(function Leftlist() {
  const dispatch = useDispatch();
  const { leftlist, currentindex } = useSelector(
    (state) => ({
      leftlist: state.get("rankingstore").get("leftlist"),
      currentindex: state.get("rankingstore").get("currentindex"),
    }),
    shallowEqual
  );

  const hanldeItemClick = (index) => {
    dispatch(changecurrentindexaction(index));
  };

  // const list = (leftlist && leftlist.list) || [];
  return (
    <Leftlistwrap color={"red"}>
      {leftlist.map((item, index) => {
        let header;
        if (index === 0 || index === 4) {
          header = (
            <div className="header">
              {index === 0 ? "云音乐特色榜" : "全球媒体榜"}
            </div>
          );
        }
        return (
          <div key={item.id}>
            {header}
            <div
              className={
                index === currentindex ? "listitem active" : "listitem"
              }
              onClick={(e) => hanldeItemClick(index)}
            >
              <img src={getSizeImage(item.coverImgUrl, 30)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        );
      })}
    </Leftlistwrap>
  );
});
