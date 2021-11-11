import React, { memo, useCallback, useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import HYPagination from "@/componments/pagination";
import { changecurrentpageactionasync } from "../../store/actioncreater";
export default memo(function Bottom() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { songslist } = useSelector(
    (state) => ({
      songslist: state.get("songstore").get("songslist"),
    }),
    shallowEqual
  );

  const pagechange = useCallback(
    (page, pagesize) => {
      setCurrentPage(page);
      dispatch(changecurrentpageactionasync(page));
    },
    [dispatch]
  );
  return (
    <div>
      {/* <Pagination
        defaultCurrent={1}
        total={songslist.total || 0}
        onChange={pagechange}
        pageSize={35}
        showSizeChanger={false}
      /> */}
      <HYPagination
        currentPage={currentPage}
        total={songslist.total || 0}
        pageSize={35}
        onPageChange={pagechange}
      />
    </div>
  );
});
