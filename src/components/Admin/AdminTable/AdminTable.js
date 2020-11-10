import React from "react";

import styles from "./AdminTable.module.css";

import sortBtn from "../../../assets/admin/sort.svg";
import openIcon from "../../../assets/admin/open.svg";
import pendingIcon from "../../../assets/admin/pending.svg";
import finishedIcon from "../../../assets/admin/finished.svg";
import rejectedIcon from "../../../assets/admin/rejected.svg";
import optionIcon from "../../../assets/admin/options.svg";
import downIcon from "../../../assets/admin/downarrow.svg";

const AdminTable = ({ setSort, campaigns, setSearch }) => {
  let renderTableData;

  if (campaigns && campaigns.length > 0) {
    renderTableData = campaigns.map((campaign) => (
      <div className={styles.tdRow} key={campaign.id}>
        <div className={styles.tdContent}>
          <p className={styles.title}>{campaign.title}</p>
          <p className={styles.subtitle}>by Aksi Cepat Tanggap</p>
        </div>
        <div className={styles.tdContent}>
          {campaign.StatId === 1 ? (
            <div className={`${styles.status} ${styles.pending}`}>
              <img src={pendingIcon} alt="pending" />
              <p className={styles.statusName}>Pending</p>
            </div>
          ) : campaign.StatId === 2 ? (
            <div className={`${styles.status} ${styles.open}`}>
              <img src={openIcon} alt="open" />
              <p className={styles.statusName}>Open</p>
            </div>
          ) : campaign.StatId === 3 ? (
            <div className={`${styles.status} ${styles.finished}`}>
              <img src={finishedIcon} alt="finished" />
              <p className={styles.statusName}>Finished</p>
            </div>
          ) : campaign.StatId === 4 ? (
            <div className={`${styles.status} ${styles.rejected}`}>
              <img src={rejectedIcon} alt="rejected" />
              <p className={styles.statusName}>Rejected</p>
            </div>
          ) : (
            <div className={`${styles.status} ${styles.deleted}`}>
              <img src={rejectedIcon} alt="deleted" />
              <p className={styles.statusName}>Deleted</p>
            </div>
          )}
        </div>
        <div className={styles.tdContent}>
          <p className={styles.amount}>
            IDR {new Intl.NumberFormat("id-ID").format(campaign.goal)}
          </p>
        </div>
        <div className={styles.tdContent}>
          <p className={styles.amount}>
            IDR {new Intl.NumberFormat("id-ID").format(campaign.raised)}
          </p>
          <p className={styles.updateName}>Withdrawal</p>
          <p className={styles.amount}>{campaign.donationCount}</p>
          <p className={styles.updateName}>Recipient Updates</p>
        </div>
        <div className={styles.tdContent}>
          <div className={styles.options}>
            <img src={optionIcon} alt="option" />
            <img src={downIcon} alt="down" />
          </div>
        </div>
      </div>
    ));
  }

  return (
    <>
      <div className={styles.thContainer}>
        <div className={styles.thContent}>
          <p>Title</p>
          <img
            src={sortBtn}
            alt="sort"
            onClick={() => {
              setSort("title");
              setSearch("");
            }}
          />
        </div>
        <div className={styles.thContent}>
          <p>Status</p>
          <img
            src={sortBtn}
            alt="sort"
            onClick={() => {
              setSort("status");
              setSearch("");
            }}
          />
        </div>
        <div className={styles.thContent}>
          <p>Donation</p>
          <img
            src={sortBtn}
            alt="sort"
            onClick={() => {
              setSort("donations");
              setSearch("");
            }}
          />
        </div>
        <div className={styles.thContent}>
          <p>Updates</p>
          <img
            src={sortBtn}
            alt="sort"
            onClick={() => {
              setSort("updates");
              setSearch("");
            }}
          />
        </div>
      </div>
      {renderTableData}
    </>
  );
};

export default AdminTable;
