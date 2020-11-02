import React from "react";
import styles from "./CampaignDetailsDonateTheStory.module.css";
import { connect } from "react-redux";

const CampaignDetailsDonateTheStory = ({ dataDonorAll }) => {
  return (
    <div className={styles.container}>
      <div className={styles.panelWrapper}>
        <a href="#show" className={styles.show} id="show">
          Reed More
        </a>
        <a href="#hide" className={styles.hide} id="hide">
          Hide Full Article
        </a>
        <div className={styles.panel}>
          <h3> The Story</h3>
          <br></br>
          <div
            dangerouslySetInnerHTML={{ __html: dataDonorAll.dataDonate.story }}
          ></div>
        </div>
        <div className={styles.fade}></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataDonorAll: state.dataDonorAll,
});

export default connect(mapStateToProps, null)(CampaignDetailsDonateTheStory);
