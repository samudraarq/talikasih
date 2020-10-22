import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import {
  getSearchCampaign,
  getSearchPopular,
  getSearchUrgent,
  getSearchLessdonate,
} from "../../../redux/actions/campaignActions";
import ChangePage from "../DiscoverCategory/ChangePage/ChangePage";
import DiscoverCards from "../DiscoverCategory/DiscoverCards/DiscoverCards";
import SortButton from "../DiscoverCategory/SortButton/SortButton";
import styles from "./DiscoverSearch.module.css";
import HeaderSearch from "./HeaderSearch/HeaderSearch";

const DiscoverSearch = ({
  searchCampaign,
  getSearchCampaign,
  getSearchPopular,
  getSearchUrgent,
  getSearchLessdonate,
}) => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  const location = useLocation();

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    setSearchText(parsed.search);
    if (parsed.sort === "popular") {
      getSearchPopular(page, parsed.search);
    } else if (parsed.sort === "mosturgent") {
      getSearchUrgent(page, parsed.search);
    } else if (parsed.sort === "lessdonation") {
      getSearchLessdonate(page, parsed.search);
    } else {
      getSearchCampaign(page, parsed.search);
    }
  }, [
    location,
    page,
    getSearchCampaign,
    getSearchPopular,
    getSearchUrgent,
    getSearchLessdonate,
  ]);

  const pageChange = (e) => {
    const selectedPage = e.selected + 1;
    console.log(selectedPage);
    setPage(selectedPage);
  };

  return (
    <div className={styles.container}>
      <HeaderSearch searchText={searchText} />
      <SortButton urlLink={`search?search=${searchText}&`} setPage={setPage} />
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
    getSearchPopular: (page, searchTerms) =>
      dispatch(getSearchPopular(page, searchTerms)),
    getSearchUrgent: (page, searchTerms) =>
      dispatch(getSearchUrgent(page, searchTerms)),
    getSearchLessdonate: (page, searchTerms) =>
      dispatch(getSearchLessdonate(page, searchTerms)),
  };
};

export default connect(mapStateToProps, masDispatchToProps)(DiscoverSearch);
