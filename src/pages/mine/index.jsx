import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import Loginbutton from "@/componments/loginbutton";
import { Minewrap } from "./style";
import imgurl from "@/assests/img/mine_sprite.png";
export default memo(function Mine() {
  const history = useHistory();
  return (
    <Minewrap>
      <img src={imgurl} alt="" />
      <div onClick={(e) => history.push("/discover")}>
        <Loginbutton>点击登录</Loginbutton>
      </div>
    </Minewrap>
  );
});
