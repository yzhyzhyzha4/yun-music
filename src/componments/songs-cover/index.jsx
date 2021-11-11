import React, { memo } from "react";
import { getCount, getSizeImage } from "../../utils/format-utils";
import "./style.css";

export default memo(function Songscover(props) {
  const { songslist } = props;
  return (
    <div className="songspubliccom">
      {songslist.map((item, index) => {
        return (
          <div className="itemwrap" key={index}>
            <div className="topimg" style={{ position: "relative" }}>
              <img
                src={getSizeImage(item.picUrl || item.coverImgUrl, 140)}
                alt=""
                style={{
                  display: "block",
                }}
              />
              {item.trackNumberUpdateTime && (
                <span
                  style={{
                    fontSize: 13,
                    position: "absolute",
                    bottom: 10,
                    left: 5,
                    color: "grey",
                  }}
                >
                  {getCount(item.trackNumberUpdateTime)}
                  百万播放
                  <span className="iconfont icon-24gf-playCircle"></span>
                </span>
              )}
            </div>
            <div
              className="bottomtitle"
              style={{ width: 140, fontSize: 15, fontWeight: 600 }}
            >
              {item.name}
            </div>
            <div>{item.artist && item.artist.name}</div>
          </div>
        );
      })}
    </div>
  );
});
