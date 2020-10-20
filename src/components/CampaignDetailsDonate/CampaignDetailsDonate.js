import React, { useState,useEffect } from "react";
import CampaignDetailsDonateAllComent from './CampaignDetailsDonateAllComent/CampaignDetailsDonateAllComent';
import { CampaignDetailsDonateBigCard } from './CampaignDetailsDonateBigCard/CampaignDetailsDonateBigCard';
import { CampaignDetailsDonateComentFrom } from './CampaignDetailsDonateComentFrom/CampaignDetailsDonateComentFrom';
import { CampaignDetailsDonateDonation } from './CampaignDetailsDonateDonation/CampaignDetailsDonateDonation';
import CampaignDetailsDonateRelatedCampaing from './CampaignDetailsDonateRelatedCampaing/CampaignDetailsDonateRelatedCampaing';
import CampaignDetailsDonateTheStory from './CampaignDetailsDonateTheStory/CampaignDetailsDonateTheStory';
import CampaignDetailsDonateUpdates from './CampaignDetailsDonateUpdates/CampaignDetailsDonateUpdates';
import axios from 'axios'

 const CampaignDetailsDonate = () => {
    const [DataDonate, setDataDonate] = useState([]);
    useEffect(() => {
      

        axios('https://warm-tundra-23736.herokuapp.com/campaign/1')
        .then(function (response) {
            console.log(response.data)
            setDataDonate(response.data)
            

        })
        .catch(function (error) {
        console.log(error);
        });

        
      }, []);

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