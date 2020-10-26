import {
  SET_ERROR,
  SET_LOGIN,
  SET_USER_FROM_TOKEN,
  SET_NOT_ERROR,
} from "../actions/actionTypes";
import { SET_USERTOKEN_FROM_REGISTER } from "../actions/actionTypes";

const initialState = {
  token: "",
  user: {},
  errorMsg: "",
  isError: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_FROM_TOKEN:
      return { ...state, user: action.user };

    case SET_LOGIN:
      return { ...state, token: action.token };

    case SET_USERTOKEN_FROM_REGISTER:
      return { ...state, token: action.payload.token };

    case SET_ERROR:
      return { ...state, isError: true, errorMsg: action.errorMsg };

    case SET_NOT_ERROR:
      return { ...state, isError: false, errorMsg: "" };

    default:
      return state;
  }
};

export default authReducer;
