import {
  SET_MODAL_OPEN,
  SET_MODAL_CLOSE,
  SET_FORM_LOGIN,
  SET_FORM_REGISTER,
} from "./actionTypes";

export const setModalOpen = () => {
  return {
    type: SET_MODAL_OPEN,
  };
};

export const setModalClose = () => {
  return {
    type: SET_MODAL_CLOSE,
  };
};

export const setFormLogin = () => {
  return {
    type: SET_FORM_LOGIN,
  };
};

export const setFormRegister = () => {
  return {
    type: SET_FORM_REGISTER,
  };
};
