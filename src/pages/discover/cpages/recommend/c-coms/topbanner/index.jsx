import React, { memo, useEffect, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { gettopbanneractionasync } from "../../store/actioncreater";

import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./toppanner.css";
import topbannerimg from "@/assests/img/download.png";
export default memo(function Topbanner() {
  const [topbannerindex, setTopBannerindex] = useState(0);

  const { topbanner } = useSelector(
    (state) => ({
      topbanner: state.get("recommendstore").get("topbanner"),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettopbanneractionasync());
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  const beforecarouselchange = useCallback((from, to) => {
    setTopBannerindex(to);
  }, []);

  const carousel = useRef();
  const backgroundimage =
    topbanner[topbannerindex] &&
    topbanner[topbannerindex].imageUrl + "?imageView&blur=40x19";

  return (
    <div className="topbannerwrap">
      <img src={backgroundimage} alt="" className="topbannerbackground" />
      <Button
        className="topbannerleftbt"
        icon={<LeftOutlined></LeftOutlined>}
        onClick={(e) => {
          carousel.current.prev();
        }}
      ></Button>
      <div className="topleftheader">
        <Carousel
          effect="fade"
          autoplay
          ref={carousel}
          beforeChange={beforecarouselchange}
        >
          {topbanner.map((item) => {
            return (
              <div key={item.targetId} style={{ position: "absolute" }}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={item.imageUrl}
                  alt=""
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      <img src={topbannerimg} style={{ height: 344, width: 320 }} alt="" />
      <Button
        className="topbannerrightbt"
        icon={<RightOutlined></RightOutlined>}
        onClick={(e) => {
          carousel.current.next();
        }}
      ></Button>
    </div>
  );
});
