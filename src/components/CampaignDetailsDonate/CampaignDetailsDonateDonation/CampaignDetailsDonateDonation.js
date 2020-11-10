import React from 'react'
import styles from "./CampaignDetailsDonateDonation.module.css";
import cardImg1 from "../../../assets/general/default_image.jpeg";
import moment from 'moment'
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import {useState} from 'react'
const CampaignDetailsDonateDonation = (dataDonorAll) => {


    const [limit, setLimit ] = useState(4);
    const [loadMoreBol, setloadMoreBol ] = useState(true);

    const loadMore = () =>{
    setloadMoreBol(false);
      setLimit();
    }

    const loadLess = () =>{
      setloadMoreBol(true);
        setLimit(4);
      }
    
    const isiDonate = dataDonorAll?.dataDonorAll?.dataDonateDonor.length;
    const UserAllDonate = dataDonorAll?.dataDonorAll?.dataDonateDonor?.slice(0, limit).map(
        (item, index) => {
          return (
    
            <div className={styles.card} key={index}>
                <div className={styles.cardheader}>
                    <div className={styles.foto}>
                    <img src={item?.User?.photo?   item?.User?.photo  : cardImg1 } alt="user"></img>
                    </div>
                    <div className={styles.info}>
                     <h3>
                     <NumberFormat
                        value={item.amount}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"Rp."}
                    />
                     
                     </h3>
                    <br></br>
                     <h5>{item?.User?.name}</h5>
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
      <div className={styles.body}>
        <div className={styles.container}>          
        <h1>Donation ({isiDonate})</h1>
        <div className={styles.wrapper}>
            {/* looping bagian ini */}
            {UserAllDonate}
            
            {/* loping end */}
        </div>
        <div className={styles.btnwrap}>
            {/* button di taruh fungsi untuk menganti max slice */}

            { isiDonate ===0? <h1>Tidak Ada Donation</h1> :

            loadMoreBol ?   <button onClick={loadMore} className={styles.btnLoadmore}>LOAD MORE</button>:   <button onClick={loadLess} className={styles.btnLoadmore}>SHOW LESS</button>

            }
             

            </div>
        </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    dataDonorAll: state.dataDonorAll,
  });
  
  export default connect(mapStateToProps, null)(CampaignDetailsDonateDonation);
  