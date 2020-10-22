import React, { useEffect } from "react";
import CampaignDetailsDonateAllComent from './CampaignDetailsDonateAllComent/CampaignDetailsDonateAllComent';
import CampaignDetailsDonateBigCard  from './CampaignDetailsDonateBigCard/CampaignDetailsDonateBigCard';
import { CampaignDetailsDonateComentFrom } from './CampaignDetailsDonateComentFrom/CampaignDetailsDonateComentFrom';
import { CampaignDetailsDonateDonation } from './CampaignDetailsDonateDonation/CampaignDetailsDonateDonation';
import CampaignDetailsDonateRelatedCampaing from './CampaignDetailsDonateRelatedCampaing/CampaignDetailsDonateRelatedCampaing';
import CampaignDetailsDonateTheStory from './CampaignDetailsDonateTheStory/CampaignDetailsDonateTheStory';
import CampaignDetailsDonateUpdates from './CampaignDetailsDonateUpdates/CampaignDetailsDonateUpdates';
import {connect} from 'react-redux'
import {getDonorData} from '../../redux/actions/donorActions'
import {getDonorDataComent} from '../../redux/actions/donorActions'
import { useParams } from "react-router-dom";

 const CampaignDetailsDonate = ({getDonorData,getDonorDataComent}) => {
    let { idDonate } = useParams();
    useEffect(() => {
        getDonorData(idDonate) 
        getDonorDataComent(idDonate)
      }, [getDonorData, getDonorDataComent, idDonate  ]);

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

const mapDispatchToProps = dispatch =>({
getDonorData:(idDonate)=>dispatch(getDonorData(idDonate)),
getDonorDataComent:(idDonate)=>dispatch(getDonorDataComent(idDonate))
}
)
export default connect(null, mapDispatchToProps)(CampaignDetailsDonate);