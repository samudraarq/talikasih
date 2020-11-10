import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import styles from "./OptionModal.module.css";

import optionIcon from "../../../../assets/admin/options.svg";
import downIcon from "../../../../assets/admin/downarrow.svg";

const OptionModal = ({ campaign, auth }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(true);

    document.addEventListener("click", handleClose);
  };

  const handleClose = () => {
    setOpenMenu(false);

    document.removeEventListener("click", handleClose);
  };

  const handleChoose = (e) => {
    if (e.target.id === "approve") {
      const config = {
        method: "put",
        url: `https://warm-tundra-23736.herokuapp.com/discover/approve/${campaign.id}`,
        headers: {
          token: auth.token,
        },
      };
      axios(config)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    } else if (e.target.id === "reject") {
      const config = {
        method: "put",
        url: `https://warm-tundra-23736.herokuapp.com/discover/reject/${campaign.id}`,
        headers: {
          token: auth.token,
        },
      };
      axios(config)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    } else if (e.target.id === "delete") {
      const config = {
        method: "delete",
        url: `https://warm-tundra-23736.herokuapp.com/campaign/delete/${campaign.id}`,
        headers: {
          token: auth.token,
        },
      };
      axios(config)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
    handleClose();
  };

  return (
    <>
      <div className={styles.sortContainer}>
        <div onClick={handleClick} className={styles.sortIconContainer}>
          <img src={optionIcon} alt="option" />
          <img src={downIcon} alt="down" />
        </div>

        {openMenu && (
          <div className={styles.menuContainer}>
            <span
              className={styles.menuItem}
              onClick={handleChoose}
              id="approve"
            >
              Approve Campaign
            </span>
            <span
              className={styles.menuItem}
              onClick={handleChoose}
              id="reject"
            >
              Reject Campaign
            </span>
            <span className={styles.menuItem} onClick={handleChoose} id="edit">
              Edit
            </span>
            <span
              className={styles.menuItem}
              onClick={handleChoose}
              id="delete"
            >
              Delete
            </span>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(OptionModal);
