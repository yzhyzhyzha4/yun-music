import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { addsonglistactionasync } from "../../pages/musicplayer/store/actioncreater";
import "./style.css";

export default memo(function Rankinglist(props) {
  const { info } = props;
  const { tracks = [] } = info;
  const dispatch = useDispatch();
  const addsonglist = (item) => {
    dispatch(addsonglistactionasync(item.id));
  };
  return (
    <div className="rankinglist">
      <div className="header">
        <div className="headerimage">
          <img src={info.coverImgUrl} alt="" />
        </div>
        <div className="headertitle">
          <div className="title">{info.name}</div>
          <div className="icons">
            <span className="iconfont icon-24gf-playCircle"></span>
            <span className="iconfont icon-tianjia"></span>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, i) => {
          return (
            <div className="listitem" key={i}>
              <div className="itemleft">
                <span className="index">{i + 1}</span>
                <span>{item.name}</span>
              </div>
              <div className="itemright">
                <span
                  className="iconfont icon-24gf-playCircle"
                  onClick={(e) => addsonglist(item)}
                ></span>
                <span className="iconfont icon-tianjia"></span>
                <span className="iconfont icon-shoucang"></span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <span>查看全部</span>
        <span className="iconfont icon-xiangyou"></span>
      </div>
    </div>
  );
});
