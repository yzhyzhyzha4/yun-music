import React, { memo } from "react";
import { Button } from "antd";
import "./style.css";
export default memo(function Login() {
  return (
    <div className="userlogin">
      <div className="title">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </div>
      <Button type="danger" size="middle" style={{ marginLeft: 100 }}>
        用户登录
      </Button>
    </div>
  );
});
