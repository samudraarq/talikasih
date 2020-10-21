import { combineReducers } from "redux";
import newCampaignReducer from "./newCampaignReducers";
import popularCampaignReducer from "./popularCampaignReducers";
import trendingCampaignReducer from "./trendingCampaignReducers";

export default combineReducers({
  newCampaign: newCampaignReducer,
  popularCampaign: popularCampaignReducer,
  trendingCampaign: trendingCampaignReducer,
});
