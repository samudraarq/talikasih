import React from 'react'
import styles from "./CampaignDetailsDonateDonation.module.css";
import cardImg1 from "../../../assets/general/default_image.jpeg";
import moment from 'moment'
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import {useState} from 'react'
const CampaignDetailsDonateDonation = (dataDonorAll) => {


    const [limit, setLimit ] = useState(3);
    const [loadMoreBol, setloadMoreBol ] = useState(true);

    const loadMore = () =>{
    setloadMoreBol(false);
      setLimit();
    }

    const loadLess = () =>{
      setloadMoreBol(true);
        setLimit(3);
      }

    const UserAllDonate = dataDonorAll?.dataDonorAll?.dataDonateDonor?.slice(0, limit).map(
        (item, index) => {
          return (
    
            <div className={styles.card} key={index}>
                <div className={styles.cardheader}>
                    <div className={styles.foto}>
                    <img src={item?.User?.photo?   item?.User?.photo  : cardImg1 }></img>
                    </div>
                    <div className={styles.info}>
                     <h3>
                     <NumberFormat
                        value={item.amount}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"IDR."}
                    />
                     
                     </h3>
                    <br></br>
                     <h5>{item?.User?.Name}</h5>
                    <p>{moment(item.createdAt).fromNow()}</p>
                    </div>
                </div>

              
                <div className={styles.cardbody}>
                 {item.comment}
                </div>
            </div>
           
          );
        }
      );
    

    return (

        <div className={styles.container}>          
        <h1>Donation ({UserAllDonate.length})</h1>
        <div className={styles.wrapper}>
            {/* looping bagian ini */}
            {UserAllDonate}
            
            {/* loping end */}
        </div>
        <div className={styles.btnwrap}>
            {/* button di taruh fungsi untuk menganti max slice */}
              {loadMoreBol ?   <button onClick={loadMore} className={styles.btnLoadmore}>LOAD MORE</button>:   <button onClick={loadLess} className={styles.btnLoadmore}>SHOW LESS</button>}

            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    dataDonorAll: state.dataDonorAll,
  });
  
  export default connect(mapStateToProps, null)(CampaignDetailsDonateDonation);
  