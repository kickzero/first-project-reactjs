import { ACCESS_TOKEN, ERRORS_MESSAGE } from "../../constants";
import userService from "../../service/user";

// action type
export const ATC_LOGIN = 'ATC_LOGIN';
export const ATC_LOGOUT = 'ATC_LOGOUT';
export const ATC_CHANGEPASSWORD = 'ATC_CHANGEPASSWORD';
export const ATC_UPDATE_PROFILE = 'ATC_UPDATE_PROFILE';

// action create
export function actLogins(token, currentUser) {
  return {
    type: ATC_LOGIN,
    payload: {
      token, 
      currentUser,
    },
  }
}

export function actLogout() {
  return {
    type: ATC_LOGOUT,
    payload: null,
  }
}


export function actChangePassword(password, new_password, confirm_new_password) {
  return {
    type: ATC_CHANGEPASSWORD,
    payload: {
      password,
      new_password,
      confirm_new_password
    },
  }
}


export function actUpdateProfile(password, new_password, confirm_new_password) {
  return {
    type: ATC_UPDATE_PROFILE,
    payload: {
      description,
      simple_local_avatar
    },
  }
}

export function actLoginsAsync({ username, password }) {
  return async (dispatch) => {
    try {
      const response = await userService.login({ username, password });
      const data = response.data;
      const token = data.token;
      dispatch(actFetchMeAsync(token));
      return {
        ok: true,
      }
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        message: 'Thông tin đăng nhập không chính xác!',
      }
    }
  }
}

export function actFetchMeAsync(token) {
  if(!token) token = localStorage.getItem(ACCESS_TOKEN);
  return async (dispatch) => {
    try {
      const responseMe = await userService.fetchMe(token);
      const currentUser = responseMe.data;
      dispatch(actLogins(token, currentUser));
    } catch (error) {
      console.log(error);
    }
  }
}

export function actRegisterAsync(data = {}) {
  return async (dispatch) => {
    try {
      await userService.register(data);
      const { username, password } = data;
      // const token = data.token;
      dispatch(actLoginsAsync({ username, password }));
      return {
        ok: true,
      };
    } catch (error) {
      const errorCode = error.response.data.code;
      const errorMasege = ERRORS_MESSAGE[errorCode];
      return {
        ok: false,
        message: errorMasege,
      }
    }
  }
}

export function actChangePasswordAsync({ password, new_password, confirm_new_password }) {
  return async (dispatch) => {
    try {
      const response = await userService.changePassword({ password, new_password, confirm_new_password });
      const data = response.data;
      console.log('data', data);
      dispatch(actChangePassword(data));
      return {
        ok: true,
      };
    } catch (error) {
      const errorCode = error.response.data.code;
      const errorMasege = ERRORS_MESSAGE[errorCode];
      return {
        ok: false,
        message: errorMasege,
      }
    }
  }
}




