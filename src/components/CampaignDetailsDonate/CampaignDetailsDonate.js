import React from 'react'
import CampaignDetailsDonateAllComent from './CampaignDetailsDonateAllComent/CampaignDetailsDonateAllComent';
import { CampaignDetailsDonateBigCard } from './CampaignDetailsDonateBigCard/CampaignDetailsDonateBigCard';
import { CampaignDetailsDonateComentFrom } from './CampaignDetailsDonateComentFrom/CampaignDetailsDonateComentFrom';
import { CampaignDetailsDonateDonation } from './CampaignDetailsDonateDonation/CampaignDetailsDonateDonation';
import CampaignDetailsDonateRelatedCampaing from './CampaignDetailsDonateRelatedCampaing/CampaignDetailsDonateRelatedCampaing';
import CampaignDetailsDonateTheStory from './CampaignDetailsDonateTheStory/CampaignDetailsDonateTheStory';
import CampaignDetailsDonateUpdates from './CampaignDetailsDonateUpdates/CampaignDetailsDonateUpdates';


 const CampaignDetailsDonate = () => {
    return (
        <div>
            <CampaignDetailsDonateBigCard/>
            <CampaignDetailsDonateTheStory/>
            <CampaignDetailsDonateUpdates/>
            <CampaignDetailsDonateDonation/>
            <CampaignDetailsDonateComentFrom/>
            <CampaignDetailsDonateAllComent/>
            <CampaignDetailsDonateRelatedCampaing/>

        </div>
    )
}

export default CampaignDetailsDonate;