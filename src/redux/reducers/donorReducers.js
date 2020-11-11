// import { GET_DONOR_DATA } from "../actions/actionTypes";
// import { GET_DONOR_COMENT } from "../actions/actionTypes";
// import { POST_SHARE } from "../actions/actionTypes";
// import { GET_DONATION_DATA } from "../actions/actionTypes";
// import { GET_DONATION_STORY } from "../actions/actionTypes";
// import { GET_DONATION_STORY_LOAD_MORE } from "../actions/actionTypes";

import {
  GET_DONOR_DATA,
  GET_DONOR_COMENT,
  POST_SHARE,
  GET_DONATION_DATA,
  GET_DONATION_STORY,
  GET_DONATION_STORY_LOAD_MORE,
  GET_RELATED_CAMPAIGNS,
  RELATED_CAMPAIGNS_LOAD,
} from "../actions/actionTypes";
// import { postShare } from "../actions/donorActions";

const initialState = {
  dataDonate: [],
  dataDonateComen: [],
  dataDonateDonor: [],
  dataDonateStory: {},
  dataDonateUpdates: [],
  dataShare: [],
  relatedCampaigns: [],
  relatedCampaignsLoading: false,
};

const donorReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DONOR_DATA:
      return { ...state, dataDonate: action.data };

    case GET_DONATION_DATA:
      return { ...state, dataDonateDonor: action.data };

    case GET_DONOR_COMENT:
      return { ...state, dataDonateComen: action.data };

    case GET_DONATION_STORY:
      return {
        ...state,
        dataDonateStory: action.data,
        dataDonateUpdates: action.data.Campaign_Logs,
      };

    case GET_DONATION_STORY_LOAD_MORE:
      return {
        ...state,
        dataDonateUpdates: [...state.dataDonateUpdates, ...action.data],
      };

    case POST_SHARE:
      return { ...state, dataShare: action.data };

    case GET_RELATED_CAMPAIGNS:
      return { ...state, relatedCampaigns: action.posts };
    case RELATED_CAMPAIGNS_LOAD:
      return {
        ...state,
        relatedCampaignsLoading: !state.relatedCampaignsLoading,
      };

    default:
      return state;
  }
};

export default donorReducers;
