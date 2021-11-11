import React, { memo } from "react";
import { hotRadios } from "@/service/local-data";
import "./style.css";
export default memo(function Hotradio() {
  return (
    <div className="hotradio">
      <div className="header">热门主播</div>
      <hr style={{ width: "80%" }} />
      <div className="list">
        {hotRadios.map((item, index) => {
          return (
            <div className="listitem" key={index}>
              <img src={item.picUrl} alt="" />
              <div className="itemright">
                <span>{item.name}</span>
                <div>{item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});
