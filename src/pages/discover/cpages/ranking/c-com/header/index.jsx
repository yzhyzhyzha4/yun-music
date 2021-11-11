import React, { memo, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getrankinglistactionasync } from "../../store/actioncreater";
import { Headerwrap } from "./style";
import Fourspan from "../../../../../../componments/fourspan";

import { formatMonthDay } from "@/utils/format-utils";
export default memo(function Header() {
  const dispatch = useDispatch();
  const { currentindex, leftlist, songlist } = useSelector(
    (state) => ({
      currentindex: state.get("rankingstore").get("currentindex"),
      leftlist: state.get("rankingstore").get("leftlist"),
      songlist: state.get("rankingstore").get("songlist"),
    }),
    shallowEqual
  );
  useEffect(() => {
    if (!leftlist[currentindex]) return;
    dispatch(getrankinglistactionasync(leftlist[currentindex].id));
  }, [dispatch, leftlist, currentindex]);

  // const imgurl = songlist.playlist && songlist.playlist.coverImgUrl;
  return (
    <Headerwrap>
      <img alt="" src={songlist.coverImgUrl}></img>
      <div className="right">
        <div className="top">
          <div className="b1">{songlist.name}</div>
          <div className="b2">
            最近更新：{formatMonthDay(songlist.updateTime)}
            <span className="er">每日更新（TOTD）</span>
          </div>
        </div>
        <div className="bottom">
          <Fourspan pinglun={songlist.commentCount}></Fourspan>
        </div>
      </div>
    </Headerwrap>
  );
});
