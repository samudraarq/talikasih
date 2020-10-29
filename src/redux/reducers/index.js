import { combineReducers } from "redux";
import newCampaignReducer from "./newCampaignReducers";
import popularCampaignReducer from "./popularCampaignReducers";
import trendingCampaignReducer from "./trendingCampaignReducers";
import urgentCampaignReducer from "./urgentCampaignReducers";
import categoryCampaignReducer from "./categoryCampaignReducers";
import searchCampaignReducers from "./searchCampaignReducers";
// import postReducer from "./postReducers";
import authReducer from "./authReducers";
import layoutReducer from "./layoutReducers";

export default combineReducers({
  auth: authReducer,
  layout: layoutReducer,
  newCampaign: newCampaignReducer,
  popularCampaign: popularCampaignReducer,
  trendingCampaign: trendingCampaignReducer,
  urgentCampaign: urgentCampaignReducer,
  categoryCampaign: categoryCampaignReducer,
  searchCampaign: searchCampaignReducers,
});
