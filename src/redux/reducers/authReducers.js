import { SET_USERTOKEN_FROM_LOGIN } from "../actions/actionTypes";

const initialState = {
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERTOKEN_FROM_LOGIN:
      return { ...state, token: action.payload.token };

    default:
      return state;
  }
};

export default authReducer;
