import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./ChangePage.module.css";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const ChangePage = ({ maxPage, pageChange, page }) => {
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
        forcePage={page - 1}
      />
    </div>
  );
};

export default ChangePage;
