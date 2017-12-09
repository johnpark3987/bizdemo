import axios from 'axios';
import { AsyncStorage } from 'react-native';
import {
  USER_INFO_AVAILABLE,
  USER_INFO_NOT_AVAILABLE,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  FORGOT_PASSWORD
} from './types';

const globalUrl =  "https://api.fixnapp.com/v2";

export const emailChanged = (value) => {
  return {
    type: EMAIL_CHANGED,
    payload: value
  };
};

export const passwordChanged = (value) => {
  return {
    type: PASSWORD_CHANGED,
    payload: value
  };
};

export const checkForUser = () => async dispatch => {
  let token = await AsyncStorage.getItem('userInfo');
  if(token === null || !token) {
    dispatch({ type: USER_INFO_NOT_AVAILABLE });
  } else {
    dispatch({ type: USER_INFO_AVAILABLE });
  }
};

export const tryLoginUser = (user) =>  async dispatch => {
  try {
    const loginApiUrl = `${globalUrl}/member/login/`;
    const loginFormdata = await readyLoginForm(user);
    let { data } = await axios.post(loginApiUrl, loginFormdata);
    if (data.status == "false") {
      dispatch({ type: LOGIN_USER_ERROR, payload: data });
    }

    const userData = {
      firstName: data.data.first_name,
      lastName: data.data.last_name,
      oAuthToken: data.data.oauth_token,
      userId: data.data.userid
    };
    let test = JSON.stringify(userData);
    await AsyncStorage.setItem('userInfo', test);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: userData });
  } catch (e) {
    dispatch({ type: LOGIN_USER_ERROR, payload: e });
  }
};

const readyLoginForm = async user => {
  let loginForm = new FormData();
  loginForm.append("oauth_provider", "fixnapp");

  // await notifications, device info

  // loginForm.append("oauth_uid", "102020695161104582613");
  // loginForm.append("first_name", "eee");
  // loginForm.append("last_name", "eee");
  loginForm.append("userid", user.userEmail);
  loginForm.append("password", user.userPassword);
  loginForm.append("notification_id", "sdfgewgege");
  loginForm.append("device_uid", "123123");
  loginForm.append("device_serial", "1242323");
  return loginForm;
};
