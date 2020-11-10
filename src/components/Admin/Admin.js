import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

import styles from "./Admin.module.css";

import Container from "../UI/Container";
import AdminCategorySelect from "./AdminCategorySelect/AdminCategorySelect";
import AdminSearch from "./AdminSearch/AdminSearch";
import AdminTable from "./AdminTable/AdminTable";

const Admin = ({ auth }) => {
  const [categoryId, setCategoryId] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [campaigns, setCampaigns] = useState([]);

  // console.log("category", categoryId);
  // console.log("search", search);
  // console.log("sort", sort);

  useEffect(() => {
    if (categoryId === "" && search === "" && sort === "") {
      axios
        .get(
          `https://warm-tundra-23736.herokuapp.com/discover/allcampaign/${page}`
        )
        .then((res) => {
          console.log(res.data);
          setMaxPage(res.data.total_pages);
          setTotalData(res.data.total_data);
          setCampaigns(res.data.document);
        });
    } else if (categoryId !== "" && search === "" && sort === "") {
      const config = {
        method: "get",
        url: `https://warm-tundra-23736.herokuapp.com/discover/admin?page=${page}&CategoryId=${categoryId}`,
        headers: {
          token: auth.token,
        },
      };
      axios(config).then((res) => {
        console.log(res.data);
        setMaxPage(res.data.total_pages);
        setTotalData(res.data.total_data);
        setCampaigns(res.data.document);
      });
    } else if (categoryId !== "" && search !== "") {
      console.log("searching");
      setSort("search");
      const config = {
        method: "get",
        url: `https://warm-tundra-23736.herokuapp.com/discover/admin?page=${page}&CategoryId=${categoryId}&filter=search&search=${search}`,
        headers: {
          token: auth.token,
        },
      };
      axios(config).then((res) => {
        console.log(res.data);
        setMaxPage(res.data.total_pages);
        setTotalData(res.data.total_data);
        setCampaigns(res.data.document);
      });
    } else if (categoryId !== "" && sort !== "" && sort !== "search") {
      console.log("sorting");
      const config = {
        method: "get",
        url: `https://warm-tundra-23736.herokuapp.com/discover/admin?page=${page}&CategoryId=${categoryId}&filter=${sort}`,
        headers: {
          token: auth.token,
        },
      };
      axios(config).then((res) => {
        console.log(res.data);
        setMaxPage(res.data.total_pages);
        setTotalData(res.data.total_data);
        setCampaigns(res.data.document);
      });
    }
  }, [categoryId, search, sort, page, auth]);

  return (
    <Container>
      <div className={styles.container}>
        <AdminCategorySelect
          setCategoryId={setCategoryId}
          categoryId={categoryId}
        />
        <div className={styles.campaignsContainer}>
          <div className={styles.header}>
            <h3>All Campaigns</h3>
            <AdminSearch setSearch={setSearch} search={search} />
          </div>
          <div className={styles.table}>
            <AdminTable
              setSort={setSort}
              campaigns={campaigns}
              setSearch={setSearch}
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
