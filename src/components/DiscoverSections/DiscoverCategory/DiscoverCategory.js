import React, { useEffect } from "react";
import ChangePage from "./ChangePage/ChangePage";
import DiscoverCards from "./DiscoverCards/DiscoverCards";
import styles from "./DiscoverCategory.module.css";
import { connect } from "react-redux";
import { getCategoryCampaigns } from "../../../redux/actions/campaignActions";
import { useParams } from "react-router-dom";
import HeaderCategory from "./HeaderCategory/HeaderCategory";
import SortButton from "./SortButton/SortButton";

const DiscoverCategory = ({ categoryCampaign, getCategoryCampaigns }) => {
  const { categoryId } = useParams();

  useEffect(() => {
    getCategoryCampaigns(1, categoryId);
  }, [getCategoryCampaigns, categoryId]);

  return (
    <div className={styles.container}>
      <HeaderCategory />
      <SortButton />
      <DiscoverCards campaigns={categoryCampaign} />
      <ChangePage />
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
