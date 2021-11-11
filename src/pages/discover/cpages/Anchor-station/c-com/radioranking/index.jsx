import React, { memo, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Pagination } from "antd";
import { getradiorankingactionasync } from "../../store/actioncreater";

import { getSizeImage } from "@/utils/format-utils";
import HYThemeHeaderNormal from "@/componments/theme-header-normal";
import {
  Radiorankingwrap,
  Rankinglist,
  Listwrap,
  Paginationwrap,
} from "./style";

export default memo(function Radioranking() {
  const dispatch = useDispatch();
  const { recommends, currentid } = useSelector(
    (store) => ({
      recommends: store.get("anchorstore").get("recommends"),
      currentid: store.get("anchorstore").get("currentid"),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getradiorankingactionasync(currentid, 30));
  }, [dispatch, currentid]);

  const pagechange = (page) => {
    dispatch(getradiorankingactionasync(currentid, page * 30));
    console.log(page);
  };
  return (
    <Radiorankingwrap>
      <HYThemeHeaderNormal title={"电台排行榜"}></HYThemeHeaderNormal>
      <Listwrap>
        {recommends.map((item, index) => {
          return (
            <Rankinglist key={index}>
              <img src={getSizeImage(item.picUrl, 120)} alt="" />
              <div className="right">
                <div className="top">
                  {item.name.length > 6
                    ? item.name.slice(0, 7) + "..."
                    : item.name}
                </div>
                <div className="bottom">
                  <div className="top">
                    <span className="iconfont icon-shoucang"></span>
                    {item.dj.nickname}
                  </div>
                  <div className="bottom">
                    <span className="phase">共{item.programCount}期</span>
                    <span className="subscribe">订阅{item.subCount}次</span>
                  </div>
                </div>
              </div>
            </Rankinglist>
          );
        })}
      </Listwrap>
      <Paginationwrap>
        <Pagination
          Pagesize={30}
          total={1000}
          defaultCurrent={1}
          onChange={pagechange}
          showSizeChanger={false}
        />
      </Paginationwrap>
    </Radiorankingwrap>
  );
});
