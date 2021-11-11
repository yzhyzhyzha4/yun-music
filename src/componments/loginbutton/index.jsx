import React, { memo } from "react";
import { Loginbuttonwrap } from "./style";
export default memo(function Loginbutton(props) {
  return <Loginbuttonwrap>{props.children}</Loginbuttonwrap>;
});
