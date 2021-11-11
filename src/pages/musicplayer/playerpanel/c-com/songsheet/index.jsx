import React, { memo, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Songsheetitem from "./item";

import { getcontainsongactionasync } from "../../../store/actioncreater";
import "./style.css";
export default memo(function Songsheet() {
  const dispatch = useDispatch();
  const { containsongplaylists, currentsong } = useSelector(
    (state) => ({
      containsongplaylists: state
        .get("playerstore")
        .get("containsongplaylists"),
      currentsong: state.get("playerstore").get("currentsong"),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getcontainsongactionasync(currentsong.id));
  }, [dispatch, currentsong]);

  // const containsongplaylists1 = containsongplaylists || [];
  return (
    <div className="songsheet">
      <div className="header">包含这首歌的歌单</div>
      <hr />
      <div
        className="list"
        style={{
          height: 290,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {containsongplaylists.map((item, index) => {
          return (
            <Songsheetitem
              key={index}
              {...{
                name: item.name,
                picurl: item.coverImgUrl,
                nickname: item.creator.nickname,
              }}
            ></Songsheetitem>
          );
        })}
      </div>
    </div>
  );
});
