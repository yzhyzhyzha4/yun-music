import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { gettopplateactionasync } from "../../store/actioncreater";

import HYThemeHeaderNormal from "@/componments/theme-header-normal";
import HYAlbumCover from "@/componments/album-cover";
import HYPagination from "@/componments/pagination";
import { TopAlbumWrapper } from "./style";

export default memo(function Toplist() {
  const [currentPage, setCurrentPage] = useState(1);

  const { topplate, total } = useSelector(
    (state) => ({
      topplate: state.getIn(["newplatestore", "topplate"]),
      total: state.getIn(["newplatestore", "total"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gettopplateactionasync(1));
  }, [dispatch]);

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    dispatch(gettopplateactionasync(page));
  };

  return (
    <TopAlbumWrapper>
      <HYThemeHeaderNormal title="全部新碟" />
      <div className="album-list">
        {topplate.map((item, index) => {
          return (
            <HYAlbumCover
              size={"130px"}
              width={"153px"}
              bgp={"-845px"}
              key={item.id}
              info={item}
            />
          );
        })}
      </div>
      <HYPagination
        currentPage={currentPage}
        total={total}
        pageSize={30}
        onPageChange={onPageChange}
      />
    </TopAlbumWrapper>
  );
});
