import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  getcategoryactionasync,
  changecurrentcategoryaction,
} from "../../store/actioncreater";
import { Headerwrap1 } from "./style";
export default memo(function Header() {
  const [fivespan] = useState([
    "icon-diqiu",
    "icon-xiazai47",
    "icon-gangqin",
    "icon-xiaolian",
    "icon-yinle",
  ]);
  const [selection, setSelection] = useState(false);
  const dispatch = useDispatch();

  const { currentcategory, category } = useSelector(
    (state) => ({
      currentcategory: state.get("songstore").get("currentcategory"),
      category: state.get("songstore").get("category"),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getcategoryactionasync());
  }, [dispatch]);
  return (
    <Headerwrap1>
      <div className="left" onClick={(e) => setSelection(!selection)}>
        <span>{currentcategory}</span>
        <span>
          选择分类
          <span className="iconfont icon-xiangxia2"></span>
        </span>
      </div>
      <div className="right">热门</div>
      <hr
        style={{
          position: "absolute",
          width: "100%",
          height: "2px",
          top: 45,
          color: "red",
          backgroundColor: "red",
        }}
      />
      {selection && (
        <div className="seletion">
          <div className="header">全部风格</div>
          <hr />
          {category.map((item, index) => {
            return (
              <div className="listitem" key={index}>
                <div className="left">
                  <span className={"iconfont " + fivespan[index]}></span>
                  <span>{item.name}</span>
                </div>
                <div className="right">
                  <div className="rightcontent">
                    {item.subs.map((item1, index) => {
                      return (
                        <div className="listitem1" key={index + "1"}>
                          <span
                            onClick={(e) => {
                              dispatch(changecurrentcategoryaction(item1.name));
                              setSelection(!selection);
                            }}
                          >
                            {item1.name}
                          </span>
                          <span>|</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          <br />
        </div>
      )}
    </Headerwrap1>
  );
});
