import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getsimisongactionasync } from "../../../store/actioncreater";
import Similaritem from "./item";

export default memo(function Similarsongs() {
  const dispatch = useDispatch();
  const { simisong, currentsong } = useSelector(
    (state) => ({
      simisong: state.get("playerstore").get("simisong"),
      currentsong: state.get("playerstore").get("currentsong"),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getsimisongactionasync(currentsong.id));
  }, [dispatch, currentsong]);
  return (
    <div className="similarsongs" style={{ marginTop: 20 }}>
      <div className="header">相似歌曲</div>
      <hr />
      {simisong.map((item, index) => {
        return (
          <Similaritem
            key={index}
            {...{ songname: item.name, singername: item.artists[0].name }}
          ></Similaritem>
        );
      })}
    </div>
  );
});
