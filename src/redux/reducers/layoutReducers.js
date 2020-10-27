import {
  SET_MODAL_OPEN,
  SET_MODAL_CLOSE,
  SET_FORM_LOGIN,
  SET_FORM_REGISTER,
} from "../actions/actionTypes";
// import { SET_USERTOKEN_FROM_REGISTER } from "../actions/actionTypes";

const initialState = {
  modalIsOpen: false,
  isLogin: false,
};

const layoutReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_OPEN:
      return { ...state, modalIsOpen: true };
    case SET_MODAL_CLOSE:
      return { ...state, modalIsOpen: false };
    case SET_FORM_LOGIN:
      return { ...state, isLogin: true };
    case SET_FORM_REGISTER:
      return { ...state, isLogin: false };
    default:
      return state;
  }
};

export default layoutReducers;
