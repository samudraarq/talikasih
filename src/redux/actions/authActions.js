import { SET_USERTOKEN_FROM_LOGIN } from "./actionTypes";

export const setUsertokenFromLogin = (token) => {
  return {
    type: SET_USERTOKEN_FROM_LOGIN,
    payload: token,
  };
};
