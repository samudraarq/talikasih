import React, { useEffect, useState } from "react";
import ChangePage from "./ChangePage/ChangePage";
import queryString from "query-string";
import DiscoverCards from "./DiscoverCards/DiscoverCards";
import styles from "./DiscoverCategory.module.css";
import { connect } from "react-redux";
import {
  getCategoryCampaigns,
  getCategoryPopular,
  getCategoryUrgent,
  getCategoryLessdonate,
} from "../../../redux/actions/campaignActions";
import { useLocation, useParams } from "react-router-dom";
import HeaderCategory from "./HeaderCategory/HeaderCategory";
import SortButton from "./SortButton/SortButton";
import Container from "../../UI/Container";

const DiscoverCategory = ({
  categoryCampaign,
  getCategoryCampaigns,
  getCategoryPopular,
  getCategoryUrgent,
  getCategoryLessdonate,
}) => {
  const [page, setPage] = useState(1);

  const { categoryId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    if (parsed.sort === "popular") {
      getCategoryPopular(page, categoryId);
    } else if (parsed.sort === "mosturgent") {
      getCategoryUrgent(page, categoryId);
    } else if (parsed.sort === "lessdonation") {
      getCategoryLessdonate(page, categoryId);
    } else {
      getCategoryCampaigns(page, categoryId);
    }
  }, [
    getCategoryCampaigns,
    getCategoryPopular,
    getCategoryUrgent,
    getCategoryLessdonate,
    location.search,
    categoryId,
    page,
  ]);

  const pageChange = (e) => {
    const selectedPage = e.selected + 1;
    // console.log(selectedPage);
    setPage(selectedPage);
  };

  return (
    <Container>
      <div className={styles.container}>
        <HeaderCategory />
        {categoryCampaign.isError ? (
          <p className={styles.errorMsg}>{categoryCampaign.errorMsg}</p>
        ) : (
          <>
            <SortButton urlLink={`category/${categoryId}?`} setPage={setPage} />
            <DiscoverCards campaigns={categoryCampaign} />
            <ChangePage
              maxPage={categoryCampaign.totalPages}
              pageChange={pageChange}
              page={page}
            />
          </>
        )}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    categoryCampaign: state.categoryCampaign,
  };
};

const masDispatchToProps = (dispatch) => {
  return {
    getCategoryCampaigns: (page, categoryId) =>
      dispatch(getCategoryCampaigns(page, categoryId)),
    getCategoryPopular: (page, categoryId) =>
      dispatch(getCategoryPopular(page, categoryId)),
    getCategoryUrgent: (page, categoryId) =>
      dispatch(getCategoryUrgent(page, categoryId)),
    getCategoryLessdonate: (page, categoryId) =>
      dispatch(getCategoryLessdonate(page, categoryId)),
  };
};

export default connect(mapStateToProps, masDispatchToProps)(DiscoverCategory);
