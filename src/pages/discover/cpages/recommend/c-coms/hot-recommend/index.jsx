import React, { memo, useEffect } from "react";

import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { HighlightOutlined } from "@ant-design/icons";

import { gethotrecommendactionasync } from "../../store/actioncreater";

import Songscover from "@/componments/songs-cover";
import "./style.css";

export default memo(function Hotrecommend() {
  const { hotcommend } = useSelector(
    (state) => ({
      hotcommend: state.get("recommendstore").get("hotcommend"),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gethotrecommendactionasync(10));
  }, [dispatch]);

  return (
    <div className="hotrecommend">
      <div className="header">
        <HighlightOutlined style={{ fontSize: 20 }} />
        <span
          style={{
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          热门推荐
        </span>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            marginTop: 15,
            marginLeft: 50,
          }}
        >
          <li>华语 |&nbsp;</li>
          <li>流行 |&nbsp;</li>
          <li>摇滚 |&nbsp;</li>
          <li>民谣 |&nbsp;</li>
          <li>电子 |&nbsp;</li>
        </ul>
        <span
          style={{
            marginTop: 25,
            marginLeft: 400,
            color: "red",
          }}
        >
          更多
        </span>
        <span
          className="iconfont icon-xiangyou"
          style={{
            position: "absolute",
            width: 25,
            height: 25,
            top: 20,
            right: 10,
            cursor: "pointer",
          }}
        ></span>
      </div>
      <hr
        style={{
          color: "red",
        }}
      />
      <Songscover songslist={hotcommend}></Songscover> <hr />
    </div>
  );
});
