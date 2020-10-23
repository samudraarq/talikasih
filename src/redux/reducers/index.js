import { combineReducers } from "redux";
// import postReducer from "./postReducers";
import authReducer from "./authReducers";

export default combineReducers({
  //   post: postReducer,
  auth: authReducer,
});
