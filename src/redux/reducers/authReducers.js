import {
  SET_ERROR,
  SET_LOGIN,
  SET_USER_FROM_TOKEN,
  SET_NOT_ERROR,
  SET_REGISTER,
  SET_AUTH_LOADING,
  EDIT_USER_PROFILE,
  EDIT_USER_IMAGE,
  SET_EDIT_LOADING,
  SET_EDIT_SUCCESS,
  SET_LOGOUT,
  GET_USER_DONATION,
  GET_USER_CAMPAIGN,
} from "../actions/actionTypes";

const initialState = {
  token: "",
  user: {},
  isLogin: false,
  errorMsg: "",
  isError: false,
  isLoading: false,
  isEditLoading: false,
  isEditSuccess: false,
  userDonation: [],
  userCampaign: [],
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

    case EDIT_USER_PROFILE:
      return { ...state, token: action.token };

    case EDIT_USER_IMAGE:
      return { ...state, token: action.token };

    case SET_EDIT_LOADING:
      return { ...state, isEditLoading: !state.isEditLoading };

    case SET_EDIT_SUCCESS:
      return { ...state, isEditSuccess: !state.isEditSuccess };

    case SET_LOGOUT:
      return {
        ...state,
        token: "",
        user: {},
        isLogin: false,
      };

    case GET_USER_DONATION:
      return { ...state, userDonation: action.data };

    case GET_USER_CAMPAIGN:
      return { ...state, userCampaign: action.data };

    default:
      return state;
  }
};

export default authReducer;
