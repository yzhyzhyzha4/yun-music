import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { HighlightOutlined } from "@ant-design/icons";
import Rankinglist from "@/componments/rankinglist";
import "./style.css";
import { getrankingactionasync } from "../../store/actioncreater";

export default memo(function Ranking() {
  const storestate = useSelector(
    (state) => ({
      topranking: state.get("recommendstore").get("topranking"),
      newranking: state.get("recommendstore").get("newranking"),
      orginranking: state.get("recommendstore").get("orginranking"),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getrankingactionasync(0));
    dispatch(getrankingactionasync(1));
    dispatch(getrankingactionasync(2));
  }, [dispatch]);
  return (
    <div className="ranking">
      <div className="header">
        <HighlightOutlined
          style={{
            fontSize: 20,
          }}
        />
        <span
          style={{
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          榜单
        </span>
        <span
          style={{
            marginTop: 25,
            marginLeft: 650,
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
      <div className="rankingcontent">
        <Rankinglist info={storestate.topranking}></Rankinglist>
        <Rankinglist info={storestate.newranking}></Rankinglist>
        <Rankinglist info={storestate.orginranking}></Rankinglist>
      </div>
    </div>
  );
});
