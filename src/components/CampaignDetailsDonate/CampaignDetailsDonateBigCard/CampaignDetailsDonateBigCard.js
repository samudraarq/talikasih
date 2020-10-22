// import { Form } from 'formik'
import React from "react";
import styles from "./CampaignDetailsDonateBigCard.module.css";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import {postShare} from '../../../redux/actions/donorActions'
import { useParams } from "react-router-dom";
import moment from 'moment'

const CampaignDetailsDonateBigCard = ({ dataDonorAll ,postShare }) => {
    const progress = dataDonorAll.dataDonate.raised/dataDonorAll.dataDonate.goal*100;
    let { idDonate } = useParams();
    // count Day left
        let now = moment(new Date()); //todays date
        let end = moment(`${dataDonorAll.dataDonate.due_date}`); // another date
        let duration = moment.duration(now.diff(end));
        let days = duration.asDays();
        let dayleft= Math.abs(parseInt(days));
    // count day left end
    return (
        <div className={styles.container}>
            <div className={styles.cardKiri}>
                <h1></h1>
                <img src={dataDonorAll.dataDonate.header_img}></img>
             
            </div>

            <div className={styles.cardKanan}>
                <h1>
                    <NumberFormat
                        value={dataDonorAll.dataDonate.raised}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"IDR."}
                    />
                </h1>
                <h4>
                    <NumberFormat
                        value={dataDonorAll.dataDonate.goal}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"IDR."}
                    />
                </h4>
                <div className={styles.progress}>
                    <div
                        className={styles.progressDone}
                        style={{ width:`${progress}%`, opacity: "1" }}
                    ></div>
                </div>
                <div className={styles.profilContainer}>
                    {console.log(dataDonorAll.dataDonate.donationCount)}
                    <img src={dataDonorAll.dataDonate?.User?.photo}></img>
                    <div className={styles.profilName}>
                        <h3>{dataDonorAll.dataDonate?.User?.name}</h3>
                        <h4>Fundraiser</h4>
                    </div>
                </div>
                <div className={styles.dataCount}>
                    <div>
                    <h1>{dayleft}</h1>
                        <p>Days left</p>
                    </div>
                    <div>
                    <h1>{dataDonorAll.dataDonate?.donationCount}</h1>
                        <p>Donations</p>
                    </div>
                    <div>
                    <h1>{dataDonorAll.dataDonate.shareCount}</h1>
                        <p>Share</p>
                    </div>
                </div>
                <button onClick={() => postShare(idDonate)} className={styles.btnShare}>Share</button>


                <button  className={styles.btnDonate}>Donate</button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch =>({
    postShare:(idDonate)=>dispatch(postShare(idDonate)),
    }
    )

const mapStateToProps = (state) => ({
    dataDonorAll: state.dataDonorAll,
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignDetailsDonateBigCard);
