import {
  SET_ERROR,
  SET_LOGIN,
  SET_USER_FROM_TOKEN,
  SET_NOT_ERROR,
  SET_REGISTER,
  SET_AUTH_LOADING,
} from "../actions/actionTypes";

const initialState = {
  token: "",
  user: {},
  isLogin: false,
  errorMsg: "",
  isError: false,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_FROM_TOKEN:
      return { ...state, user: action.user, isLogin: true };

    case SET_LOGIN:
      return { ...state, token: action.token };

    case SET_REGISTER:
      return { ...state, token: action.token };

    case SET_ERROR:
      return { ...state, isError: true, errorMsg: action.errorMsg };

    case SET_NOT_ERROR:
      return { ...state, isError: false, errorMsg: "" };

    case SET_AUTH_LOADING:
      return { ...state, isLoading: !state.isLoading };

    default:
      return state;
  }
};

export default authReducer;
