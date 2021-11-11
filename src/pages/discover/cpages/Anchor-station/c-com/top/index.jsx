import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  getcategorylistactionasync,
  changecurrentidaction,
} from "../../store/actioncreater";

import { Topwrap, Carouselwrap, Mimg } from "./style";
export default memo(function Top() {
  const dispatch = useDispatch();
  const { categories, currentid } = useSelector(
    (store) => ({
      categories: store.get("anchorstore").get("categories"),
      currentid: store.get("anchorstore").get("currentid"),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getcategorylistactionasync());
    // dispatch(changecurrentidaction(3));
  }, [dispatch]);

  return (
    <Topwrap>
      <LeftOutlined style={{ position: "absolute", left: 0 }}></LeftOutlined>
      <Carouselwrap>
        {categories.map((item, index) => {
          return (
            <div
              className="itemlist"
              key={index}
              onClick={(e) => dispatch(changecurrentidaction(item.id))}
            >
              <Mimg
                alt=""
                imgUrl={item.picWebUrl}
                isred={item.id === currentid}
              />
              <div className="name">{item.name}</div>
            </div>
          );
        })}
      </Carouselwrap>
      <RightOutlined style={{ position: "absolute", right: 0 }}></RightOutlined>
    </Topwrap>
  );
});
