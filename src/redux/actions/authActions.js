import { SET_USERTOKEN_FROM_LOGIN } from "./actionTypes";
import { SET_USERTOKEN_FROM_REGISTER } from "./actionTypes";


export const setUsertokenFromLogin = (token) => {
  return {
    type: SET_USERTOKEN_FROM_LOGIN,
    payload: token,
  };
};

export const setUsertokenFromRegister = (token) => {
  return {
    type: SET_USERTOKEN_FROM_REGISTER,
    payload: token,
  };
};