import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { getSearchCampaign } from "../../../redux/actions/campaignActions";
import ChangePage from "../DiscoverCategory/ChangePage/ChangePage";
import DiscoverCards from "../DiscoverCategory/DiscoverCards/DiscoverCards";
import SortButton from "../DiscoverCategory/SortButton/SortButton";
import styles from "./DiscoverSearch.module.css";
import HeaderSearch from "./HeaderSearch/HeaderSearch";

const DiscoverSearch = ({ searchCampaign, getSearchCampaign }) => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  const location = useLocation();

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    setSearchText(parsed.search);
    getSearchCampaign(page, parsed.search);
  }, [location, getSearchCampaign, page]);

  const pageChange = (e) => {
    const selectedPage = e.selected + 1;
    console.log(selectedPage);
    setPage(selectedPage);
  };

  return (
    <div className={styles.container}>
      <HeaderSearch searchText={searchText} />
      <SortButton urlLink={`search?search=${searchText}&`} />
      <DiscoverCards campaigns={searchCampaign} />
      <ChangePage maxPage={searchCampaign.totalPages} pageChange={pageChange} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchCampaign: state.searchCampaign,
  };
};

const masDispatchToProps = (dispatch) => {
  return {
    getSearchCampaign: (page, searchTerms) =>
      dispatch(getSearchCampaign(page, searchTerms)),
  };
};

export default connect(mapStateToProps, masDispatchToProps)(DiscoverSearch);
