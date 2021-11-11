import React, { memo } from "react";

import { useEffect } from "react";

import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { RightOutlined } from "@ant-design/icons";

import { getsettledsingeractionasync } from "../../store/actioncreater";
import "./style.css";

export default memo(function Settledsigner() {
  const { singer = [] } = useSelector(
    (state) => ({
      singer: state.get("recommendstore").get("settledsinger"),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getsettledsingeractionasync());
  }, [dispatch]);

  return (
    <div className="Settledsigner">
      <div className="header">
        <span>入驻歌手</span> <span>查看全部</span> <RightOutlined />
      </div>
      <hr />
      <div className="list">
        {singer.slice(0, 6).map((item, index) => {
          return (
            <div className="listitem" key={index}>
              <img src={item.img1v1Url} alt="" />
              <div className="itemright">
                <div className="name"> {item.name}</div>
                <div>实力歌手</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer"></div>
    </div>
  );
});
