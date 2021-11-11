import React, { memo, useEffect, useRef } from "react";
import { useSelector, shallowEqual } from "react-redux";
import "./style.css";
import { scrollTo } from "../../../../../utils/ui-helper";
export default memo(function Lyriclist() {
  const list = useRef();
  const { currentsong, lyric, currentlyricindex } = useSelector(
    (state) => ({
      currentsong: state.get("playerstore").get("currentsong"),
      lyric: state.get("playerstore").get("lyric"),
      currentlyricindex: state.get("playerstore").get("currentlyricindex"),
    }),
    shallowEqual
  );
  useEffect(() => {
    if (currentlyricindex > 5) {
      scrollTo(list.current, (currentlyricindex - 4) * 32, 300);
    }
  }, [currentlyricindex]);
  return (
    <div className="lyriclist">
      <div className="header">{currentsong.name}</div>
      <div className="list" ref={list}>
        {lyric.map((item, index) => {
          return (
            <div
              className={
                index === currentlyricindex ? "listitem active" : "listitem"
              }
              key={index}
            >
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
});
