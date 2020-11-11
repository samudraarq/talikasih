import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

import styles from "./Admin.module.css";

import Container from "../UI/Container";
import AdminCategorySelect from "./AdminCategorySelect/AdminCategorySelect";
import AdminSearch from "./AdminSearch/AdminSearch";
import AdminTable from "./AdminTable/AdminTable";
import ChangePage from "../DiscoverSections/DiscoverCategory/ChangePage/ChangePage";

const Admin = ({ auth }) => {
  const [categoryId, setCategoryId] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [campaigns, setCampaigns] = useState([]);
  const [updateCounter, setUpdateCounter] = useState(1);

  useEffect(() => {
    if (categoryId !== "" && search === "" && sort === "") {
      const config = {
        method: "get",
        url: `https://warm-tundra-23736.herokuapp.com/discover/admin?page=${page}&CategoryId=${categoryId}`,
        headers: {
          token: auth.token,
        },
      };
      axios(config)
        .then((res) => {
          setMaxPage(res.data.total_pages);
          setTotalData(res.data.total_data);
          setCampaigns(res.data.document);
        })
        .catch((err) => console.log(err));
    } else if (categoryId !== "" && search !== "") {
      setSort("search");
      const config = {
        method: "get",
        url: `https://warm-tundra-23736.herokuapp.com/discover/admin?page=${page}&CategoryId=${categoryId}&filter=search&search=${search}`,
        headers: {
          token: auth.token,
        },
      };
      axios(config)
        .then((res) => {
          setMaxPage(res.data.total_pages);
          setTotalData(res.data.total_data);
          setCampaigns(res.data.document);
        })
        .catch((err) => console.log(err));
    } else if (categoryId !== "" && sort !== "" && sort !== "search") {
      const config = {
        method: "get",
        url: `https://warm-tundra-23736.herokuapp.com/discover/admin?page=${page}&CategoryId=${categoryId}&filter=${sort}`,
        headers: {
          token: auth.token,
        },
      };
      axios(config)
        .then((res) => {
          setMaxPage(res.data.total_pages);
          setTotalData(res.data.total_data);
          setCampaigns(res.data.document);
        })
        .catch((err) => console.log(err));
    } else {
      setSearch("");
      setSort("");
      axios
        .get(
          `https://warm-tundra-23736.herokuapp.com/discover/allcampaign/${page}`
        )
        .then((res) => {
          setMaxPage(res.data.total_pages);
          setTotalData(res.data.total_data);
          setCampaigns(res.data.document);
        })
        .catch((err) => console.log(err));
    }
  }, [categoryId, search, sort, page, auth, updateCounter]);

  return (
    <Container>
      <div className={styles.container}>
        <AdminCategorySelect
          setCategoryId={setCategoryId}
          categoryId={categoryId}
          setPage={setPage}
          setSearch={setSearch}
          setSort={setSort}
        />
        <div className={styles.campaignsContainer}>
          <div className={styles.header}>
            <h3>All Campaigns</h3>
            <AdminSearch
              setSearch={setSearch}
              search={search}
              setPage={setPage}
            />
          </div>
          <div className={styles.table}>
            <AdminTable
              setSort={setSort}
              campaigns={campaigns}
              setSearch={setSearch}
              setPage={setPage}
              setUpdateCounter={setUpdateCounter}
              updateCounter={updateCounter}
            />
          </div>
          <div className={styles.pagination}>
            <p>Showing {totalData} entries </p>
            <ChangePage
              maxPage={maxPage}
              pageChange={(e) => setPage(e.selected + 1)}
              page={page}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Admin);
