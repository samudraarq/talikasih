import { combineReducers } from "redux";
import campaignReducer from "./campaignReducers";

export default combineReducers({
  campaign: campaignReducer,
});
