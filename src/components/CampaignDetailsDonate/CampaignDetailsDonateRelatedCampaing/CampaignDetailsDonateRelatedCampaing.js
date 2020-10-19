import React from 'react'
import styles from "./CampaignDetailsDonateRelatedCampaing.module.css";
import CampaignCard from '../../CampaignCard/CampaignCard'
 const CampaignDetailsDonateRelatedCampaing = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardWrap}>
            <div className={styles.cardStyle}> <CampaignCard/></div>
            <div className={styles.cardStyle}> <CampaignCard/></div>
            <div className={styles.cardStyle}> <CampaignCard/></div>
            </div>
        </div>
    )
}

export default CampaignDetailsDonateRelatedCampaing;