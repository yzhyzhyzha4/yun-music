import React, { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import {
  changecurrentindexaction,
  getcurrentsongaction,
  clearplaylistaction,
  deleteplaylistaction,
} from "../../../store/actioncreater";
import { formatMinuteSecond } from "../../../../../utils/format-utils";
import "./style.css";

export default memo(function Playlist(props) {
  const dispatch = useDispatch();
  const { playlist, currentindex } = useSelector(
    (state) => ({
      playlist: state.get("playerstore").get("playlist"),
      currentindex: state.get("playerstore").get("currentindex"),
    }),
    shallowEqual
  );
  const deletesong = (index) => {
    const newplaylist = [
      ...playlist.slice(0, index),
      ...playlist.slice(index + 1, playlist.length),
    ];
    dispatch(deleteplaylistaction(newplaylist));
  };
  return (
    <div className="playlistcom">
      <div className="header">
        <div className="headerleft">播放列表({playlist.length})</div>
        <div className="headerright">
          <span>收藏全部</span>
          <span className="iconfont icon-xiazai"></span>
          <span
            onClick={(e) => {
              dispatch(clearplaylistaction());
            }}
          >
            清除
          </span>
          <span className="iconfont icon-shanchu"></span>
        </div>
      </div>
      <div className="list">
        {playlist.map((item, index) => {
          return (
            <div
              className={
                index === currentindex ? "listitem active" : " listitem"
              }
              key={item.id}
              onClick={(e) => {
                dispatch(changecurrentindexaction(index));
                dispatch(getcurrentsongaction(playlist[index]));
              }}
            >
              <div className="left">{item.name}</div>
              <div className="right">
                <div className="fourspan">
                  <span className="iconfont icon-tianjia"></span>
                  <span className="iconfont icon-shoucang"></span>
                  <span className="iconfont icon-xiazai"></span>
                  <span className="iconfont icon-shanchu"></span>
                  <span>{item.ar[0].name}</span>
                </div>
                <div>{formatMinuteSecond(item.dt)}</div>
                <span
                  className="iconfont icon-shanchu"
                  onClick={(e) => {
                    deletesong(index);
                    e.stopPropagation();
                  }}
                ></span>
              </div>
            </div>
          );
        })}
        {!playlist.length && (
          <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
            你可以选择自己喜欢的歌曲
            <img src="https://www.robohash.org/a" alt="" />
          </div>
        )}
      </div>
    </div>
  );
});
