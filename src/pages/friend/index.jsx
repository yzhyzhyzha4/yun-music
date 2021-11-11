import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import Loginbutton from "@/componments/loginbutton";
import { Friendwrap } from "./style";
import imgurl from "@/assests/img/friend_sprite.jpg";
export default memo(function Friend() {
  const history = useHistory();
  return (
    <Friendwrap>
      <img src={imgurl} alt="" />
      <div onClick={(e) => history.push("/discover")}>
        ><Loginbutton>点击登录</Loginbutton>
      </div>
    </Friendwrap>
  );
});
