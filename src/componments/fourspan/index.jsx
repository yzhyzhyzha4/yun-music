import React, { memo } from "react";

import { Fourspanwrap } from "./style";
export default memo(function Fourspan(props) {
  const { pinglun = 167366 } = props;
  return (
    <Fourspanwrap>
      <span>
        <span className="iconfont icon-24gf-playCircle"></span>
        播放
        <span className="iconfont icon-tianjia"></span>
      </span>
      <span>
        <span className="iconfont icon-shoucang"></span>收藏
      </span>
      <span>
        <span className="iconfont icon-fenxiang"></span>分享
      </span>
      <span>
        <span className="iconfont icon-xiazai"></span>下载
      </span>
      <span>
        <span className="iconfont icon-pinglun"></span>
        {pinglun}
      </span>
    </Fourspanwrap>
  );
});
