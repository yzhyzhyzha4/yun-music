import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import Songcover from "@/componments/songs-cover";
import { getcategorylistactionasync } from "../../store/actioncreater";
export default memo(function List() {
  const dispatch = useDispatch();
  const { currentcategory, songslist } = useSelector(
    (state) => ({
      currentcategory: state.get("songstore").get("currentcategory"),
      songslist: state.get("songstore").get("songslist"),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getcategorylistactionasync(currentcategory));
  }, [currentcategory, dispatch]);
  return (
    <div>
      <Songcover songslist={songslist.playlists || []}></Songcover>
    </div>
  );
});
