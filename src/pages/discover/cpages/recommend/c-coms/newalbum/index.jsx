import React, { memo, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "antd";
import {
  HighlightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { getnewablumactionasync } from "../../store/actioncreater";

import "./style.css";

export default memo(function Newalbum() {
  // 数据
  const { newalbums } = useSelector((state) => ({
    newalbums: state.get("recommendstore").get("newalbum"),
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getnewablumactionasync());
  }, [dispatch]);
  const carouselref = useRef();
  //方法
  const carouseltoleft = () => {
    carouselref.current.prev();
  };
  const carouseltoright = () => {
    carouselref.current.next();
  };
  return (
    <div className="newalbum">
      <div className="newablumheader">
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
          新碟上架
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
      <div className="newablumcontent">
        <LeftOutlined
          onClick={carouseltoleft}
          style={{ fontSize: 25, cursor: "pointer" }}
        />
        <div className="carousel">
          <Carousel ref={carouselref} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div className="carouselitem" key={item}>
                  {newalbums.slice(item * 5, (item + 1) * 5).map((item1) => {
                    return (
                      <div className="imagetitle" key={item1.picId}>
                        <img src={item1.blurPicUrl} alt="" />
                        <span> {item1.name}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <RightOutlined
          onClick={carouseltoright}
          style={{ fontSize: 25, cursor: "pointer" }}
        />
      </div>
    </div>
  );
});
