import React, { useEffect, useState } from "react";
import ChangePage from "./ChangePage/ChangePage";
import DiscoverCards from "./DiscoverCards/DiscoverCards";
import styles from "./DiscoverCategory.module.css";
import { connect } from "react-redux";
import { getCategoryCampaigns } from "../../../redux/actions/campaignActions";
import { useParams } from "react-router-dom";
import HeaderCategory from "./HeaderCategory/HeaderCategory";
import SortButton from "./SortButton/SortButton";

const DiscoverCategory = ({ categoryCampaign, getCategoryCampaigns }) => {
  const [page, setPage] = useState(1);

  const { categoryId } = useParams();

  useEffect(() => {
    getCategoryCampaigns(page, categoryId);
  }, [getCategoryCampaigns, categoryId, page]);

  const pageChange = (e) => {
    const selectedPage = e.selected + 1;
    console.log(selectedPage);
    setPage(selectedPage);
  };

  return (
    <div className={styles.container}>
      <HeaderCategory />
      <SortButton urlLink={`category/${categoryId}?`} />
      <DiscoverCards campaigns={categoryCampaign} />
      <ChangePage
        maxPage={categoryCampaign.totalPages}
        pageChange={pageChange}
      />
    </div>
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
  };
};

export default connect(mapStateToProps, masDispatchToProps)(DiscoverCategory);
