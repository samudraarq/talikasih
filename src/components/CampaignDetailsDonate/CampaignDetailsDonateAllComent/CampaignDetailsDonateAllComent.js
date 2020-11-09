import React from "react";
import styles from "./CampaignDetailsDonateAllComent.module.css";
import cardImg1 from "../../../assets/general/default_image.jpeg";
import { connect } from "react-redux";
import moment from 'moment'
import {useState} from 'react'

const CampaignDetailsDonateAllComent = (dataDonorAll) => {
  const [limit, setLimit ] = useState(2);
  const [loadMoreBol, setloadMoreBol ] = useState(true);
  const loadLess = ()=>{
    setLimit(2);
    setloadMoreBol(true);
  }
  const loadMore = () =>{
    setLimit();
    setloadMoreBol(false) ;
  }

  
  const cekisi =dataDonorAll.dataDonorAll?.dataDonateComen.length;

;  const UserAllComent = dataDonorAll.dataDonorAll?.dataDonateComen?.slice(0, limit).map(
    (item, index) => {
      return (

        <div className={styles.card} key={index}>
          <div className={styles.cardheader}>
            <div className={styles.foto}>
              <img src={item?.User?.photo?   item?.User?.photo  : cardImg1 } alt='user'></img>
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
    <div className={styles.body}>
    <div className={styles.container}>
      <div className={styles.wrapper}>
    
       {UserAllComent}
        {/* loping end */}
      </div>
      <div className={styles.btnwrap}>
        {/* button di taruh fungsi untuk menganti max slice */}
            {cekisi ===0  ? <h1>Tidak ada Coment</h1> : 
            loadMoreBol  ? <button onClick={loadMore}  className={styles.btnLoadmore}>LOAD MORE</button>  : <button onClick={loadLess}  className={styles.btnLoadmore}>SHOW LESS</button> } 
            

      </div>
    </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  dataDonorAll: state.dataDonorAll,
});

export default connect(mapStateToProps, null)(CampaignDetailsDonateAllComent);
