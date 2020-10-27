import { combineReducers } from "redux";
// import postReducer from "./postReducers";
import authReducer from "./authReducers";
import layoutReducer from "./layoutReducers";

export default combineReducers({
  //   post: postReducer,
  auth: authReducer,
  layout: layoutReducer,
});
