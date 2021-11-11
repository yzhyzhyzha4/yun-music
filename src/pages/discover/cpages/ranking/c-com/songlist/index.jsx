import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { formatMinuteSecond } from "@/utils/format-utils.js";
import { Songlistwrap, Listitem } from "./style";
export default memo(function Songlist() {
  const { songlist } = useSelector(
    (state) => ({
      songlist: state.get("rankingstore").get("songlist"),
    }),
    shallowEqual
  );
  const list = songlist.tracks || [];
  return (
    <Songlistwrap>
      <div className="header">
        <div className="left">歌曲列表</div>
        <div className="right">
          <span>播放次数</span>
          <span className="count">{songlist.playCount}</span>
        </div>
      </div>
      <hr />
      <div className="list">
        <div className="listheader">
          <span></span>
          <span>标题</span>
          <span>时长</span>
          <span>歌手</span>
        </div>
        <div className="list">
          {list.map((item, index) => {
            const isgray = index % 2 === 0 ? false : true;
            const isbigline = index < 3 ? 66 : 33;
            return (
              <Listitem
                style={{ backgroundColor: isgray ? "f7f7f7" : "white" }}
                height={isbigline}
                key={index}
              >
                <span>
                  {index + 1}
                  <span>New</span>
                </span>
                <span>
                  {index < 3 && <img alt="" src={item.al.picUrl}></img>}
                  <span className="iconfont icon-24gf-playCircle"></span>
                  <span>{item.name}</span>
                </span>
                <span>{formatMinuteSecond(item.dt)}</span>
                <span>{item.ar[0].name}</span>
              </Listitem>
            );
          })}
        </div>
      </div>
    </Songlistwrap>
  );
});
