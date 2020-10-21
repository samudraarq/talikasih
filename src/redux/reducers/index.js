import { combineReducers } from "redux";
import newCampaignReducer from "./newCampaignReducers";
import popularCampaignReducer from "./popularCampaignReducers";
import trendingCampaignReducer from "./trendingCampaignReducers";
import urgentCampaignReducer from "./urgentCampaignReducers";
import categoryCampaignReducer from "./categoryCampaignReducers";
import searchCampaignReducers from "./searchCampaignReducers";

export default combineReducers({
  newCampaign: newCampaignReducer,
  popularCampaign: popularCampaignReducer,
  trendingCampaign: trendingCampaignReducer,
  urgentCampaign: urgentCampaignReducer,
  categoryCampaign: categoryCampaignReducer,
  searchCampaign: searchCampaignReducers,
});
