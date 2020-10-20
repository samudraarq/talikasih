import { combineReducers } from "redux";
import newCampaignReducer from "./newCampaignReducers";
import popularCampaignReducer from "./popularCampaignReducers";

export default combineReducers({
  newCampaign: newCampaignReducer,
  popularCampaign: popularCampaignReducer,
});
