import React from "react";

import styles from "./AdminTable.module.css";

import sortBtn from "../../../assets/admin/sort.svg";
import openIcon from "../../../assets/admin/open.svg";
import pendingIcon from "../../../assets/admin/pending.svg";
import finishedIcon from "../../../assets/admin/finished.svg";
import rejectedIcon from "../../../assets/admin/rejected.svg";
import optionIcon from "../../../assets/admin/options.svg";
import downIcon from "../../../assets/admin/downarrow.svg";

const AdminTable = () => {
  return (
    <>
      <div className={styles.thContainer}>
        <div className={styles.thContent}>
          <p>Title</p>
          <img src={sortBtn} alt="sort" />
        </div>
        <div className={styles.thContent}>
          <p>Status</p>
          <img src={sortBtn} alt="sort" />
        </div>
        <div className={styles.thContent}>
          <p>Donation</p>
          <img src={sortBtn} alt="sort" />
        </div>
        <div className={styles.thContent}>
          <p>Updates</p>
          <img src={sortBtn} alt="sort" />
        </div>
      </div>
      <div className={styles.tdRow}>
        <div className={styles.tdContent}>
          <p className={styles.title}>
            Aid for necessary items to help our country
          </p>
          <p className={styles.subtitle}>by Aksi Cepat Tanggap</p>
        </div>
        <div className={styles.tdContent}>
          <img src={openIcon} alt="open" className={styles.statusIcon} />
          <p className={styles.statusName}>Open</p>
        </div>
        <div className={styles.tdContent}>
          <p className={styles.donationAmount}>
            IDR {new Intl.NumberFormat("id-ID").format(30000000)}
          </p>
        </div>
        <div className={styles.tdContent}>
          <p className={styles.updateAmount}>
            IDR {new Intl.NumberFormat("id-ID").format(20000000)}
          </p>
          <p className={styles.updateName}>Withdrawal</p>
          <p className={styles.updateAmount}>4</p>
          <p className={styles.updateName}>Recipient Updates</p>
        </div>
        <div className={styles.tdContent}>
          <div className={styles.options}>
            <img src={optionIcon} alt="option" />
            <img src={downIcon} alt="down" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminTable;
