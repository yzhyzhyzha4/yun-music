import React, { memo, useState } from "react";

import { Tag } from "antd";

import { useSelector, shallowEqual } from "react-redux";
import Fourspan from "../../../../../componments/fourspan";
import "./style.css";

export default memo(function Lyriclist() {
  const [howshow, setHowshow] = useState({ isopen: false, length: 13 });

  const { currentsong, lyric } = useSelector(
    (state) => ({
      currentsong: state.get("playerstore").get("currentsong"),
      lyric: state.get("playerstore").get("lyric"),
    }),
    shallowEqual
  );
  const songname = currentsong && currentsong.name;
  console.log(currentsong.ar && currentsong.ar[0].name);
  const singername = currentsong.ar && currentsong.ar[0].name;
  const zhuanji = currentsong.al && currentsong.al.name;

  return (
    <div className="lyriclist1">
      <div className="header">
        <div className="header1">
          <Tag color="magenta">单曲</Tag> <h3> {songname}</h3>
        </div>
        <div className="header2">
          <div>歌手：{singername}</div>
          <div>所属专辑：{zhuanji}</div>
        </div>
        <Fourspan></Fourspan>
      </div>
      <div className="list1">
        {lyric.slice(0, howshow.length).map((item, index) => {
          return (
            <div className="list1item" key={index}>
              {item.content}
            </div>
          );
        })}
      </div>
      <div className="bottom">
        {howshow.isopen ? (
          <span
            className="iconfont icon-xiangshang"
            onClick={(e) => {
              setHowshow({
                ...howshow,
                isopen: !howshow.isopen,
                length: 13,
              });
            }}
            style={{ fontSize: 20, color: "red", cursor: "pointer" }}
          >
            收起
          </span>
        ) : (
          <span
            className="iconfont icon-xiangxia"
            onClick={(e) => {
              setHowshow({
                ...howshow,
                isopen: !howshow.isopen,
                length: lyric.length,
              });
            }}
            style={{ fontSize: 20, color: "red", cursor: "pointer" }}
          >
            展开
          </span>
        )}
      </div>
    </div>
  );
});
