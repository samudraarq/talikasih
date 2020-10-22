import React from "react";
import styles from "./CampaignDetailsDonateAllComent.module.css";
import cardImg1 from "../../../assets/general/default_image.jpeg";
import { connect } from "react-redux";
import moment from 'moment'
const CampaignDetailsDonateAllComent = (dataDonorAll) => {
    

  const UserAllComent = dataDonorAll.dataDonorAll?.dataDonateComen?.slice(0, ).map(
    (item, index) => {
      return (

        <div className={styles.card} key={index}>
          <div className={styles.cardheader}>
            <div className={styles.foto}>
              <img src={item?.User?.content?   item?.User?.content  : cardImg1 }></img>
            </div>
            <div className={styles.info}>
              <h5>{item?.User?.name}</h5>
              <p>{moment(item.createdAt).fromNow()}</p>
            </div>
          </div>
          <div className={styles.cardbody}>
          {item?.content ? item?.content:"Komentar Kosong"}
          </div>
        </div>
       
      );
    }
  );
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
    
       {UserAllComent}
        {/* loping end */}
      </div>
      <div className={styles.btnwrap}>
        {/* button di taruh fungsi untuk menganti max slice */}
        <button  className={styles.btnLoadmore}>LOAD MORE</button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  dataDonorAll: state.dataDonorAll,
});

export default connect(mapStateToProps, null)(CampaignDetailsDonateAllComent);
