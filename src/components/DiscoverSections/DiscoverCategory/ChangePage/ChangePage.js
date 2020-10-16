import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./ChangePage.module.css";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const ChangePage = () => {
  const [maxPage] = useState(10);

  const pageChange = (e) => {
    const selectedPage = e.selected + 1;
    console.log(selectedPage);
  };

  return (
    <div className={styles.pageContainer}>
      <ReactPaginate
        previousLabel={<ChevronLeftIcon />}
        nextLabel={<ChevronRightIcon />}
        pageCount={maxPage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={pageChange}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
    </div>
  );
};

export default ChangePage;
