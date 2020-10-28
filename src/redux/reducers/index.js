import { combineReducers } from "redux";
// import postReducer from "./postReducers";

import donorReducers from './donorReducers'
export default combineReducers({
  //   post: postReducer,
  dataDonorAll : donorReducers
});

