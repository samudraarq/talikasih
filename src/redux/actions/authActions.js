import axios from "axios";
import {
  SET_REGISTER,
  SET_LOGIN,
  SET_USER_FROM_TOKEN,
  SET_ERROR,
  SET_NOT_ERROR,
  SET_MODAL_CLOSE,
  SET_AUTH_LOADING,
  EDIT_USER_PROFILE,
  SET_LOGOUT,
  GET_USER_DONATION,
  GET_USER_CAMPAIGN,
} from "./actionTypes";

export const setLogin = (dataQs) => {
  return (dispatch) => {
    dispatch({
      type: SET_NOT_ERROR,
    });

    dispatch({
      type: SET_AUTH_LOADING,
    });

    axios
      .post("https://warm-tundra-23736.herokuapp.com/login", dataQs)
      .then(function (response) {
        console.log(response.data);

        if (response.data.success === false) {
          dispatch({
            type: SET_AUTH_LOADING,
          });
          dispatch({
            type: SET_ERROR,
            errorMsg: response.data.message,
          });
        } else {
          dispatch({
            type: SET_LOGIN,
            token: response.data.token,
          });

          localStorage.setItem("token", response.data.token);

          const config = {
            method: "get",
            url: "https://warm-tundra-23736.herokuapp.com/formuser",
            headers: {
              token: response.data.token,
            },
          };

          axios(config)
            .then(function (response) {
              console.log(response.data);
              dispatch({
                type: SET_USER_FROM_TOKEN,
                user: response.data.user,
              });
              dispatch({
                type: SET_AUTH_LOADING,
              });
              dispatch({
                type: SET_MODAL_CLOSE,
              });
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };
};

export const setRegister = (dataQs) => {
  return (dispatch) => {
    dispatch({
      type: SET_NOT_ERROR,
    });

    dispatch({
      type: SET_AUTH_LOADING,
    });

    axios
      .post("https://warm-tundra-23736.herokuapp.com/", dataQs)
      .then(function (response) {
        console.log(response.data);

        if (response.data.success === false) {
          dispatch({
            type: SET_AUTH_LOADING,
          });

          dispatch({
            type: SET_ERROR,
            errorMsg: response.data.message,
          });
        } else {
          dispatch({
            type: SET_REGISTER,
            token: response.data.token,
          });

          localStorage.setItem("token", response.data.token);

          const config = {
            method: "get",
            url: "https://warm-tundra-23736.herokuapp.com/formuser",
            headers: {
              token: response.data.token,
            },
          };

          axios(config)
            .then(function (response) {
              console.log(response.data);
              dispatch({
                type: SET_USER_FROM_TOKEN,
                user: response.data.user,
              });
              dispatch({
                type: SET_AUTH_LOADING,
              });
              dispatch({
                type: SET_MODAL_CLOSE,
              });
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };
};

export const setUserPersistanceRegister = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({
        type: SET_REGISTER,
        token: token,
      });

      try {
        const config = {
          method: "get",
          url: "https://warm-tundra-23736.herokuapp.com/formuser",
          headers: {
            token: token,
          },
        };
        const response = await axios(config);
        console.log(response.data);
        dispatch({
          type: SET_USER_FROM_TOKEN,
          user: response.data.user,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };
};

export const setUserPersistanceLogin = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({
        type: SET_LOGIN,
        token: token,
      });

      try {
        const config = {
          method: "get",
          url: "https://warm-tundra-23736.herokuapp.com/formuser",
          headers: {
            token: token,
          },
        };
        const response = await axios(config);
        console.log(response.data);
        dispatch({
          type: SET_USER_FROM_TOKEN,
          user: response.data.user,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };
};

export const editUserProfile = (dataQs) => {
  return (dispatch, getState) => {
    const { auth } = getState();

    const config = {
      method: "put",
      url: "https://warm-tundra-23736.herokuapp.com/",
      headers: {
        token: auth.token,
      },
      data: dataQs,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        dispatch({
          type: EDIT_USER_PROFILE,
          token: response.data.token,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const setLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({
      type: SET_LOGOUT,
    });
  };
};

export const getUserDonation = (token) => {
  return (dispatch) => {
    const config = {
      method: "get",
      url: "https://warm-tundra-23736.herokuapp.com/donate/campaign",
      headers: {
        token: token,
      },
    };

    axios(config)
      .then(function (response) {
        dispatch({
          type: GET_USER_DONATION,
          data: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getUserCampaign = (token) => {
  return (dispatch) => {
    const config = {
      method: "get",
      url: "https://warm-tundra-23736.herokuapp.com/campaign/user",
      headers: {
        token: token,
      },
    };

    axios(config)
      .then(function (response) {
        dispatch({
          type: GET_USER_CAMPAIGN,
          data: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};