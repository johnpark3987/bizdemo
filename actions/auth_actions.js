import axios from 'axios';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  TRY_LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  FORGOT_PASSWORD
} from './types';

const globalUrl =  "https://api.fixnapp.com/v2";

export const emailChanged = (value) => {
  console.log(value);
  return {
    type: EMAIL_CHANGED,
    payload: value
  };
};

export const passwordChanged = (value) => {
  console.log("value");
  
  return {
    type: PASSWORD_CHANGED,
    payload: value
  };
};

export const fetchJobs = (region, callback) => async dispatch => {
  try {
    let zip = await reverseGeocode(region);
    const url = buildJobsUrl(zip);
    let { data } = await axios.get(url);
    console.log(data);
    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
  } catch (e) {
    dispatch({ type: FETCH_JOBS_ERROR, payload: e });
    console.error(e);
  }
};

export const tryLoginUser = (user) =>  async dispatch => {
  console.log(user);
  try {
    const loginApiUrl = `${globalUrl}/member/login/`;
    // axios
    let loginFormdata = new FormData();
    loginFormdata.append("oauth_provider", "fixnapp");
    loginFormdata.append("userid", "john@fixnapp.com");
    loginFormdata.append("notification_id", "sdfgewgege");
    loginFormdata.append("device_uid", "123123");
    loginFormdata.append("device_serial", "1242323");
    loginFormdata.append("oauth_uid", "102020695161104582613");
    loginFormdata.append("first_name", "eee");
    loginFormdata.append("last_name", "eee");

    // let config = user
    let data = await axios.post(loginApiUrl, loginFormdata)
    console.log(data);
    // console.log('user');
    // console.log(user);

    dispatch({ type: LOGIN_USER_SUCCESS, payload: data })
    // return {
    //   type: TRY_LOGIN_USER
    // }
  } catch (e) {
    console.log(e);
  }
};
